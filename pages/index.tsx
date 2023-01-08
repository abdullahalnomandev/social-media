import type { NextPage } from "next";
import Head from "next/head";
import NavPostBar from "../components/NavPostBar";
import Post from "../components/Posts";
const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>SOCIAL</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavPostBar />
      <Post />
    </div>
  );
};

export default Home;

// <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
