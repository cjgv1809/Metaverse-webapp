import Image from "next/image";
import { useMoralis } from "react-moralis";

type Props = {
  username: string;
  logoutOnPress: boolean;
};

function Avatar({ username, logoutOnPress }: Props): JSX.Element {
  const { user, logout } = useMoralis();

  return (
    <Image
      src={`https://avatars.dicebear.com/api/pixel-art/${
        username || user.get("username")
      }.svg`}
      onClick={() => logoutOnPress && logout()}
      layout="fill"
      className="rounded-full bg-black cursor-pointer hover:opacity-75 transition-opacity duration-200 ease-out"
    />
  );
}

export default Avatar;
