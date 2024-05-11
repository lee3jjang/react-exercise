import { ReactNode } from "react";
import "./Title.css";

type Props = { children: ReactNode };

export const Title = ({ children }: Props) => {
  return (
    <div className="title-container">
      <h1>{children}</h1>
    </div>
  );
};
