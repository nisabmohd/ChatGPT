"use client";

import Menu from "@/components/Menu";
import Message from "@/components/Message";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import axios from "axios";
import { useEffect, useState } from "react";
import { v4 as idGen } from "uuid";

type Message = {
  id: string;
  message: string;
  isUser: boolean;
};

export default function Chat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    axios
      .get("/api/chat")
      .then((res) => {
        setMessages(
          res.data.queries.map((item: any) => {
            return {
              id: item.id,
              message: item.data,
              isUser: item.isUser,
            };
          })
        );
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function handleEmit() {
    setMessages((prev) => [...prev, { id: idGen(), isUser: true, message }]);
    const t = message;
    setMessage("");
    axios
      .post("/api/chat", {
        message: t,
      })
      .then(({ data }) => {
        setMessages((prev) => [
          ...prev,
          { id: idGen(), isUser: false, message: data.message },
        ]);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function clear() {
    setMessages([]);
  }

  return (
    <div>
      <Menu clear={clear} />
      <div className="input w-full flex flex-col justify-between h-screen">
        <div className="messages w-full mx-auto h-full mb-4 overflow-auto flex flex-col gap-10 pt-10">
          {messages.map((message) => (
            <Message
              key={message.id}
              id={message.id}
              isUser={message.isUser}
              message={message.message}
            />
          ))}
        </div>
        <div className="w-[50%] flex flex-row gap-3 mx-auto mt-auto">
          <Input
            onKeyDown={(e) => {
              if (e.keyCode == 13 && message) {
                handleEmit();
              }
            }}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Send a message"
            className="h-12"
          />
          <Button
            disabled={!message}
            onClick={handleEmit}
            className="h-12 font-semibold"
          >
            Send
          </Button>
        </div>
        <span className="mx-auto mb-6 text-xs mt-3 text-center">
          ChatGPT may produce inaccurate information about people, places, or
          facts.
        </span>
      </div>
    </div>
  );
}
