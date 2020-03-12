import Head from 'next/head'
import Layout from '../components/MyLayout'

const layoutStyle = {
  //   margin: 10,
  //   padding: 20,
  background: '#C4C4C4',
  background: '-moz-linear-gradient(top, #C4C4C4 0%, #A2A2A2 51%, #000000 100%)',
  background: '-webkit-linear-gradient(top, #C4C4C4 0%, #A2A2A2 51%, #000000 100%)',
  background: 'linear-gradient(to bottom, #C4C4C4 0%, #A2A2A2 51%, #000000 100%)'
  //   border: '1px solid #DDD'
  };

const Home = () => (
  <Layout>
    <Head>
      <title>Daniel Hawn's Portfolio</title>
      <link rel="icon" href="/favicon.ico" />
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous" />
    </Head>
    <p>THis layout</p>
    <style jsx>{`
    .yonge {
      color: red;
    }
    `}</style>
  </Layout>
)

export default Home
