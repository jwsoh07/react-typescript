import React, { ReactElement } from "react";

interface MessageInterface {
    message: string;
}

const Message: React.FC<MessageInterface> = (props): ReactElement => {
  return <div>{props.message}</div>;
};

export default Message;
