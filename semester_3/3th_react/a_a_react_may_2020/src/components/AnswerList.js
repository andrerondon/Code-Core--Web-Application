import React from "react";

import { AnswerDetails } from "./AnswerDetails";

export const AnswerList = (props) => {
  return (
    <ul>
      {props.answers.map((answer) => (
        <li key={answer.id}>
          <AnswerDetails
            body={answer.body}
            author={answer.author}
            created_at={answer.created_at}
          />
        </li>
      ))}
    </ul>
  );
};
