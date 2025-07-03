import React from "react";
import { Box, Typography, Button } from "@mui/material";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

import { ZoomIn } from "@mui/icons-material";

import BoatMap from "../assets/images/Boatmap.png";
import AOGEOIcon from "../assets/images/icon_AOGEO.png";
import DirectionsBoatIcon from "@mui/icons-material/DirectionsBoat";
import VIAbusIcon from "../assets/images/VIAbusapp-icon.webp";

function Route_boat() {
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
            Boat
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
            height: { xs: 350, sm: 500, md: 550 },
            borderRadius: "16px",
            overflow: "hidden",
            border: "1px solid #ccc",
            mt: 2,
          }}
        >
          <iframe
            title="CHAO PHRAYA EXPRESS BOAT SERVICE"
            src="https://www.chaophrayaexpressboat.com/chaophrayaexpressboat?lang=en"
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
          *Your destination is ICONSIAM. You can get here by taking the{" "}
          <Box
            component="span"
            sx={{
              backgroundColor: "#E9673F", // Orange
              borderRadius: "6px",
              px: 0.8,
              py: 0.2,
              color: "white",
              fontWeight: 500,
            }}
          >
            Orange Flag Boat
          </Box>{" "}
          or the{" "}
          <Box
            component="span"
            sx={{
              backgroundColor: "#B7202F", // Red
              borderRadius: "6px",
              px: 0.8,
              py: 0.2,
              color: "white",
              fontWeight: 500,
            }}
          >
            Red Flag Boat
          </Box>
          . Please note that boat services are only available on the Chao Phraya
          River, and cannot be accessed directly from the airport.
        </Typography>

        <Box sx={{ py: 2 }}>
          <Typography
            variant="h6"
            sx={{
              fontFamily: "Work Sans",
              fontWeight: 600,
              fontSize: { xs: 18, md: 22 },
              color: "#030304",
              textAlign: "left",
              mt: 2,
            }}
          >
            Boat Schedule
          </Typography>
          <Box>
            <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
              <ZoomIn fontSize="small" sx={{ mr: 0.5, color: "#888" }} />
              <Typography
                sx={{ fontSize: 13, color: "#888", fontFamily: "Work Sans" }}
              >
                Click the image to zoom
              </Typography>
            </Box>
            <Zoom>
              <Box
                component="img"
                src={BoatMap}
                alt="Boat Map"
                sx={{
                  width: "100%",
                  borderRadius: "12px",
                  border: "1px solid #ccc",
                  cursor: "zoom-in",
                }}
              />
            </Zoom>
          </Box>
        </Box>

        <Box
          sx={{
            mt: 1,
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
            Download the <strong>VIAbus</strong> app to find boat routes,
            schedules, and nearby piers easily.
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
                transition: "all 0.3s ease-in-out", // เพิ่มความลื่นไหล
                "&:hover": {
                  background:
                    "linear-gradient(63deg, rgb(80, 49, 133) -14.73%, rgb(195, 162, 250) 92.2%)",
                  color: "#ffffff",
                  border: "1px solid #ffffff", // ขอบเปลี่ยนเป็นสีขาว
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

export default Route_boat;
