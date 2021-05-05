import React from "react";
import useFirestore from "../hooks/useFirestore";
import { motion } from "framer-motion";

const ImageGrid = ({ setSelectedImg }) => {
  const { docs } = useFirestore("images");
  console.log(docs);
  return (
    <div className="img-grid">
      {docs &&
        docs.map((doc) => (
          <motion.div
            layout
            whileHover={{ opacity: 1 }}
            className="img-wrap"
            key={doc.id}
            onClick={() => {
              setSelectedImg(doc.url);
            }}>
            <motion.img
              src={doc.url}
              alt={`Image${doc.id}`}
              initial={{ opacity: 0, scale: 2 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, duration: 1, ease: "easeIn" }}
            />
          </motion.div>
        ))}
    </div>
  );
};

export default ImageGrid;
