import axios from "axios";
import React, { useState } from "react";
import { Message } from "../App";
import { send } from "../assets/icons";
import { url } from "../url";

type InputProps = {
  addMessage: (msg: Message) => void;
  toggleLoading: (value: boolean) => void;
  apiKey: string;
  img: string;
};

export default function Input({
  addMessage,
  toggleLoading,
  apiKey,
  img,
}: InputProps) {
  const [input, setInput] = useState<string>("");
  function handleInput() {
    addMessage({
      msg: input,
      me: true,
      img,
    });
    setInput("");
    toggleLoading(true);

    //apiCall
    axios
      .post(`${url}/chatgpt/chat/${apiKey}`, { message: input })
      .then((resp) => {
        toggleLoading(false);
        addMessage({
          msg: resp.data.message,
          img: undefined,
        });
      });
  }
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        position: "absolute",
        bottom: "35px",
        width: "100%",
      }}
    >
      <div
        className="input_box"
        style={{
          width: "75%",
          backgroundColor: "#40414f",
          height: "45px",
          borderRadius: "7px",
          marginTop: "8px",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <input
          onChange={(e) => setInput(e.target.value)}
          value={input}
          type="text"
          style={{
            width: "97%",
            height: "100%",
            outline: "none",
            border: "none",
            backgroundColor: "transparent",
            color: "white",
            paddingLeft: "8px",
          }}
          placeholder=""
        />
        <button
          onClick={() => handleInput()}
          style={{
            rotate: "90deg",
            marginRight: "13px",
            backgroundColor: "transparent",
            outline: "none",
            border: "none",
            color: "white",
            cursor: "pointer",
          }}
        >
          {send}
        </button>
      </div>
      <p
        style={{
          fontSize: "11.6px",
          textAlign: "center",
          marginTop: "19px",
          color: "rgb(185 185 185)",
        }}
      >
        ChatGPT Dec 15 Version. Free Research Preview. Our goal is to make AI
        systems more natural and safe to interact with. Your feedback will help
        us improve.
      </p>
    </div>
  );
}
