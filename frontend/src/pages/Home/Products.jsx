import { Box, Button, Checkbox, Flex, Grid, GridItem, Heading, Image, Input, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { filterProduct, getProduct } from '../../redux/productReducer/action'
import { FaStar } from "react-icons/fa";
import Loader from '../../components/Loader'
import { useNavigate, useSearchParams } from 'react-router-dom';

const Products = () => {
    const { isLoading, isError, products,searchKeyword } = useSelector((store) => {
        return {
            isLoading: store.productReducer.isLoading,
            isError: store.productReducer.isError,
            products: store.productReducer.products,
            searchKeyword:store.productReducer.searchKeyword
        }
    }, shallowEqual)

    const dispatch = useDispatch()
    const [searchParams,setSearchParams]=useSearchParams()
    const [displaysort, setDisplaySort] = useState(false)
    const [categoryShow, setCategoryShow] = useState(false)
    const [genderShow, setGenderShow] = useState(false)
    const [fabricShow,setfabricShow]=useState(false)
    const [sort,setSort]=useState("")
    const [category,setCategory]=useState([])
    const [gender,setGender]=useState([])
    const [fabric,setFabric]=useState([])
    const navigate=useNavigate()
    const handleArrow = () => {
        setDisplaySort(!displaysort)
    }
    const handleCategoryShow = () => {
        setCategoryShow(!categoryShow)
    }
    const handleGenderShow = () => {
        setGenderShow(!genderShow)
    }
    const handlefabricShow=()=>{
        setfabricShow(!fabricShow)
    }

    useEffect(() => {
        dispatch(getProduct(""))
    }, [])

    useEffect(()=>{
        let params={}
        if(sort){
            if(sort=="asc" || sort=="desc"){
                params["_sort"]="price"
                params["_order"]=sort
            }else{
                params["_sort"]=sort
            }
        }
        if(category.length>0){
            params.category=category;
        }
        if(gender.length>0){
            params.gender=gender;
        }
        if(fabric.length>0){
            params.fabric=fabric;
        }
        setSearchParams(params)
        dispatch(filterProduct(params))
    },[sort,category,gender,fabric])

    const handleCategory=(e)=>{
        const value=e.target.value;
        let categories=[...category]
        if(categories.includes(value)){
            categories=categories.filter((el)=>el!==value)
        }else{
            categories.push(value)
        }
        setCategory(categories)
    }
    const handleGender=(value)=>{
        let genders=[...gender]
        if(genders.includes(value)){
            genders=genders.filter((gen)=>gen!==value)
        }else{
            genders.push(value)
        }
        setGender(genders)
    }
    const handleFabric=(e)=>{
        const value=e.target.value;
        let fabrics=[...fabric]
        if(fabrics.includes(value)){
            fabrics=fabrics.filter((el)=>el!==value)
        }else{
            fabrics.push(value)
        }
        setFabric(fabrics)
    }

    // window.addEventListener('scroll', () => {
    //     const scrollHeight = document.documentElement.scrollHeight;
    //     // console.log("scrollHeight:",scrollHeight)
    //     const scrollTop = window.scrollY;
    //     // console.log("scrollTop:",scrollTop)
    //     const clientHeight = document.documentElement.clientHeight;
    //     // console.log("clientHeight:",clientHeight)
      
    //     // Check if the user has scrolled to the bottom
    //     if (Math.floor(scrollHeight - scrollTop) === clientHeight) {
    //       // Load more products when the user reaches the bottom
    //       console.log("Bottum of the page!")
    //     }
    //   });


    return (
        <div>
            <Box>
                <Text fontWeight={600} fontSize={'35px'}>{searchKeyword?searchKeyword:"Products For You"}</Text>
            </Box>
            <br />
            <Flex gap={"20px"} id='allproducts'>
                <Box className='sidebar' w={'24%'}>
                    <Flex h={'45px'} pr={'20px'} pl={'20px'} border={'1px solid #ababab'}
                        borderRadius={'5px'}
                        justifyContent={'space-between'}
                        alignItems={'center'}
                        position={'relative'}
                    >
                        <Text fontWeight={'500'}>
                            <span style={{ color: "#a4a4a4" }}>Sort by :</span> Relevance
                        </Text>
                        <Text fontSize={'35px'} color={'#676767'} transform={displaysort ? 'rotate(-90deg)' : 'rotate(90deg)'}
                            onClick={handleArrow}
                            _hover={{ cursor: 'pointer' }}
                        >›</Text>
                        <Box position={'absolute'} top={'46px'} left={'0px'} w={'100%'} style={{ height: '250px', overflowY: 'scroll' }} borderRadius={'5px'}
                            boxShadow={'rgba(0, 0, 0, 0.16) 0px 1px 4px'}
                            display={displaysort ? 'block' : 'none'}
                            bgColor={"white"}
                            zIndex={1}
                        >
                            <Text fontWeight={'500'} color={'#717171'} p={'10px'} _hover={{ background: '#e9e9e9' }}>Relevance</Text>
                            <Text fontWeight={'500'} color={'#717171'} p={'10px'} _hover={{ background: '#e9e9e9' }} bgColor={sort=="new"?"#ffd8cf":"#ffffff"} 
                            onClick={()=>{
                                setSort("new")
                            }}>New Arrivals</Text>
                            <Text fontWeight={'500'} color={'#717171'} p={'10px'} _hover={{ background: '#e9e9e9' }} bgColor={sort=="asc"?"#ffd8cf":"#ffffff"} 
                            onClick={()=>{
                                setSort("asc")
                            }}>Price (Low to High)</Text>
                            <Text fontWeight={'500'} color={'#717171'} p={'10px'} _hover={{ background: '#e9e9e9' }} bgColor={sort=="desc"?"#ffd8cf":"#ffffff"} 
                            onClick={()=>{
                                setSort("desc")
                            }}>Price (High to Low)</Text>
                            <Text fontWeight={'500'} color={'#717171'} p={'10px'} _hover={{ background: '#e9e9e9' }} bgColor={sort=="rating"?"#ffd8cf":"#ffffff"} 
                            onClick={()=>{
                                setSort("rating")
                            }}>Ratings</Text>
                            <Text fontWeight={'500'} color={'#717171'} p={'10px'} _hover={{ background: '#e9e9e9' }} bgColor={sort=="discount"?"#ffd8cf":"#ffffff"} 
                            onClick={()=>{
                                setSort("discount")
                            }}>Discount</Text>
                        </Box>
                    </Flex>
                    <br />
                    <Box p={'10px'} pr={'20px'} pl={'20px'} border={'1px solid #cacaca'}
                        borderRadius={'5px'}
                    >
                        <Text fontWeight={'500'}>FILTERS</Text>
                        <Text fontWeight={'500'} fontSize={'13px'} color={"#929292"}>1000+ Products</Text>
                        <br />
                        <hr style={{ color: "#323232", borderTop: "1px solid #aaaaaa" }} />
                        <br />
                        <Box
                        >
                            <Flex justifyContent={'space-between'} alignItems={'center'}>
                                <Text fontWeight={'500'}>
                                    Category
                                </Text>
                                <Text fontSize={'35px'} color={'#676767'} transform={categoryShow ? 'rotate(-90deg)' : 'rotate(90deg)'}
                                    onClick={handleCategoryShow}
                                    _hover={{ cursor: 'pointer' }}
                                >›</Text>
                            </Flex>
                            <Box
                                display={categoryShow ? 'block' : 'none'}
                            >
                                <Checkbox onChange={handleCategory} value={"shirt"}>Shirts</Checkbox>
                                <br />
                                <Checkbox onChange={handleCategory} value={"shoe"}>Shoes</Checkbox>
                                <br />
                                <Checkbox onChange={handleCategory} value={"jeans"}>Jeans</Checkbox>
                                <br />
                                <Checkbox onChange={handleCategory} value={"kurti"}>Kurti</Checkbox>
                            </Box>
                        </Box>
                        <hr style={{ color: "#323232", borderTop: "1px solid #aaaaaa", marginTop: "10px" }} />
                        <Box
                        >
                            <Flex justifyContent={"space-between"} alignItems={'center'}>
                                <Text fontWeight={'500'}>
                                    Gender
                                </Text>
                                <Text fontSize={'35px'} color={'#676767'} transform={genderShow ? 'rotate(-90deg)' : 'rotate(90deg)'}
                                    onClick={handleGenderShow}
                                    _hover={{ cursor: 'pointer' }}
                                >›</Text>
                            </Flex>
                            <Box
                                display={genderShow ? 'block' : 'none'}
                            >
                                <Grid
                                 gap={'10px'} gridTemplateColumns={'repeat(3,1fr)'}>
                                    <GridItem><Button size={"sm"} variant={'outline'} borderRadius={'15px'}
                                    onClick={()=>handleGender('male')}
                                    colorScheme={gender.includes('male')?'pink':'gray'}
                                    >Men</Button></GridItem>
                                    <GridItem><Button size={"sm"} variant={'outline'} borderRadius={'15px'}
                                    onClick={()=>handleGender('female')}
                                    colorScheme={gender.includes('female')?'pink':'gray'}>Woman</Button></GridItem>
                                    <GridItem><Button size={"sm"} variant={'outline'} borderRadius={'15px'}
                                    onClick={()=>handleGender('kids')}
                                    colorScheme={gender.includes('kids')?'pink':'gray'}>Kids</Button></GridItem>
                                </Grid>
                            </Box>
                            <hr style={{ color: "#323232", borderTop: "1px solid #aaaaaa", marginTop: "10px" }} />
                            <Flex justifyContent={"space-between"} alignItems={'center'}>
                                <Text fontWeight={'500'}>
                                    Fabric
                                </Text>
                                <Text fontSize={'35px'} color={'#676767'} transform={fabricShow ? 'rotate(-90deg)' : 'rotate(90deg)'}
                                    onClick={handlefabricShow}
                                    _hover={{ cursor: 'pointer' }}
                                >›</Text>
                            </Flex>
                            <Box
                                display={fabricShow ? 'block' : 'none'}
                            >
                                {/* <Grid
                                 gap={'10px'} gridTemplateColumns={'repeat(1,1fr)'}>
                                    <GridItem><Button size={"sm"} variant={'outline'} borderRadius={'15px'}>Under ₹ 100</Button></GridItem>
                                    <GridItem><Button size={"sm"} variant={'outline'} borderRadius={'15px'}>Under ₹ 200</Button></GridItem>
                                    <GridItem><Button size={"sm"} variant={'outline'} borderRadius={'15px'}>Under ₹ 300</Button></GridItem>
                                    <GridItem><Button size={"sm"} variant={'outline'} borderRadius={'15px'}>Under ₹ 400</Button></GridItem>
                                </Grid> */}
                                <Checkbox onChange={handleFabric} value={"cotton"}>Cotton</Checkbox>
                                <br />
                                <Checkbox onChange={handleFabric} value={"Crepe"}>Crepe</Checkbox>
                                <br />
                                <Checkbox onChange={handleFabric} value={"Denim"}>Denim</Checkbox>
                                <br />
                                <Checkbox onChange={handleFabric} value={"Satin"}>Satin</Checkbox>
                            </Box>
                            
                        </Box>
                    </Box>
                </Box>
                <Box className='products' w={'100%'}>
                    {
                            isLoading
                            ?
                            <Loader />
                            :
                            <Grid gridTemplateColumns={"repeat(4,1fr)"} gap={"20px"}>
                                {
                                    products?.map((product) => {
                                        return (
                                            <GridItem key={product._id}
                                            border={"1px solid #b9b9b9"}
                                            _hover={{cursor:"pointer"}}
                                            onClick={()=>navigate(`/product/${product._id}`)}
                                             borderRadius={"5px"}>
                                              <Box h={"300px"}>
                                               <Image src={product.image1} w={"100%"} h={"100%"}
                                               borderTopRadius={"5px"}/>
                                              </Box>
                                              <Box p={"10px"}>
                                              <Text color={"#8e8e8e"} fontSize={"17px"} noOfLines={1}>{product.name}</Text>
                                              <Flex alignItems={"center"} gap={"10px"}>
                                                <Text fontSize={"20px"} as={"b"}>₹{product.price}</Text>
                                                <Text fontSize={"18px"} textDecoration={"line-through"} color={"#949494"}>₹{product.price}</Text>
                                                <Text fontSize={"16px"} color={"#038D63"}
                                                fontWeight={500}>20% off</Text>
                                              </Flex>
                                              <Text
                                              p={"5px"}
                                              pr={"8px"}
                                              pl={"8px"}
                                              borderRadius={"20px"}
                                              display={"inline"}
                                              color={"#535353"}
                                              bgColor={"#eeeeee"}
                                              fontSize={"12px"}
                                              fontWeight={500}
                                              >Free Delivery</Text>
                                              <Flex mt={"15px"}
                                              alignItems={"center"}
                                              gap={"5px"}
                                              >
                                                <Flex
                                                alignItems={"center"}
                                                fontWeight={600}
                                                gap={"5px"}
                                                bgColor={"#00a463"}
                                                color={"white"}
                                                pr={"5px"}
                                                pl={"5px"}
                                                borderRadius={"20px"}
                                                ><Text
                                                fontSize={"17px"}
                                                >4.5</Text><FaStar size={"11px"}/></Flex>
                                                <Text fontSize={"13px"}
                                                fontWeight={500}
                                                color={"#8B8BA3"}
                                                >1999 Reviews</Text>
                                              </Flex>
                                              </Box>
                                            </GridItem>
                                        )
                                    })
                                }
                            </Grid>
                    }
                </Box>
            </Flex>
            <br />
            <br />
            <br />
            <br />
            <br />
        </div>
    )
}

export default Products
