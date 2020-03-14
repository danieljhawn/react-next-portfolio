import Head from 'next/head'
import Layout from '../components/MyLayout'

// const bgStyle = {
//   color: 'red'
//   };

const Home = () => (
  <Layout>
    <Head>
      <title>Daniel Hawn's Portfolio</title>
      <link rel="icon" href="/favicon.ico" />
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous" />
    </Head>
    <p className="yonge">This layout</p>
    <style jsx>{`
    .yonge {
      color: red;
    }
    `}</style>
  </Layout>
)

export default Home
