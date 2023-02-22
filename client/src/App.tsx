import { useEffect, useState } from "react";
import Hero from "./components/Hero";
import Input from "./components/Input";
import Messages from "./components/Messages";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Auth from "./pages/Auth";
import axios from "axios";
import { url } from "./url";

export type Message = {
  msg: string;
  me?: boolean;
  img: string | undefined;
  _id: string;
};

type User = {
  apiKey: string;
  avatar: string;
  createdAt: string;
  queries: string;
  uid: string;
  updatedAt: string;
  username: string;
  _id: string;
};

export default function App() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [chatLoading, setChatloading] = useState(true);
  const [auth, setAuth] = useState<User | undefined>(() => {
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
    setMessages([]);
    setAuth(value);
  }
  function handlelogout() {
    setAuth(undefined);
    localStorage.removeItem("auth");
  }
  useEffect(() => {
    if (!auth) return;
    axios
      .get(`${url}/chatgpt/getchats/${auth.apiKey}`)
      .then((res) => {
        const processed = res.data.texts.map(
          (item: { message: string; textBy: number; _id: string }) => {
            return {
              msg: item.message,
              me: item.textBy == 1,
              _id: item._id,
              img: item.textBy == 1 ? auth?.avatar : undefined,
            };
          }
        );
        setMessages(processed);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setChatloading(false);
      });
  }, [auth]);

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
                  chatLoading={chatLoading}
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
