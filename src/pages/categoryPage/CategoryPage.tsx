import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import CategoryHead from './CategoryHead'
import CategoryBody from './CategoryBody'
import Footer from '../../components/footer/Footer'
import Result from '../../components/category/Result'
import NavMobile from '../../components/navMobile/NavMobile'

function CategoryPage() {
    return (
        <>
            <Navbar />
            <CategoryHead />
            <Result />
            <CategoryBody />
            <NavMobile />
            <Footer />
        </>
    )
}

export default CategoryPage