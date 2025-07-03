import React, { useState } from "react";
import {
  CssBaseline,
  Container,
  Box,
  Typography,
  Dialog,
  DialogContent,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ProfileCard from "./ProfileCard";


import AOGEOIcon from "../assets/images/icon_AOGEO.png";
import ExpoImage from "../assets/images/spaceexpo2025.png";
import WatArunImg from "../assets/images/WatArunImg.png";
import YaowaratImg from "../assets/images/YaowaratImg.png";
import Profile1 from "../assets/images/profile1.png";

function TravelInfo() {
  const [open, setOpen] = useState(false);
  
  // add more and more jaaa
  const places = [
    {
      name: "Thailand Space Expo 2025",
      location: "ICONSIAM",
      mapLink: "https://tsx.gistda.or.th/",
      image: ExpoImage,
    },
    {
      name: "Wat Arun Ratchawararam",
      location: "Bangkok Yai, Bangkok",
      mapLink: "https://www.wat-arun.com/",
      image: WatArunImg,
    },
    {
      name: "Yaowarat Chinatown",
      location: "Samphanthawong, Bangkok",
      mapLink: "https://www.tourismthailand.org/Attraction/china-town",
      image: YaowaratImg,
    },
    
  ];

  return (
    <>
      <CssBaseline />
      <Container maxWidth="lg">
        <Box sx={{ mt: { xs: "1rem", sm: "2rem" } }}>
          {/* Header */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: 2,
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Typography
                sx={{
                  mr: 1,
                  fontSize: { xs: "32px", sm: "40px", md: "48px" },
                  fontFamily: "Work Sans",
                  fontWeight: 600,
                  background:
                    "linear-gradient(108.64deg, #030304 53.36%, #BA65D4 87.49%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  textFillColor: "transparent",
                }}
              >
                Travel
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
              sx={{ display: { xs: "none", sm: "block" }, textAlign: "left" }}
            >
              <Typography
                sx={{
                  fontFamily: "Work Sans",
                  fontWeight: 600,
                  fontSize: { xs: "16px", sm: "18px" },
                }}
              >
                What's nearby
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
          </Box>

          {/* Places */}
          {places.map((place, index) => (
            <Box key={index} sx={{ mt: 3 }}>
              {/* Image with hover overlay */}
              <Box key={index} sx={{ mt: 3 }}>
                <Box
                  sx={{
                    position: "relative",
                    cursor: "pointer",
                    overflow: "hidden", // ✅ ไม่ให้ overlay ล้นขอบภาพ
                    borderRadius: 5, // ✅ ให้ container มีมุมโค้งเท่ารูป
                    "&:hover .hover-overlay": { opacity: 1 },
                  }}
                  onClick={() => window.open(place.mapLink, "_blank")}
                >
                  {/* รูปภาพ */}
                  <Box
                    component="img"
                    src={place.image}
                    alt={place.name}
                    sx={{
                      width: "100%",
                      height: "65vh",
                      objectFit: "cover",
                      display: "block", // ✅ ป้องกัน inline gap
                      "@media (max-width: 600px)": {
                        height: "auto",
                        aspectRatio: "16 / 9",
                      },
                    }}
                  />

                  {/* Overlay */}
                  <Box
                    className="hover-overlay"
                    sx={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      borderRadius: 5,
                      backgroundColor: "rgba(0, 0, 0, 0.5)", // ✅ สีดำโปร่งเบาลง
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      opacity: 0,
                      transition: "opacity 0.3s ease-in-out",
                    }}
                  >
                    <Typography
                      sx={{
                        color: "white",
                        fontSize: { xs: "16px", sm: "20px" },
                        fontWeight: 600,
                        fontFamily: "Work Sans, sans-serif",
                      }}
                    >
                      More →
                    </Typography>
                  </Box>
                </Box>
              </Box>

              {/* Info + Button */}
              <Box
                sx={{
                  mt: 2,
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  flexWrap: "wrap",
                  gap: 2,
                }}
              >
                <Box sx={{ flexGrow: 1 }}>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 600,
                      fontFamily: "Work Sans, sans-serif",
                      color: "#030304",
                    }}
                  >
                    {place.name}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{ fontFamily: "Work Sans, sans-serif" }}
                    color="text.secondary"
                  >
                    {place.location}
                  </Typography>
                </Box>

                <Box
                  component="button"
                  onClick={() => window.open(place.mapLink, "_blank")}
                  sx={{
                  padding: { xs: "6px 16px", sm: "10px 24px" },
                  fontSize: { xs: "16px", sm: "18px" },
                  borderRadius: "25px",
                  border: "1px solid #030304",
                  fontFamily: "Work Sans",
                  fontWeight: 600,
                  background: "white",
                  color: "#030304",
                  cursor: "pointer",
                  transition: "all 0.3s ease-in-out",
                  "&:hover": {
                    background:
                      "linear-gradient(63deg, rgb(80, 49, 133) -14.73%, rgb(195, 162, 250) 92.2%)",
                    color: "#ffffff",
                    border: "1px solid #ffffff",
                  },
                }}
                >
                  Show on map →
                </Box>
              </Box>

              <Box sx={{ mt: 4, borderBottom: "1px solid #e5e5e5" }} />
            </Box>
          ))}

          {/* Profile Button */}
          {/* <Box
            component="button"
            onClick={() => setOpen(true)}
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
              fontFamily: "Work Sans, sans-serif",
              fontWeight: 600,
              background: "white",
              cursor: "pointer",
              color: "#030304",
              transition: "all 0.3s ease-in-out",
              whiteSpace: "nowrap",
              mt: 2,
            }}
          >
            Show Profile →
          </Box> */}

          {/* Profile Dialog */}
          {/* <Dialog
            open={open}
            onClose={() => setOpen(false)}
            fullWidth
            maxWidth="md"
            BackdropProps={{
              sx: {
                backgroundColor: "rgba(0, 0, 0, 0.8)",
              },
            }}
            PaperProps={{
              sx: {
                background: "transparent",
                boxShadow: "none",
                overflow: "visible",
              },
            }}
          >
            <IconButton
              onClick={() => setOpen(false)}
              sx={{
                position: "absolute",
                top: -16,
                right: -16,
                backgroundColor: "white",
                zIndex: 1,
                "&:hover": {
                  backgroundColor: "#e0e0e0",
                },
              }}
            >
              <CloseIcon />
            </IconButton>

            <DialogContent
              sx={{
                p: 0,
                overflow: "visible",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", sm: "row" },
                  gap: 3,
                  alignItems: "flex-start",
                  p: { xs: 2, sm: 3 },
                  borderRadius: 3,
                  maxWidth: 800,
                  mx: "auto",
                  color: "white",
                }}
              >
                <Box sx={{ flexShrink: 0 }}>
                  <ProfileCard
                    name="Aekkarat A."
                    title="Industrial Engineer"
                    handle="bbabybrook"
                    status="15 Oct 2025"
                    contactText="Contact Me"
                    avatarUrl={Profile1}
                    showUserInfo={true}
                    enableTilt={true}
                    onContactClick={() => console.log("Contact clicked")}
                  />
                </Box>
                <Box
                  sx={{
                    flex: 1,
                    minWidth: 250,
                    fontFamily: "Work Sans",
                    maxHeight: { xs: "20vh", sm: "50vh" },
                    overflowY: "auto",
                    pr: 1,
                    "&::-webkit-scrollbar": {
                      width: "6px",
                    },
                    "&::-webkit-scrollbar-thumb": {
                      backgroundColor: "#ccc",
                      borderRadius: "8px",
                    },
                    "&::-webkit-scrollbar-thumb:hover": {
                      backgroundColor: "#999",
                    },
                    scrollbarWidth: "thin",
                    scrollbarColor: "#ccc transparent",
                  }}
                >
                  <Typography variant="h6" sx={{ mb: 1 }}>
                    Biography
                  </Typography>
                  <Typography variant="body2" sx={{ mb: 1 }}>
                    Aekkarat A. is an Industrial Engineer passionate about smart
                    manufacturing and production optimization. He specializes in
                    designing intelligent automation systems and has hands-on
                    experience in project management within large-scale
                    manufacturing environments.
                  </Typography>
                  <Typography variant="body2" sx={{ mb: 1 }}>
                    Currently, he is focusing on developing AI and IoT-driven
                    platforms to improve production efficiency and minimize
                    waste in industrial operations.
                  </Typography>
                </Box>
              </Box>
            </DialogContent>
          </Dialog> */}
        </Box>
      </Container>
    </>
  );
}

export default TravelInfo;
