import Head from 'next/head'
import Layout from '../components/MyLayout'

// import Link from 'next/link';

const Home = () => (
  <Layout>
    <Head>
      <title>Daniel Hawn's Portfolio</title>
      <link rel="icon" href="/favicon.ico" />
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous" />
    </Head>
    <p>THis layout</p>
  </Layout>
)

export default Home
