import Image from "next/image";
import { useMoralis } from "react-moralis";
import Avatar from "./Avatar";
import ChangeUsername from "./ChangeUsername";

function Header(): JSX.Element {
  const { user } = useMoralis();

  return (
    <header className="sticky top-0 pt-4 pb-2 z-50 shadow-xl text-pink-300 bg-gradient-to-b from-pink-400 to-black border-b border-purple-500">
      <div className="grid grid-cols-5 lg:grid-cols-6 items-end lg:items-center">
        <div className="relative h-28 w-28 mx-auto hidden lg:inline-grid place-self-start border-2 border-pink-300 rounded-full">
          <Image
            src="https://img.freepik.com/free-vector/golden-meta-metaverse-3d-logo-round-style-isolated-black-new-facebook-logo_75010-314.jpg"
            layout="fill"
            className="rounded-full"
            objectFit="cover"
          />
        </div>

        <div className="text-left lg:text-center col-span-4 space-y-2">
          <div
            className="relative h-28 w-28 lg:mx-auto border-pink-300 border-4 rounded-full"
            title="Click to log out"
          >
            <Avatar username="" logoutOnPress={true} />
          </div>

          <h1 className="text-3xl">Welcome to the Metaverse</h1>

          <h2 className="text-5xl font-bold truncate py-3">
            {user.getUsername()}
          </h2>

          <ChangeUsername />
        </div>
      </div>
    </header>
  );
}

export default Header;
