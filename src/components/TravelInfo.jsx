import React, { useState } from "react";
import {
  CssBaseline,
  Container,
  Box,
  Typography,
  Dialog,
  DialogContent,
  IconButton,
  Button,
  Fade,
} from "@mui/material";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

import CloseIcon from "@mui/icons-material/Close";
import ProfileCard from "./ProfileCard";

import AOGEOIcon from "../assets/images/icon_AOGEO.png";
import ExpoImage from "../assets/images/spaceexpo2025.png";
import WatArunImg from "../assets/images/WatArunImg.png";
import YaowaratImg from "../assets/images/YaowaratImg.png";
import Profile1 from "../assets/images/profile1.png";

function TravelInfo() {
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  const [open, setOpen] = useState(false);

  const handleOpenImage = (src) => {
    setSelectedImage(src);
    setOpenDialog(true);
  };

  const handleCloseImage = () => {
    setOpenDialog(false);
    setSelectedImage("");
  };

  // สถานที่ทั้งหมด
  const places = [
    {
      name: "Thailand Space EXPO 2025",
      location: "ICONSIAM",
      mapLink: "https://www.google.com/maps?q=ICONSIAM+Bangkok",
      image: ExpoImage,
    },
    {
      name: "Wat Arun Ratchawararam",
      location: "Bangkok Yai, Bangkok",
      mapLink: "https://www.google.com/maps?q=Wat+Arun+Bangkok",
      image: WatArunImg,
    },
    {
      name: "Yaowarat Chinatown",
      location: "Samphanthawong, Bangkok",
      mapLink: "https://www.google.com/maps?q=Yaowarat+Chinatown+Bangkok",
      image: YaowaratImg,
    },
  ];

  return (
    <>
      <CssBaseline />
      <Container maxWidth="xl">
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

          {/* All places */}
          {places.map((place, index) => (
            <Box key={index} sx={{ mt: 3 }}>
              {/* Image */}
              <Box sx={{ position: "relative" }}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    cursor: "pointer",
                  }}
                  onClick={() => handleOpenImage(place.image)}
                >
                  <Box
                    component="img"
                    src={place.image}
                    alt={place.name}
                    sx={{
                      width: "100%",
                      height: "65vh",
                      objectFit: "cover",
                      borderRadius: 5,
                      "@media (max-width: 600px)": {
                        height: "auto",
                        aspectRatio: "16 / 9",
                      },
                    }}
                  />
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
                  }}
                >
                  Show on map →
                </Box>
              </Box>

              <Box sx={{ mt: 4, borderBottom: "1px solid #E5E5E5" }} />
            </Box>
          ))}

          <>

            <Box
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
                    mt:2,
                  }}
                >
                  Show Profile →
                </Box>

            <Dialog
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
                  overflow: "visible", // สำคัญ
                },
              }}
            >
              {/* ปุ่มปิด */}
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

              {/* Content */}
              <DialogContent
                sx={{
                  p: 0,
                  overflow: "visible", // ไม่ตัด effect
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
                  {/* Profile Card */}
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

                  {/* Biography with scroll */}
                  <Box
                    sx={{
                      flex: 1,
                      minWidth: 250,
                      fontFamily: "Work Sans",
                      maxHeight: { xs: "20vh", sm: "50vh" }, // จำกัดความสูง
                      overflowY: "auto", // ทำให้ scroll ได้แค่ส่วนนี้
                      pr: 1, // เผื่อไว้กัน scrollbar ชิดขอบ
                    }}
                  >
                    <Typography variant="h6" sx={{ mb: 1,  fontFamily: "Work Sans" }}>
                      Biography
                    </Typography>
                    <Typography variant="body2" sx={{ mb: 1, fontFamily: "Work Sans" }}>
                      Aekkarat A. is an Industrial Engineer passionate about
                      smart manufacturing and production optimization. He
                      specializes in designing intelligent automation systems
                      and has hands-on experience in project management within
                      large-scale manufacturing environments. Aekkarat A. is an
                      Industrial Engineer passionate about smart manufacturing
                      and production optimization. He specializes in designing
                      intelligent automation systems and has hands-on experience
                      in project management within large-scale manufacturing
                      environments.
                    </Typography>
                    <Typography variant="body2" sx={{ mb: 1,  fontFamily: "Work Sans"}}>
                      Currently, he is focusing on developing AI and IoT-driven
                      platforms to improve production efficiency and minimize
                      waste in industrial operations.
                    </Typography>
                  </Box>
                </Box>
              </DialogContent>
            </Dialog>
          </>
        </Box>
      </Container>

      {/* Fullscreen Dialog */}
      <Dialog
        open={openDialog}
        onClose={handleCloseImage}
        onExited={() => setSelectedImage("")}
        maxWidth="xl"
        TransitionComponent={Fade}
        keepMounted
        transitionDuration={300}
        disableScrollLock
        PaperProps={{
          sx: {
            backgroundColor: "black",
            position: "relative",
          },
        }}
      >
        <IconButton
          onClick={handleCloseImage}
          sx={{
            position: "absolute",
            top: 8,
            right: 8,
            color: "white",
            zIndex: 1,
          }}
        >
          <CloseRoundedIcon />
        </IconButton>

        <DialogContent
          sx={{
            p: 0,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {selectedImage && (
            <Box
              component="img"
              src={selectedImage}
              alt="fullscreen"
              sx={{
                width: "100%",
                maxHeight: "90vh",
                objectFit: "contain",
                cursor: "zoom-out",
              }}
              onClick={handleCloseImage}
            />
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}

export default TravelInfo;
