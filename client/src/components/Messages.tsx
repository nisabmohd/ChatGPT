import React from "react";
import Message from "./Message";

export default function Messages() {
  return (
    <div
      style={{
        width: "75%",
        margin: "auto",
        marginTop: "2.5vh",
      }}
    >
      <Message
        me={true}
        msg={"Essay on Diwali"}
        img={
          "https://chat.openai.com/_next/image?url=https%3A%2F%2Flh3.googleusercontent.com%2Fa%2FAEdFTp6gjYhRDYM34l7ZUqMoEAUkXNJS6RvYUYNLA4sqJg%3Ds96-c&w=32&q=75"
        }
      />
      <Message
        me={false}
        msg={
          "Diwali has a rich cultural and religious significance in Hinduism. It is believed that on this day, the Hindu god Lord Rama returned to his kingdom after defeating the demon king Ravana and rescuing his wife Sita. To celebrate Rama's victory and homecoming, people lit oil lamps, or diyas, to guide Rama's way and to welcome him home. Today, the tradition of lighting diyas continues, and people also decorate their homes and public spaces with colorful lights and lanterns."
        }
      />
      <Message
        me={true}
        msg={"Generate lorem ipsum"}
        img={
          "https://chat.openai.com/_next/image?url=https%3A%2F%2Flh3.googleusercontent.com%2Fa%2FAEdFTp6gjYhRDYM34l7ZUqMoEAUkXNJS6RvYUYNLA4sqJg%3Ds96-c&w=32&q=75"
        }
      />
      <Message
        me={false}
        msg={
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        }
      />
      <Message
        me={true}
        msg={"Generate lorem ipsum"}
        img={
          "https://chat.openai.com/_next/image?url=https%3A%2F%2Flh3.googleusercontent.com%2Fa%2FAEdFTp6gjYhRDYM34l7ZUqMoEAUkXNJS6RvYUYNLA4sqJg%3Ds96-c&w=32&q=75"
        }
      />
      <Message
        me={false}
        msg={
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        }
      />
    </div>
  );
}
