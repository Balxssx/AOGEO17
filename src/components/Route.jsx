import React, { useState, useRef } from "react";
import { CssBaseline, Container, Box, Typography } from "@mui/material";
import TrainIcon from "@mui/icons-material/Train";
import DirectionsBusIcon from "@mui/icons-material/DirectionsBus";
import DirectionsBoatIcon from "@mui/icons-material/DirectionsBoat";

// ✅ นำเข้าภาพ
import AOGEOIcon from "../assets/images/icon_AOGEO.png";
import ThaiPattern from "../assets/images/ThaiPattern.png";

// ✅ Import Components
import OnloadingIcon from "./OnloadingIcon.jsx";
import Route_train from "./Route_train";

const transportOptions = [
  { type: "Train", detail: "BTS, MRT" },
  { type: "Bus", detail: "BMTA" },
  { type: "Boat", detail: "Chao Phraya Express" },
];

function Route() {
  const [selected, setSelected] = useState(null);
  const [activeCard, setActiveCard] = useState(null);
  const [loading, setLoading] = useState(false);

  const scrollRef = useRef(null); // ✅ ใช้สำหรับ scroll ลงอัตโนมัติ

  const handleSelect = (type) => {
    setActiveCard(type);
    setLoading(true);
    setSelected(null);

    setTimeout(() => {
      setSelected(type);
      setLoading(false);

      setTimeout(() => {
        scrollRef.current?.scrollIntoView({ behavior: "smooth" });
      }, 50); // หน่วงเล็กน้อยเพื่อให้ DOM render ก่อน
    }, 1000);
  };

  return (
    <>
      <CssBaseline />
      <Container maxWidth="lg">
        <Box sx={{
            mt: {
              xs: "1rem", // สำหรับหน้าจอเล็ก (xs = <600px)
              sm: "2rem", // สำหรับหน้าจอปกติขึ้นไป (sm = ≥600px)
            },
          }}>
          {/* Header */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              rowGap: 2,
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Typography
                sx={{
                  fontSize: { xs: "32px", sm: "40px", md: "48px" },
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
                Access
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

            {/* Location Info + Button */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 2,
                flexWrap: "wrap",
                justifyContent: "flex-end",
              }}
            >
              <Box sx={{ display: { xs: "none", sm: "block" } }}>
                <Typography
                  sx={{
                    fontFamily: "Work Sans",
                    fontWeight: 600,
                    fontSize: { xs: "16px", sm: "18px" },
                  }}
                >
                  Millennium Hilton Bangkok
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Work Sans",
                    fontWeight: 400,
                    fontSize: { xs: "13px", sm: "14px" },
                    color: "#555",
                  }}
                >
                  123 Charoennakorn Road, Klongsan, Bangkok, 10600, Thailand
                </Typography>
              </Box>

              <Box
                component="button"
                onClick={() =>
                  window.open(
                    "https://www.google.com/maps?q=Millennium+Hilton+Bangkok",
                    "_blank"
                  )
                }
                onMouseEnter={(e) => {
                  e.currentTarget.style.background =
                    "linear-gradient(93.63deg, #6D11D8 7.55%, #FEAFD1 127.84%)";
                  e.currentTarget.style.color = "#ffffff";
                  e.currentTarget.style.border = "1px solid #030304";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "white";
                  e.currentTarget.style.color = "#030304";
                  e.currentTarget.style.border = "1px solid #030304";
                }}
                sx={{
                  padding: { xs: "6px 16px", sm: "10px 24px" },
                  fontSize: { xs: "16px", sm: "18px" },
                  borderRadius: "25px",
                  border: "1px solid #030304",
                  fontFamily: "Work Sans",
                  fontWeight: 600,
                  background: "white",
                  cursor: "pointer",
                  color: "#030304",
                  transition: "all 0.3s ease-in-out",
                }}
              >
                Show on map →
              </Box>
            </Box>
          </Box>

          {/* Divider */}
          <Box sx={{ mt: 2, borderBottom: "1px solid #E5E5E5" }} />

          {/* Transport Cards */}
          <Box sx={{ mt: 4 }}>
            <Typography
              sx={{
                fontSize: { xs: "20px", sm: "24px" },
                fontWeight: 600,
                fontFamily: "Work Sans",
                color: "#030304",
                mb: 3,
                textAlign: "center",
              }}
            >
              Choose your way to the event
            </Typography>

            <Box
              sx={{
                display: "flex",
                gap: 2,
                flexWrap: "wrap",
                justifyContent: "center",
              }}
            >
              {transportOptions.map((option) => {
                const isSelected = activeCard === option.type;
                return (
                  <Box
                    key={option.type}
                    onClick={() => handleSelect(option.type)}
                    sx={{
                      width: { xs: "100%", sm: 200, md: 250 },
                      height: { xs: 200, sm: 320, md: 350 },
                      borderRadius: "20px",
                      padding: "32px 16px",
                      textAlign: "center",
                      cursor: "pointer",
                      transition:
                        "background 0.5s, color 0.5s, box-shadow 0.5s, border 0.5s",
                      fontFamily: "Work Sans",
                      background: isSelected
                        ? "linear-gradient(180deg, #A24CC3 0%, #BA65D4 100%)"
                        : "#fff",
                      backgroundImage: isSelected
                        ? `url(${ThaiPattern})`
                        : "none",
                      backgroundSize: "cover",
                      color: isSelected ? "#fff" : "#030304",
                      border: isSelected
                        ? "1px solid #030304"
                        : "1px solid #ccc",
                      boxShadow: isSelected
                        ? "0 0 0px rgba(186, 101, 212, 0.4)"
                        : "none",
                      animation: isSelected
                        ? "pulseShadow 4s ease-in-out infinite"
                        : "none",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      "&:hover": {
                        boxShadow: isSelected
                          ? "0 0 25px rgba(186, 101, 212, 0.6)"
                          : "0 8px 24px rgba(0,0,0,0.10)",
                      },
                      "@keyframes pulseShadow": {
                        "0%": {
                          boxShadow: "0 0 0px rgba(186, 101, 212, 0.4)",
                        },
                        "50%": {
                          boxShadow: "0 0 25px rgba(186, 101, 212, 0.8)",
                        },
                        "100%": {
                          boxShadow: "0 0 0px rgba(186, 101, 212, 0.4)",
                        },
                      },
                    }}
                  >
                    {option.type === "Train" && (
                      <TrainIcon
                        sx={{
                          fontSize: 64,
                          color: isSelected ? "#fff" : "#222",
                        }}
                      />
                    )}
                    {option.type === "Bus" && (
                      <DirectionsBusIcon
                        sx={{
                          fontSize: 64,
                          color: isSelected ? "#fff" : "#222",
                        }}
                      />
                    )}
                    {option.type === "Boat" && (
                      <DirectionsBoatIcon
                        sx={{
                          fontSize: 64,
                          color: isSelected ? "#fff" : "#222",
                        }}
                      />
                    )}

                    <Typography
                      sx={{
                        mt: 3,
                        fontWeight: 600,
                        fontSize: "20px",
                        fontFamily: "Work Sans",
                      }}
                    >
                      {option.type}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "14px",
                        mt: 1,
                        fontFamily: "Work Sans",
                      }}
                    >
                      {option.detail}
                    </Typography>
                  </Box>
                );
              })}
            </Box>
          </Box>

          {/* Divider */}
          <Box sx={{ mt: 6, borderBottom: "1px solid #E5E5E5" }} />

          {/* Result Section (scroll target) */}
          <Box ref={scrollRef} sx={{ mt: 0 }}>
            {loading ? (
              <>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 1.5,
                    py: 4,
                  }}
                >
                  <OnloadingIcon />
                  <Typography
                    sx={{
                      fontFamily: "Work Sans",
                      fontWeight: 500,
                      fontSize: "18px",
                    }}
                  >
                    Loading...
                  </Typography>
                </Box>
                <Box sx={{ mt: 0, borderBottom: "1px solid #E5E5E5" }} />
              </>
            ) : selected === "Train" ? (
              <>
                <Route_train />
                <Box sx={{ mt: 6, borderBottom: "1px solid #E5E5E5" }} />
              </>
            ) : null}
          </Box>
        </Box>
      </Container>
    </>
  );
}

export default Route;
