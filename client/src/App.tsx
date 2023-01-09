import { useState } from "react";
import Hero from "./components/Hero";
import Input from "./components/Input";
import Messages from "./components/Messages";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Auth from "./pages/Auth";

export type Message = {
  msg: string;
  me?: boolean;
  img: string | undefined;
};

export default function App() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [auth, setAuth] = useState(() => {
    const user = localStorage.getItem("auth");
    if (!user) return undefined;
    return JSON.parse(user);
  });

  function addMessage(msg: Message) {
    setMessages((prev) => [...prev, msg]);
  }
  function toggleLoading(value: boolean) {
    setLoading(value);
  }
  function handleAuth(value: any) {
    setAuth(value);
  }
  function handlelogout() {
    setAuth(null);
    localStorage.removeItem("auth");
  }
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login handleAuth={handleAuth} />} />
        <Route path="/signup" element={<Signup handleAuth={handleAuth} />} />
        <Route path="/" element={!auth ? <Auth /> : <Navigate to="/chat" />} />
        <Route
          path="/chat"
          element={
            !auth ? (
              <Navigate to="/login" />
            ) : (
              <div
                className="main_cont"
                style={{
                  width: "50%",
                  margin: "auto",
                  height: "100vh",
                  position: "relative",
                }}
              >
                {messages.length != 0 ? (
                  <div
                    className="inner_cont"
                    style={{
                      height: "88%",
                      overflowY: "scroll",
                    }}
                  >
                    <Messages show={loading} messages={messages} />
                  </div>
                ) : (
                  <Hero />
                )}

                <Input
                  handlelogout={handlelogout}
                  img={auth?.avatar}
                  apiKey={auth?.apiKey}
                  toggleLoading={toggleLoading}
                  addMessage={addMessage}
                />
              </div>
            )
          }
        />
      </Routes>
    </div>
  );
}
