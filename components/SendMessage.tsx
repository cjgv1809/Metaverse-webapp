import { useState } from "react";
import { useMoralis } from "react-moralis";

function SendMessage({ endOfMessagesRef }: any): JSX.Element {
  const { user, Moralis } = useMoralis();
  const [message, setMessage] = useState("");

  const sendMessage = (e) => {
    e.preventDefault();

    if (!message) return;

    // creating a table inside Moralis to store the messages
    const Messages = Moralis.Object.extend("Messages");
    // Instance of the object
    const messages = new Messages();

    messages
      .save({
        message: message,
        user: user?.getUsername(),
        ethAddress: user?.get("ethAddress"),
      })
      .then(
        (message: any) => {
          // The object was saved successfully.
        },
        (error: any) => {
          // the save failed.
          // error is a Moralis.Error with an error code and description.
          console.log(error.message);
        }
      );

    endOfMessagesRef.current.scrollIntoView({ behavior: "smooth" });
    setMessage("");
  };

  return (
    <form className="flex w-11/12 fixed bottom-10 bg-black opacity-95 px-6 py-4 max-w-2xl shadow-xl rounded-full border-purple-500 border-2">
      <input
        type="text"
        placeholder={`Enter a message ${user.getUsername()}...`}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="flex-grow outline-none bg-transparent text-white placeholder-gray-400 pr-5"
      />
      <button
        type="submit"
        onClick={sendMessage}
        className="font-bold text-pink-300"
      >
        Send
      </button>
    </form>
  );
}

export default SendMessage;
