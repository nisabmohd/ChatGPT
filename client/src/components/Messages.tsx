import React, { useEffect, useRef } from "react";
import { Message as MessageType } from "../App";

import Message from "./Message";

type MessagesProps = {
  messages: MessageType[];
  show: boolean;
};

export default function Messages({ messages, show }: MessagesProps) {
  const scrollRef = useRef<any>();
  useEffect(() => {
    updateScroll();
  }, [messages]);
  function updateScroll() {
    var element = scrollRef.current;
    if (!element) return;
    element.scrollTop = element.scrollHeight;
  }
  return (
    <div
      ref={scrollRef}
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
