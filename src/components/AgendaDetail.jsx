import React from "react";
import { Box, Typography } from "@mui/material";
import LandingPageCover from "../assets/images/LandingPageCover.webp";

import AOGEOIcon from "../assets/images/icon_AOGEO.png";

function AgendaDetail() {
  return (
    <Box
      sx={{
        position: "relative",
        height: "95vh",
        backgroundImage: `url(${LandingPageCover})`,
        backgroundSize: "cover",
        backgroundPosition: "bottom center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        textAlign: "center",
        px: 2,
      }}
    >
      <Box>
        <Box
          component="img"
          src={AOGEOIcon}
          alt="AOGEO icon"
          sx={{
            width: { xs: 200, sm: 240, md: 260 },
              height: "auto",
            animation: "spinPauseLoop 15s ease-in-out infinite",
            mb: 2,
            mt: 5,
            "@keyframes spinPauseLoop": {
              "0%": { transform: "rotate(0deg)" },
              "40%": { transform: "rotate(360deg)" },
              "50%": { transform: "rotate(360deg)" },
              "90%": { transform: "rotate(0deg)" },
              "100%": { transform: "rotate(0deg)" },
            },
          }}
        />
        <Typography
          variant="h2"
          sx={{
            fontFamily: "Work Sans, sans-serif",
            fontWeight: 700,
            fontSize: { xs: "32px", sm: "48px" },
            color: "rgb(80, 49, 133)",
          }}
        >
          Something Exciting is on the Horizon
        </Typography>
        <Typography
          variant="body1"
          sx={{
            mt: 2,
            fontFamily: "Work Sans, sans-serif",
            fontSize: { xs: "14px", sm: "16px" },
            color: "#030306",
          }}
        >
          We’re putting the finishing touches on the 17th AOGEO Symposium
          agenda.
          <br />
          Stay tuned for insightful sessions and amazing speakers!
        </Typography>
      </Box>
    </Box>
  );
}

export default AgendaDetail;
