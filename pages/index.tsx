import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Header from '../components/Header';
import PostBox from '../components/PostBox';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <div className="max-w-5xl my-7 mx-auto">
      <Head>
        <title>Reddit clone</title>
      </Head>

      {/* PostBox */}
      <PostBox />

      <div className="flex">{/* Feed */}</div>
    </div>
  );
};

export default Home;
