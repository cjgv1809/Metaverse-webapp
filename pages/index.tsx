import type { NextPage } from "next";
import Head from "next/head";
import Login from "../components/Login";
import { useMoralis } from "react-moralis";

const Home: NextPage = (): JSX.Element => {
  const { isAuthenticated, logout } = useMoralis();

  if (!isAuthenticated) return <Login />;

  return (
    <div className="h-screen overflow-hidden overflow-y-auto bg-gradient-to-b from-black to-fuchsia-900">
      <Head>
        <title>Metaverse app</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="mx-auto max-w-screen-2xl">
        <h1 className="text-white">Welcome to the Metaverse</h1>
        <button onClick={logout} className="text-white">
          Logout
        </button>
      </div>
    </div>
  );
};

export default Home;
