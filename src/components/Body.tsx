import { ReactNode } from "react";
import "./Body.css";

type Props = { children: ReactNode };

export const Body = ({ children }: Props) => {
  return (
    <div className="body-container">
      <p>{children}</p>
    </div>
  );
};
