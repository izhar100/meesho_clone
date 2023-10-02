import React from 'react'
import Cover1 from './Cover1'
import { Box } from '@chakra-ui/react'
import Categories from './Categories'
import Products from './Products'
import Footer from '../../components/Footer'
import { shallowEqual, useSelector } from 'react-redux'

const Home = () => {
    const {searchKeyword } = useSelector((store) => {
        return {
            searchKeyword:store.productReducer.searchKeyword
        }
    }, shallowEqual)
    return (
        <div>
            <Box w={"80%"} m={"auto"} display={searchKeyword?"none":"block"}>
                <Cover1 />
                <br />
                <Categories/>
            </Box>
            <Box w={'90%'} m={'auto'}>
              <Products/>
            </Box>
            <Footer/>
        </div>
    )
}

export default Home
