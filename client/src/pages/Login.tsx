import React from "react";
import { logo } from "../assets/icons";
import { Link } from "react-router-dom";
export default function Login() {
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
        <h1 style={{ color: "black", marginBottom: "18px" }}>Welcome back</h1>
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
          Login
        </button>
        <p style={{ marginTop: "14px", fontSize: "14px" }}>
          Don't have an account?{" "}
          <Link
            style={{ color: "#10a37f", textDecoration: "none" }}
            to="/signup"
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
