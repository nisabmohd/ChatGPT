import React from "react";
import { Message as MessageType } from "../App";
import Message from "./Message";

type MessagesProps = {
  messages: MessageType[];
  show: boolean;
};

export default function Messages({ messages, show }: MessagesProps) {
  return (
    <div
      style={{
        width: "75%",
        margin: "auto",
        marginTop: "2.5vh",
      }}
    >
      <>
        {messages.map((item) => {
          return <Message me={item.me} msg={item.msg} img={item.img} />;
        })}
      </>
      {show && (
        <p style={{ textAlign: "center", margin: "28px 0", fontSize: "14px" }}>
          Loading...
        </p>
      )}
    </div>
  );
}
