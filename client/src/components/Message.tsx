import React from "react";
import { logo } from "../assets/icons";

type MessageProps = {
  me?: boolean;
  msg: string;
  img?: string;
};

export default function Message({ me, msg, img }: MessageProps) {
  return (
    <div
      style={{
        width: "100%",
        backgroundColor: !me ? "#444654" : "transparent",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        padding: "18px 0",
        // inLpadding: "18px 15px",
      }}
    >
      <div style={{ width: "25px", marginLeft: "15px" }}>
        {img ? (
          <img style={{ borderRadius: "3px" }} src={img} alt="" />
        ) : (
          <div
            style={{
              backgroundColor: "#10a37f",
              width: "fit-content",
              padding: "3px",
              borderRadius: "4px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {logo}
          </div>
        )}
      </div>
      <p
        style={{
          marginLeft: me ? "35px" : "28px",
          marginRight: "15px",
          fontSize: "14px",
          lineHeight: "20px",
        }}
      >
        {msg}
      </p>
    </div>
  );
}
