import React, { useEffect, useState } from "react";
import { Box, Stack, Typography, Divider } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";

function AnimatedDigit({ value }) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={value}
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 10, opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <Typography
          sx={{
            fontWeight: 600,
            fontFamily: "Work Sans",
            color: "#8F57B6",
            fontSize: { xs: "22px", sm: "26px" },
            lineHeight: 1,
            textAlign: "center",
          }}
        >
          {value.toString().padStart(2, "0")}
        </Typography>
      </motion.div>
    </AnimatePresence>
  );
}

function MUIDaisyCountdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date("2025-10-15T00:00:00");

    const updateCountdown = () => {
      const now = new Date();
      const diff = targetDate.getTime() - now.getTime();

      if (diff > 0) {
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((diff / (1000 * 60)) % 60);
        const seconds = Math.floor((diff / 1000) % 60);
        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  const unitList = [
    { label: "Days", value: timeLeft.days },
    { label: "hours", value: timeLeft.hours },
    { label: "min", value: timeLeft.minutes },
    { label: "sec", value: timeLeft.seconds },
  ];

  return (
    <Box
      sx={{
        backdropFilter: "blur(20px)",
        backgroundColor: "rgba(255, 255, 255, 0.75)",
        borderRadius: "36px",
        px: { xs: 2, sm: 4 },
        py: { xs: 2, sm: 3 },
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        mx: "auto",
        boxShadow: 3,
      }}
    >
      <Typography
        sx={{
          fontFamily: "Work Sans",
          fontSize: { xs: "13px", sm: "15px" },
          color: "#333",
          mb: 1.5,
          textAlign: "center",
        }}
      >
        The{" "}
        <Box component="span" sx={{ fontWeight: 600, color: "#8F57B6", fontStyle: "italic" }}>
          17<sup>th</sup>
        </Box>{" "}
        AOGEO Symposium will start in
      </Typography>

      <Stack direction="row" alignItems="center" spacing={1.5}>
        {unitList.map((item, i) => (
          <React.Fragment key={item.label}>
            <Box sx={{ textAlign: "center", minWidth: 50 }}>
              <AnimatedDigit value={item.value} />
              <Typography
                sx={{
                  fontFamily: "Work Sans",
                  fontSize: { xs: "12px", sm: "13px" },
                  color: "#666",
                  mt: 0.3,
                }}
              >
                {item.label}
              </Typography>
            </Box>
            {i < unitList.length - 1 && (
              <Divider orientation="vertical" flexItem sx={{ borderColor: "#D6CDE0", height: 36 }} />
            )}
          </React.Fragment>
        ))}
      </Stack>
    </Box>
  );
}

export default MUIDaisyCountdown;
