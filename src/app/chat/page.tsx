"use client";

import Menu from "@/components/Menu";
import Message from "@/components/Message";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const messages = [
  {
    id: "123hgsdghj",
    message: "create an essay on Ramzan",
    isUser: true,
  },
  {
    id: "45678jhg",
    message: `Ramzan, also known as Ramadan, is a sacred and blessed month observed by millions of Muslims around the world. It is a time of fasting, prayer, self-reflection, and acts of charity. This essay will delve into the significance and practices associated with Ramzan.

    Ramzan is the ninth month of the Islamic lunar calendar and holds immense importance in the lives of Muslims. It is believed to be the month when the first verses of the Quran were revealed to the Prophet Muhammad (peace be upon him) through the Angel Gabriel. Therefore, Ramzan is regarded as a month of spiritual reflection, seeking closeness to God, and deepening one's relationship with Islam.
    
    The most notable aspect of Ramzan is fasting, known as Sawm. From dawn until sunset, Muslims abstain from food, drink, smoking, and other physical needs. Fasting serves as a reminder of the importance of self-discipline, self-control, and empathy for those who are less fortunate. It teaches patience, gratitude, and the ability to appreciate the blessings bestowed upon us. By experiencing hunger and thirst, Muslims are encouraged to empathize with the suffering of others and develop a sense of compassion.`,
    isUser: false,
  },
  {
    id: "123h86dfs",
    message: "What is Nodejs?",
    isUser: true,
  },
  {
    id: "456127er432",
    message: `Node.js is an open-source, cross-platform JavaScript runtime environment that allows developers to build server-side and networking applications. It uses an event-driven, non-blocking I/O model, making it efficient and scalable for handling a large number of concurrent connections.

    Here are some key features and aspects of Node.js:
    
    JavaScript on the Server: Node.js enables developers to use JavaScript, a widely popular programming language primarily known for its usage in web browsers, on the server-side as well. This allows developers to write both the client-side and server-side code using the same language, enhancing code reusability and developer productivity.
    
    Asynchronous and Non-blocking I/O: One of the core strengths of Node.js is its event-driven architecture, which allows applications to handle multiple concurrent requests efficiently. Node.js uses non-blocking I/O operations, such as file system access and network requests, which means that it can process multiple operations concurrently without waiting for each operation to complete. This makes Node.js highly scalable and well-suited for building real-time applications and APIs that require high concurrency.
    
    NPM (Node Package Manager): Node.js comes bundled with NPM, a powerful package manager that provides access to a vast ecosystem of open-source libraries and modules. NPM allows developers to easily install, manage, and share reusable code modules, making it easier to build applications by leveraging existing libraries and tools.
    
    Lightweight and Fast: Node.js is designed to be lightweight and efficient. Its event-driven architecture, along with the V8 JavaScript engine, allows for high-performance execution of JavaScript code. Node.js also has a minimal overhead compared to traditional server-side languages, making it suitable for building scalable and resource-efficient applications.
    
    Full-stack Development: With Node.js, developers can build not only server-side applications but also full-stack applications by combining client-side and server-side code. This enables the development of real-time web applications, APIs, microservices, and other types of applications using a unified technology stack.
    
    Large and Active Community: Node.js has a vibrant and active community of developers and contributors. This community contributes to the development of the core Node.js runtime, creates and maintains numerous open-source libraries, and provides support and guidance through forums, communities, and online resources.
    
    Node.js has gained significant popularity in recent years due to its efficiency, scalability, and flexibility. It is widely used by organizations of all sizes, from startups to large enterprises, to build a variety of applications, ranging from web servers and APIs to real-time chat applications and streaming services.`,
    isUser: false,
  },
  {
    id: "1s123h86dfs",
    message: "create an essay on ramzan",
    isUser: true,
  },
  {
    id: "4567er432",
    message: `Ramzan, also known as Ramadan, is a sacred and blessed month observed by millions of Muslims around the world. It is a time of fasting, prayer, self-reflection, and acts of charity. This essay will delve into the significance and practices associated with Ramzan.

    Ramzan is the ninth month of the Islamic lunar calendar and holds immense importance in the lives of Muslims. It is believed to be the month when the first verses of the Quran were revealed to the Prophet Muhammad (peace be upon him) through the Angel Gabriel. Therefore, Ramzan is regarded as a month of spiritual reflection, seeking closeness to God, and deepening one's relationship with Islam.
    
    The most notable aspect of Ramzan is fasting, known as Sawm. From dawn until sunset, Muslims abstain from food, drink, smoking, and other physical needs. Fasting serves as a reminder of the importance of self-discipline, self-control, and empathy for those who are less fortunate. It teaches patience, gratitude, and the ability to appreciate the blessings bestowed upon us. By experiencing hunger and thirst, Muslims are encouraged to empathize with the suffering of others and develop a sense of compassion.`,
    isUser: false,
  },
];

export default function Chat() {
  return (
    <div>
      <Menu />
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
          <Input placeholder="Send a message" className="h-12" />
          <Button className="h-12 font-semibold">Send</Button>
        </div>
        <span className="mx-auto mb-6 text-xs mt-2 text-center">
          ChatGPT may produce inaccurate information about people, places, or
          facts.
        </span>
      </div>
    </div>
  );
}
