import React from "react";
import { logo } from "../assets/icons";
import { Link } from "react-router-dom";
export default function Signup() {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        backgroundColor: "white",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        className="box_auth"
        style={{
          color: "black",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "24vh",
        }}
      >
        <p style={{ position: "absolute", top: "20px", fontSize: "28px" }}>
          {logo}
        </p>
        <h1 style={{ color: "black", marginBottom: "18px" }}>
          Create your account
        </h1>
        <input
          style={{
            marginTop: "15px",
            width: "270px",
            height: "41px",
            paddingLeft: "8px",
            fontSize: "16px",
            outline: "none",
            border: "1px solid gray",
            marginBottom: "18px",
            borderRadius: "4px",
          }}
          type="text"
          placeholder="Email address"
        />
        <input
          style={{
            marginTop: "15px",
            width: "270px",
            height: "41px",
            paddingLeft: "8px",
            fontSize: "16px",
            outline: "none",
            border: "1px solid gray",
            borderRadius: "4px",
            marginBottom: "18px",
          }}
          type="password"
          placeholder="Password"
        />
        <button
          style={{
            marginTop: "15px",
            width: "285px",
            height: "41px",
            fontSize: "16px",
            outline: "none",
            border: "none",
            borderRadius: "6px",
            backgroundColor: "#10a37f",
            color: "white",
            marginBottom: "12px",
          }}
        >
          Signup
        </button>
        <p style={{ marginTop: "14px", fontSize: "14px" }}>
          Already have an account?{" "}
          <Link
            style={{ color: "#10a37f", textDecoration: "none" }}
            to="/login"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
