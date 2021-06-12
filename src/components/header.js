import React, { Fragment } from "react";
import PropsExample from "./PropsExample";
import Secret from "./Secret";
import Form from "./Form";
import Counter from "./Counter";

const Header = (props) => {
  const comment = {
    date: new Date(),
    text: "I hope you enjoy learning React!",
    author: {
      name: "Hello Kitty",
      avatarUrl: "https://placekitten.com/g/64/64",
    },
  };

  return (
    <Fragment>
      <PropsExample items={comment.text} avatar={comment.author.avatarUrl}>
        Block 1
      </PropsExample>
      <Counter />
      <Secret />
      <Form />
    </Fragment>
  );
};

export default Header;
