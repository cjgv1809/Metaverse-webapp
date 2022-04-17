import { useRef } from "react";
import { ByMoralis, useMoralis, useMoralisQuery } from "react-moralis";
import Message from "./Message";
import SendMessage from "./SendMessage";

// only show messages from the last 15 minutes
const MINS_DURATION = 15;

function Messages(): JSX.Element {
  const { user } = useMoralis();
  const endOfMessagesRef = useRef(null);
  const { data, error } = useMoralisQuery(
    "Messages",
    (query) =>
      query
        .ascending("createdAt")
        .greaterThan(
          "createdAt",
          new Date(Date.now() - MINS_DURATION * 60 * 1000)
        ),
    [],
    // Real time listener
    { live: true }
  );

  return (
    <div className="pb-56">
      <div className="flex justify-center my-5">
        <ByMoralis variant="dark" />
      </div>

      <div className="space-y-10 p-4">
        {data.map((message) => (
          <Message key={message.id} message={message} />
        ))}
      </div>
      {/* Send Message */}
      <div className="flex justify-center">
        <SendMessage endOfMessagesRef={endOfMessagesRef} />
      </div>
      {/* You're up to date */}
      <div
        ref={endOfMessagesRef}
        className="text-center text-white mt-5 font-semibold"
      >
        <p>You're up to date {user.getUsername()}!</p>
      </div>
    </div>
  );
}

export default Messages;
