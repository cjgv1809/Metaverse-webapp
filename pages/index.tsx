import type { NextPage } from "next";
import Head from "next/head";
import { useMoralis } from "react-moralis";
import Login from "../components/Login";
import Header from "../components/Header";
import Messages from "../components/Messages";

const Home: NextPage = (): JSX.Element => {
  const { isAuthenticated } = useMoralis();

  if (!isAuthenticated) return <Login />;

  return (
    <div className="h-screen overflow-hidden overflow-y-scroll scrollbar-hide bg-gradient-to-b from-black to-fuchsia-900">
      <Head>
        <title>Metaverse app</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="mx-auto max-w-screen-2xl">
        {/* Header */}
        <Header />
        {/* Messages */}
        <Messages />
      </div>
    </div>
  );
};

export default Home;
