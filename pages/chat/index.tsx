import Head from "next/head";
import Conversation from "../../components/Chat/Conversation";
import Message from "../../components/Chat/Message";
import NavBar from "../../components/Common/NavBar";

const Chat = () => {
  return (
    <div>
      <Head>
        <title>Social Chat</title>
      </Head>
      <NavBar />
      <div className="grid grid-cols-12">
        <div className="col-span-12 sm:col-span-3">
          <Conversation />
        </div>
        <div className="col-span-12 h-28 sm:col-span-9 ">
          <Message />
        </div>
      </div>
    </div>
  );
};

export default Chat;
