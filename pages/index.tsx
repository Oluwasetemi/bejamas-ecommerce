import type { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';

const Home: NextPage = () => {
  return (
    <div className="container">
      <Head>
        <title>Bejamas_</title>
        <meta
          name="description"
          content="create a PoC of the e-commerce solution. One of our clients wants to have an application where he could sell images and artworks. He gave us designs and we need to transfer his vision to real code."
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no, viewport-fit=cover"
        />
        <link
          rel="icon"
          href="https://bejamas.io/favicon-32x32.png"
          type="image/png"
        />
      </Head>

      <h1>Hello</h1>
    </div>
  );
};

export default Home;
