import React, { useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import BTSTrainTimeline from "./BTSTrainTimeline";
import MRTTrainTimeline from "./MRTTrainTimeline";
import AOGEOIcon from "../assets/images/icon_AOGEO.png";

const tabs = [
  { id: "BTS", label: "BTS" },
  { id: "MRT", label: "MRT" },
];

function Route_train() {
  const [activeTab, setActiveTab] = useState("BTS");

  return (
    <Box sx={{ mt: 4 }}>
      {/* Heading */}
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Typography
          sx={{
            fontSize: { xs: "24px", sm: "32px", md: "40px" },
            fontFamily: "Work Sans",
            fontWeight: 600,
            background:
              "linear-gradient(108.64deg, #030304 53.36%, #BA65D4 87.49%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            textFillColor: "transparent",
            mr: 1,
          }}
        >
          Train
        </Typography>
        <Box
          component="img"
          src={AOGEOIcon}
          alt="AOGEO icon"
          sx={{
            width: { xs: 28, sm: 36, md: 40 },
            height: { xs: 28, sm: 36, md: 40 },
            animation: "spinPauseLoop 15s ease-in-out infinite",
            "@keyframes spinPauseLoop": {
              "0%": { transform: "rotate(0deg)" },
              "40%": { transform: "rotate(360deg)" },
              "50%": { transform: "rotate(360deg)" },
              "90%": { transform: "rotate(0deg)" },
              "100%": { transform: "rotate(0deg)" },
            },
          }}
        />
      </Box>

      {/* Tab Buttons */}
      <Box sx={{ mt: 1, display: "flex", justifyContent: "left" }}>
        <Box
          sx={{
            display: "flex",
            width: "100%",
            maxWidth: 200, // ลดจาก 250 → 200
            borderRadius: "999px",
            border: "1px solid rgba(0,0,0,0.2)",
            overflow: "hidden",
          }}
        >
          {tabs.map((tab) => (
            <Button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              sx={{
                flex: 1,
                borderRadius: 0,
                px: 1.5, // ลดจาก 2 → 1.5
                py: 0.5, // ลดจาก 1 → 0.5
                fontFamily: "Work Sans, sans-serif",
                fontWeight: 500,
                fontSize: "14px", // ลดจาก 14px → 12px
                background:
                  activeTab === tab.id
                    ? "linear-gradient(140.64deg, #030304 10.36%, #BA65D4 80.49%)"
                    : "transparent",
                color: activeTab === tab.id ? "white" : "#030304",
                "&:hover": {
                  background:
                    activeTab === tab.id
                      ? "linear-gradient(140.64deg, #030304 53.36%, #BA65D4 87.49%)"
                      : "rgba(0,0,0,0.04)",
                },
                border: "none",
                minHeight: "32px", // บังคับความสูงขั้นต่ำ (ถ้าอยากให้เตี้ยลง)
              }}
            >
              {tab.label}
            </Button>
          ))}
        </Box>
      </Box>

      {/* Content */}
      {activeTab === "BTS" && (
        <>
          <Box
            sx={{
              width: "100%",
              height: { xs: 350, sm: 500, md: 550 },
              borderRadius: "16px",
              overflow: "hidden",
              border: "1px solid #ccc",
              mt: 2,
            }}
          >
            <iframe
              title="BTS Route Map"
              src="https://www.bts.co.th/eng/routemap.html"
              width="100%"
              height="100%"
              style={{ border: "none" }}
            />
          </Box>
          <Typography
            sx={{
              fontSize: 13,
              color: "#555555",
              fontFamily: "Work Sans",
              ml: 2,
              mt: 1,
            }}
          >
            *Please select your destination as the Gold Line, Charoen Nakhon
            Station (G2).
          </Typography>
          <BTSTrainTimeline />
        </>
      )}

      {activeTab === "MRT" && (
        <>
          <Box
            sx={{
              width: "100%",
              height: { xs: 350, sm: 500, md: 550 },
              borderRadius: "16px",
              overflow: "hidden",
              border: "1px solid #ccc",
              mt: 2,
            }}
          >
            <iframe
              title="MRT Route Map"
              src="https://metro.bemplc.co.th/MetroStation"
              width="100%"
              height="100%"
              style={{ border: "none" }}
            />
          </Box>
          <Typography
            sx={{
              fontSize: 13,
              color: "#555555",
              fontFamily: "Work Sans",
              ml: 2,
              mt: 1,
            }}
          >
            *Check interchange stations between MRT Blue and Purple lines.
          </Typography>
          <MRTTrainTimeline />
        </>
      )}
    </Box>
  );
}

export default Route_train;
