import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AOGEOIcon from "../assets/images/icon_AOGEO.png";

const AnimatedIcon = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const loop = setInterval(() => {
      setVisible(false);
      setTimeout(() => setVisible(true), 500); // เด้งออกเสร็จ → กลับเข้า
    }, 5000); // วนใหม่ทุก 5 วิ

    return () => clearInterval(loop);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.img
          key="animated-icon"
          src={AOGEOIcon}
          alt="Animated Icon"
          initial={{ scale: 0.2, opacity: 0, rotate: 0 }}
          animate={{
            scale: 1,
            opacity: 1,
            rotate: 360,
            transition: {
              scale: {
                type: "spring",
                stiffness: 350, // ↓ ลด stiffness ให้นุ่ม
                damping: 22, // ↑ เพิ่ม damping ให้ไม่แข็ง
              },
              opacity: {
                duration: 0.6,
                ease: "easeOut",
              },
              rotate: {
                repeat: Infinity,
                duration: 1.2,
                ease: "linear",
                delay: 0.3, // ✅ รอเด้งเสร็จก่อนเริ่มหมุน
              },
            },
          }}
          exit={{
            scale: 0,
            opacity: 0,
            transition: {
              scale: {
                type: "spring",
                stiffness: 300,
                damping: 30, // ↑ เด้งออกช้าแบบนุ่ม
              },
              opacity: {
                duration: 0.4,
                ease: "easeIn",
              },
            },
          }}
          style={{
            width: "50px",
            height: "50px",
            borderRadius: "50%",
            display: "block",
            margin: 0, // ✅ ไม่มี margin
            padding: 0, // ✅ ไม่มี padding
          }}
        />
      )}
    </AnimatePresence>
  );
};

export default AnimatedIcon;
