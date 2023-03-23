import { NextPage } from 'next'
import Head from 'next/head'

import NavbarTop from '@/components/desktop/NavbarTop'
import BreadCrumbs from '@/components/product/BreadCrumbs'
import Navbar from '@/components/product/Navbar'
import NavbarBottom from '@/components/mobile/NavbarBottom'
import Sidebar from '@/components/mobile/Sidebar'
import ProductDetails from '@/components/product/ProductDetails'
// import AddToCartBtn from '@/components/product/AddToCartBtn'
import CartItems from '@/components/mobile/CartItems'

interface Props {}

const CartPage: NextPage<Props> = () => {
  return (
    <>
      <Head>
        <title>Digitize App - Cart</title>
      </Head>

      <NavbarTop />
      <main className='2xl:container mx-auto 2xl:max-w-screen-2xl my-8 mb-24 md:mb-8 px-4 lg:px-6'>
        <Navbar title={'سبد خرید'} />

        <CartItems />

        <NavbarBottom />
      </main>
    </>
  )
}

export default CartPage
