import React, { ReactElement } from "react";
import messageHoc from "./Hoc";

const example = (props: any): ReactElement => <p>{props.name}, {props.message}</p>;

// the Message component has gotten the name and message prop from the messageHoc higher order component.
const Message = messageHoc(example);

export default Message;
