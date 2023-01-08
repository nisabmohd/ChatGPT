import { useState } from "react";
import Hero from "./components/Hero";
import Input from "./components/Input";
import Messages from "./components/Messages";

export default function App() {
  const [messages, setMessages] = useState([1]);
  return (
    <div>
      <div
        style={{
          width: "50%",
          margin: "auto",
          height: "100vh",
          position: "relative",
        }}
      >
        {messages.length != 0 ? (
          <div
            style={{
              height: "88%",
              overflowY: "scroll",
            }}
          >
            <Messages />
          </div>
        ) : (
          <Hero />
        )}

        <Input />
      </div>
    </div>
  );
}
