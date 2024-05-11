import { ReactNode } from "react";
import { motion } from "framer-motion";

import "./Title.css";

type Props = { children: ReactNode; delay?: number };

export const Title = ({ children, delay = 0 }: Props) => {
  return (
    <div className="title-container">
      <motion.h1
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        exit={{ y: "-100%" }}
        transition={{ duration: 0.5, delay }}
      >
        {children}
      </motion.h1>
    </div>
  );
};
