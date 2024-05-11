import "./Product.css";

import { motion } from "framer-motion";

type Props = {
  src: string;
  alt: string;
  title: string;
  description: string;
  delay?: number;
};

export const Product = ({ src, alt, title, description, delay = 0 }: Props) => {
  return (
    <motion.div
      className="product"
      initial={{ y: "10px", opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{
        y: "50%",
        opacity: 0,
        transition: { duration: 0.25, ease: "easeInOut", delay },
      }}
      transition={{ duration: 0.75, delay, ease: "easeInOut" }}
    >
      <img src={src} alt={alt} />
      <h2>{title}</h2>
      <p>{description}</p>
    </motion.div>
  );
};
