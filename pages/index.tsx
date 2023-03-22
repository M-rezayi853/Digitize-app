import { NextPage } from 'next'
import Head from 'next/head'

import Navbar from '../components/mobile/Navbar'
import FilterSortbar from '../components/mobile/FilterSortbar'
import Products from '../components/mobile/Products'
import Sort from '../components/mobile/Sort'
import Sidebar from '../components/mobile/Sidebar'
import NavbarTop from '../components/desktop/NavbarTop'
import NavbarBottom from '../components/mobile/NavbarBottom'

interface Props {}

const HomePage: NextPage<Props> = () => {
  return (
    <>
      <Head>
        <title>Digitize App - Shop</title>
      </Head>

      <NavbarTop />
      <main className='2xl:container mx-auto 2xl:max-w-screen-2xl my-8 mb-24 md:mb-8 px-4 lg:px-6'>
        <Navbar />
        <FilterSortbar />

        <div className='grid grid-cols-12 md:grid-rows-[50px_minmax(500px,_1fr)] md:gap-8'>
          {/* sidebar */}
          <div className='hidden md:block col-span-4 lg:col-span-3 xl:col-span-2 row-span-2'>
            <Sidebar />
          </div>

          {/* sort section */}
          <div className='hidden md:block col-span-8  lg:col-span-9 xl:col-span-10'>
            <Sort />
          </div>

          {/* product section */}
          <div className='col-span-12 md:col-span-8 lg:col-span-9 xl:col-span-10'>
            <Products />
          </div>
        </div>

        <NavbarBottom />
      </main>
    </>
  )
}

export default HomePage
