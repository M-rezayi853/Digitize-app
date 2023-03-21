import { NextPage } from 'next'
import Head from 'next/head'

import Navbar from '../components/mobile/Navbar'
import FilterSortbar from '../components/mobile/FilterSortbar'

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
      </main>
    </>
  )
}

export default HomePage
