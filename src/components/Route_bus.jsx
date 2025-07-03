import React from "react";
import { Box, Typography, Button } from "@mui/material";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

import DirectionsBusIcon from "@mui/icons-material/DirectionsBus";
import VIAbusIcon from "../assets/images/VIAbusapp-icon.webp";
import AOGEOIcon from "../assets/images/icon_AOGEO.png";

function Route_bus() {
  return (
    <div>
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
            Bus
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

        <Box
          sx={{
            width: "100%",
            height: { xs: 450, sm: 550, md: 650 },
            borderRadius: "16px",
            overflow: "hidden",
            border: "1px solid #ccc",
            mt: 2,
          }}
        >
          <iframe
            title="BMTA Bus Lines"
            src="https://www.bmta.co.th/bus-lines"
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
            mt: 2,
          }}
        >
          *Please note that public buses do not operate directly from Suvarnabhumi Airport to Millennium Hilton Bangkok.
        </Typography>

        <Box
          sx={{
            mt: 3,
            px: 2,
            py: 3,
            backgroundColor: "#F3F6F9",
            borderRadius: "16px",
            border: "1px solid #E0E0E0",
            textAlign: "center",
          }}
        >
          <Box
            component="img"
            src={VIAbusIcon}
            alt="VIAbus Icon"
            sx={{
              width: 64,
              height: 64,
              borderRadius: "20%",
              mb: 1.5,
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
            }}
          />
          <Typography
            variant="h6"
            sx={{
              fontFamily: "Work Sans",
              fontWeight: 600,
              fontSize: { xs: 16, md: 20 },
              color: "#030304",
              mb: 1,
            }}
          >
            Want to explore more routes?
          </Typography>
          <Typography
            sx={{
              fontSize: 14,
              fontFamily: "Work Sans",
              color: "#555555",
              mb: 2,
            }}
          >
            Download the <strong>VIAbus</strong> app to find bus routes,
            schedules, and nearby stops easily.
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: 2,
              flexWrap: "wrap",
            }}
          >
            <Button
              variant="outlined"
              sx={{
                backgroundColor: "transparent",
                border: "1px solid #030304",
                borderRadius: "999px",
                color: "#030304",
                fontWeight: 600,
                fontSize: 14,
                textTransform: "none",
                fontFamily: "Work Sans",
                px: 2.5,
                py: 1,
                transition: "all 0.3s ease-in-out",
                "&:hover": {
                  background:
                    "linear-gradient(63deg, rgb(80, 49, 133) -14.73%, rgb(195, 162, 250) 92.2%)",
                  color: "#ffffff",
                  border: "1px solid #ffffff",
                },
              }}
              href="https://play.google.com/store/apps/details?id=com.indyzalab.transitia"
              target="_blank"
            >
              Download on Play Store
            </Button>

            <Button
              variant="outlined"
              sx={{
                backgroundColor: "transparent",
                border: "1px solid #030304",
                borderRadius: "999px",
                color: "#030304",
                fontWeight: 600,
                fontSize: 14,
                textTransform: "none",
                fontFamily: "Work Sans",
                px: 2.5,
                py: 1,
                transition: "all 0.3s ease-in-out",
                "&:hover": {
                  background:
                    "linear-gradient(63deg, rgb(80, 49, 133) -14.73%, rgb(195, 162, 250) 92.2%)",
                  color: "#ffffff",
                  border: "1px solid #ffffff",
                },
              }}
              href="https://apps.apple.com/th/app/viabus/id1074208600"
              target="_blank"
            >
              Download on App Store
            </Button>
          </Box>
        </Box>
      </Box>
    </div>
  );
}

export default Route_bus;
