import React from "react";
import {
  Box,
  Typography,
  Stepper,
  Step,
  StepLabel,
  StepConnector,
  Avatar,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { stepConnectorClasses } from "@mui/material/StepConnector";

// โลโก้
import arlLogo from "../assets/logos/ARLbangkok.png";
import btsLogo from "../assets/logos/BTS-Logo.png";
import mrtLogo from "../assets/logos/MRT_logo.png";

// ข้อมูลสถานี
const steps = [
  {
    name: "Suvarnabhumi Airport",
    detail: "Airport Rail Link",
    icon: arlLogo,
    color: "#751633",
    lineColor: "#751633",
  },
  {
    name: "Makkasan",
    detail: "Transfer to MRT Phetchaburi",
    icon: arlLogo,
    color: "#751633", // MRT Blue Line
    lineColor: "#751633",
  },
  {
    name: "Si Lom",
    detail: "Transfer to BTS Silom Line (Sala Daeng)",
    icon: mrtLogo,
    color: "#26308C",
    lineColor: "#26308C",
  },
  {
    name: "Krung Thon Buri",
    detail: "Transfer to Gold Line",
    icon: btsLogo,
    color: "#00817E",
    lineColor: "#00817E",
  },
  {
    name: "Charoen Nakhon",
    detail: "Arrive at Destination",
    icon: btsLogo,
    color: "#B28F00",
    lineColor: "#B28F00",
  },
];

// ===== Connector สำหรับ Desktop =====
const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 32,
  },
  [`& .${stepConnectorClasses.line}`]: {
    height: 4,
    border: 0,
    backgroundColor: "#ccc",
    borderRadius: 1,
  },
}));

// ===== StepIconComponent =====
function ColorlibStepIcon(props) {
  const { icon, className } = props;
  const index = Number(icon) - 1;
  const step = steps[index];

  return (
    <Box
      className={className}
      sx={{
        backgroundColor: step.color,
        width: 60,
        height: 60,
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1,
      }}
    >
      <Avatar
        sx={{
          width: 48,
          height: 48,
          bgcolor: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          component="img"
          src={step.icon}
          alt={step.name}
          sx={{
            width: 28,
            height: 28,
            objectFit: "contain",
          }}
        />
      </Avatar>
    </Box>
  );
}

// ===== Main Component =====
export default function TrainStepper() {
  const theme = useTheme();
  const isMobile = useMediaQuery("(max-width: 894px)");

  return (
    <Box sx={{ px: 2, py: 4 }}>
      <Typography
        variant="h6"
        sx={{
          fontFamily: "Work Sans",
          fontWeight: 600,
          fontSize: { xs: 18, md: 22 },
          mb: 5,
          color: "#030304",
          textAlign: "left",
        }}
      >
        From Airport
      </Typography>
      {isMobile ? (
        // ========== Mobile (แนวตั้ง) ==========
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            position: "relative",
          }}
        >
          {steps.map((step, index) => (
            <Box
              key={index}
              sx={{
                display: "flex",
                alignItems: "flex-start",
                gap: 2,
                position: "relative",
                pl: 2,
                mb: index !== steps.length - 1 ? 3 : 0,
              }}
            >
              {/* เส้นแนวตั้ง */}
              {index < steps.length - 1 && (
                <Box
                  sx={{
                    position: "absolute",
                    top: "50%",
                    left: 38,
                    width: 4,
                    height: "calc(100% + 8px)",
                    backgroundColor: steps[index + 1].lineColor || "#ccc",
                    zIndex: 0,
                  }}
                />
              )}

              {/* วงกลมโลโก้ */}
              <Box
                sx={{
                  width: 48,
                  height: 48,
                  borderRadius: "50%",
                  backgroundColor: step.color,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  zIndex: 1,
                }}
              >
                <Avatar
                  sx={{
                    width: 34,
                    height: 34,
                    bgcolor: "white",
                  }}
                >
                  <Box
                    component="img"
                    src={step.icon}
                    alt={step.name}
                    sx={{ width: 22, height: 22, objectFit: "contain" }}
                  />
                </Avatar>
              </Box>

              {/* ข้อความ */}
              <Box>
                <Typography
                  sx={{
                    fontWeight: 600,
                    fontSize: 13,
                    fontFamily: "Work Sans",
                  }}
                >
                  {step.name}
                </Typography>
                <Typography
                  sx={{
                    fontSize: 12,
                    color: "#555555",
                    fontFamily: "Work Sans",
                  }}
                >
                  {step.detail}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      ) : (
        // ========== Desktop (แนวนอน) ==========
        <>
          <Stepper
            alternativeLabel
            activeStep={-1}
            connector={<ColorlibConnector />}
          >
            {steps.map((step, index) => (
              <Step key={index}>
                <StepLabel StepIconComponent={ColorlibStepIcon} />
              </Step>
            ))}
          </Stepper>

          {/* ชื่อสถานี */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              mt: 2,
              gap: 1,
            }}
          >
            {steps.map((step, index) => (
              <Box
                key={index}
                sx={{
                  textAlign: "center",
                  flex: 1,
                  minWidth: 0,
                  px: 1,
                }}
              >
                <Typography
                  sx={{
                    fontWeight: 600,
                    fontSize: { xs: 12, md: 14 },
                    whiteSpace: "normal",
                    wordBreak: "break-word",
                    fontFamily: "Work Sans",
                    color: "#030304",
                  }}
                >
                  {step.name}
                </Typography>
                <Typography
                  sx={{
                    fontSize: 13,
                    color: "#555555",
                    fontFamily: "Work Sans",
                  }}
                >
                  {step.detail}
                </Typography>
              </Box>
            ))}
          </Box>
        </>
      )}
      {/* <Typography
        sx={{
          fontSize: 13,
          color: "#555555",
          fontFamily: "Work Sans",
          mt: 2,
          textAlign:"center"
        }}
      >
        Estimate time 1hr 18min.
      </Typography> */}
    </Box>
  );
}
