import "./styles.css";
import { Body, Title } from "../components";

import { motion } from "framer-motion";

export const Contact = () => {
  return (
    <div className="page contact">
      <Title>Contact</Title>
      <Body>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus, odit
        inventore consequuntur quibusdam quisquam perferendis eveniet! Odio
        molestiae, ducimus illo deserunt, consectetur hic suscipit praesentium,
        ullam non delectus architecto ipsum alias temporibus. Possimus tenetur,
        atque quae enim fugiat cum ab illo doloremque error cumque aut fugit
        inventore quas mollitia odio accusantium nam nesciunt eum a minus quo?
        Tempora corporis cumque eum? Pariatur repellendus quam iste ut quae in.
        Sapiente suscipit molestias aut voluptas, qui dolorem dicta. Quisquam
        atque blanditiis, repudiandae est dicta iure, consequuntur aspernatur,
        animi distinctio enim velit labore repellendus eius commodi fugiat ad
        sequi ipsum? Amet, consectetur laudantium.
      </Body>
      <motion.div
        className="slide"
        initial={{ y: "-100%" }}
        animate={{ y: "100%" }}
        transition={{ duration: 2, ease: [0.2, 1, 0.2, 1] }}
      />
      <motion.div
        className="circle"
        animate={{ width: 0, height: 0, borderRadius: "100%" }}
        exit={{ width: "100%", height: "100%", borderRadius: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      />
    </div>
  );
};
