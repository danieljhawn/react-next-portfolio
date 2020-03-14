import React from 'react'
import Head from 'next/head'
import Layout from '../components/MyLayout'

const subheadStyle = {
    fontFamily: 'Arial, Helvetica, sans-serif',
    // fontSize: '30px',
    letterSpacing:  '7px',
    wordSpacing: '2px',
    color: '#FFFFFF',
    textDecoration: 'none',
    fontStyle: 'normal',
    textTransform: 'uppercase',
}


function contact() {
    return <Layout>
    <Head>
        <title>Daniel Hawn's Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous" />
    </Head>
    <div className="container-fluid">
        <div className="row">
            <div className="col-md-6 col-sm-12 col-xs-12 mx-auto p-3 m-2 bg-secondary text-white shadow-lg">
                <h2>
                    <p style={subheadStyle} className="subhead">Contact</p>
                </h2>
            </div>
        </div>
    </div>
</Layout>
}

export default contact
