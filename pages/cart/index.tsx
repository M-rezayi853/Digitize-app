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

        <div className='md:hidden'>
          <BreadCrumbs />
        </div>

        <div className='grid grid-cols-12 md:grid-rows-[50px_minmax(500px,_1fr)] md:gap-8'>
          {/* sidebar */}
          <div className='hidden md:block col-span-4 lg:col-span-3 xl:col-span-2 row-span-2'>
            <Sidebar />
          </div>

          {/* sort section */}
          <div className='hidden md:block col-span-8 lg:col-span-9 xl:col-span-10'>
            {/* <Sort /> */}
            <div className='bg-white px-4 flex items-center gap-x-4 text-gray-500 rounded-lg'>
              <BreadCrumbs />
            </div>
          </div>

          {/* product section */}
          <div className='col-span-12 md:col-span-8 lg:col-span-9 xl:col-span-10'>
            <ProductDetails />
          </div>
        </div>

        <NavbarBottom />
      </main>
    </>
  )
}

export default CartPage
