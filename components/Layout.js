import React from 'react';
import { Container } from 'semantic-ui-react'
import Head from 'next/head';
import Header from './Header';
//import Particles from 'react-particles-js';

export default props => {
return(
    <div className="page-layout">
        
        
        <style jsx global>{`
        body {
          //margin: 100;
         // padding: 0;
          //font-size: 18px;
          //font-weight: 1000;
         // line-height: 1.8;
          //color: #333;
          //font-family: sans-serif;
          background: linear-gradient(to top,#08c2ff, black)! important;
        }

        
      `}</style>
    <Container>
    
        <Head>
        <link
            rel="stylesheet"
            href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css" />
        </Head>
    <Header />   
    {props.children}
     
    </Container>
    </div>

);
};
