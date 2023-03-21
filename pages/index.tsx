import { NextPage } from 'next'
import Head from 'next/head'

interface Props {}

const Home: NextPage<Props> = () => {
  return (
    <>
      <Head>
        <title>Digitize App</title>
      </Head>
      <main>
        <h1 className='text-4xl font-black'>دوره تیلویند</h1>
      </main>
    </>
  )
}

export default Home
