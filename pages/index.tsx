import { NextPage } from 'next'
import Head from 'next/head'

import Navbar from '../components/mobile/Navbar'
import FilterSortbar from '../components/mobile/FilterSortbar'
import Products from '../components/mobile/Products'
import Sort from '../components/mobile/Sort'

interface Props {}

const HomePage: NextPage<Props> = () => {
  return (
    <>
      <Head>
        <title>Digitize App - Shop</title>
      </Head>
      <main className='bg-gray-100 h-screen pt-10 px-4'>
        <Navbar />
        <FilterSortbar />

        <div className='grid grid-cols-12 md:grid-rows-[50px_minmax(500px,_1fr)] md:gap-8'>
          {/* sidebar */}
          <div className='hidden md:block bg-white p-4 col-span-4 lg:col-span-3 row-span-2'>
            sidebar
          </div>

          {/* sort section */}
          <div className='hidden md:block col-span-8  lg:col-span-9'>
            <Sort />
          </div>

          {/* product section */}
          <div className='col-span-12 md:col-span-8 lg:col-span-9'>
            <Products />
          </div>
        </div>
      </main>
    </>
  )
}

export default HomePage
