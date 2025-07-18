import React, { useEffect, useState } from "react";
import { Box, Container, Typography, Stack } from "@mui/material";
import AOGEO17Logo from "../assets/images/AOGEO17Logo.png";
import LandingPageCover from "../assets/images/LandingPageCover.png";
import MUIDaisyCountdown from "./MUIDaisyCountdown.jsx";
import IconAOGEO from "../assets/images/icon_AOGEO.png";

function LandingPage() {
  return (
    <Box
      sx={{
        position: "relative",
        height: "95vh",
        backgroundImage: `url(${LandingPageCover})`,
        backgroundSize: "cover",
        backgroundPosition: "bottom center",
        backgroundRepeat: "no-repeat",
        overflow: "hidden",
        "@keyframes float": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      }}
    >
      <Box
        component="img"
        src={IconAOGEO}
        alt="Floating Icon Left"
        sx={{
          position: "absolute",
          top: "25%",
          left: { xs: 50, sm: 100 }, // เพิ่มระยะห่างจากขอบซ้าย
          width: { xs: 50, sm: 60 },
          animation: "float 3s ease-in-out infinite",
          zIndex: 3,
        }}
      />

      {/* ไอคอนลอยด้านขวา */}
      <Box
        component="img"
        src={IconAOGEO}
        alt="Floating Icon Right"
        sx={{
          position: "absolute",
          top: "25%",
          right: { xs: 50, sm: 100 }, // เพิ่มระยะห่างจากขอบขวา
          width: { xs: 50, sm: 60 },
          animation: "float 3s ease-in-out infinite",
          animationDelay: "1.5s",
          zIndex: 3,
        }}
      />

      <Container maxWidth="lg" sx={{ height: "100%" }}>
        <Stack
          spacing={3}
          alignItems="center"
          sx={{
            height: "100%",
            pt: 5,
          }}
        >
          {/* โลโก้ */}
          <Box
            component="img"
            src={AOGEO17Logo}
            alt="AOGEO17 Logo"
            sx={{
              width: { xs: 200, sm: 240, md: 260 },
              height: "auto",
            }}
          />

          {/* Countdown */}
          <MUIDaisyCountdown />

          {/* ปุ่มลงทะเบียน */}
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSd4SQXh3wqzpluKQWIXNOyDUehGXIcP9o7Byjam51fP5NzjYg/viewform"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
          >
            <Box
              sx={{
                position: "relative",
                width: 320,
                height: 60,
                borderRadius: "999px",
                overflow: "hidden",
                backgroundColor: "rgb(121, 87, 179)",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                "&:hover": {
                  transform: "scale(1.025)",
                  boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
                },
                "&::before": {
                  content: '""',
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%) scale(1.4)",
                  width: "100%",
                  aspectRatio: "1",
                  background:
                    "conic-gradient(transparent 270deg, white, transparent)",
                  animation: "spin 3s linear infinite",
                  zIndex: 1,
                },
                "&::after": {
                  content: '""',
                  position: "absolute",
                  inset: "3px",
                  borderRadius: "inherit",
                  background:
                    "linear-gradient(63deg, rgb(80, 49, 133) -14.73%, rgb(195, 162, 250) 92.2%)",
                  zIndex: 2,
                },
                "@keyframes spin": {
                  from: {
                    transform: "translate(-50%, -50%) scale(1.4) rotate(0turn)",
                  },
                  to: {
                    transform: "translate(-50%, -50%) scale(1.4) rotate(1turn)",
                  },
                },
              }}
            >
              <Box
                sx={{
                  position: "relative",
                  zIndex: 3,
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  px: 4,
                }}
              >
                <Typography
                  sx={{
                    color: "#fff",
                    fontWeight: 600,
                    fontSize: { xs: "14px", sm: "16px" },
                    fontFamily: "Work Sans",
                    textTransform: "none",
                  }}
                >
                  Let’s get you registered
                </Typography>
              </Box>
            </Box>
          </a>
        </Stack>
      </Container>
    </Box>
  );
}

export default LandingPage;
