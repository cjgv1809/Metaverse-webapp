import { useMoralis } from "react-moralis";
import Swal from "sweetalert2";

function ChangeUsername(): JSX.Element {
  const { setUserData, isUserUpdating, userError, user } = useMoralis();

  const setUsername = () => {
    Swal.fire({
      title: "Change username",
      returnFocus: false,
      showDenyButton: true,
      denyButtonText: "Cancel",
      denyButtonColor: "9B2F65",
      confirmButtonText: "Accept",
      confirmButtonColor: "#410F44",
      showCloseButton: true,
      background: "#050105",
      color: "#FFF",
      input: "text",
      inputLabel: `Enter your new username (current: ${user.getUsername()})`,
      inputValidator: (validUsername) => {
        // Si el valor es válido, debes regresar undefined. Si no, una cadena
        if (!validUsername) {
          return "Please enter a valid username";
        } else {
          return undefined;
        }
      },
    }).then((res) => {
      if (res.value) {
        const username = res.value;
        setUserData({ username });
      }
    });
  };

  return (
    <div className="text-sm absolute top-5 right-5">
      <button
        disabled={isUserUpdating}
        onClick={setUsername}
        className="hover:bg-pink-300 text-white font-bold py-2 px-4 rounded-full border-2 border-pink-300"
      >
        Change your username
      </button>
    </div>
  );
}

export default ChangeUsername;
