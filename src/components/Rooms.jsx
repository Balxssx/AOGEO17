import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import {
  CssBaseline,
  Container,
  Box,
  Typography,
  Button,
  IconButton,
  Dialog,
  DialogContent,
  Fade,
  GlobalStyles,
} from "@mui/material";

import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

// ✅ รูปทั้งหมด
import AOGEOIcon from "../assets/images/icon_AOGEO.png";
import Img1 from "../assets/images/venue/bkkhi-ale-house-01.avif";
import Img2 from "../assets/images/venue/bkkhi-lifetyle03.avif";
import Img3 from "../assets/images/venue/bkkhitw-shuttle-boat-hotel-exterior.avif";
import Img4 from "../assets/images/venue/bkkhitw-exterior-sunset.avif";
import Img5 from "../assets/images/venue/bkkhitw-family-suite-living-04.avif";
import Img6 from "../assets/images/venue/bkkhitw-king-premium-room-03.avif";
import Img7 from "../assets/images/venue/bkkhitw-panoramic-executive-suite-living-room.avif";

// ✅ โครงสร้างภาพใหม่
const images = {
  ballroom: [Img1, Img2, Img3],
  breakout: [Img4, Img5, Img3],
  secretariat: [Img6],
  reception: [Img7, Img3],
};

function Rooms() {
  const swiperRef = useRef(null);
  const [activeTab, setActiveTab] = useState("ballroom");
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  const tabs = [
    { id: "ballroom", label: "Grand Ballroom and Foyer" },
    { id: "breakout", label: "Breakout Rooms and Coffee Break Area" },
    { id: "secretariat", label: "Secretariat and Prayer Rooms" },
    { id: "reception", label: "Lunch and Dinner Reception (Level G)" },
  ];

  const roomDetails = {
    ballroom: { name: "Grand Ballroom and Foyer", floor: "1st Floor" },
    breakout: {
      name: "Breakout Rooms and Coffee Break Area",
      floor: "2nd Floor",
    },
    secretariat: { name: "Secretariat and Prayer Rooms", floor: "3rd Floor" },
    reception: {
      name: "Lunch and Dinner Reception (Level G)",
      floor: "Ground Floor",
    },
  };

  const handleOpenImage = (src) => {
    setSelectedImage(src);
    setOpenDialog(true);
  };

  const handleCloseImage = () => {
    setOpenDialog(false);
    setSelectedImage("");
  };

  return (
    <>
      <CssBaseline />
      <Container maxWidth="lg">
        <Box
          sx={{
            mt: {
              xs: "1rem", // สำหรับหน้าจอเล็ก (xs = <600px)
              sm: "2rem", // สำหรับหน้าจอปกติขึ้นไป (sm = ≥600px)
            },
          }}
        >
          {/* Title */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Typography
                sx={{
                  mr: 1,
                  fontSize: { xs: "32px", sm: "40px", md: "48px" },
                  fontFamily: "Work Sans, sans-serif",
                  fontWeight: 600,
                  background:
                    "linear-gradient(108.64deg, #030304 53.36%, #BA65D4 87.49%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  textFillColor: "transparent",
                }}
              >
                Rooms
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
          </Box>

          {/* Tabs */}
          <Box
            sx={{
              mt: 1,
              overflowX: "auto",
              whiteSpace: "nowrap",
              scrollbarWidth: "none", // สำหรับ Firefox
              "&::-webkit-scrollbar": {
                display: "none", // สำหรับ Chrome, Safari
              },
            }}
          >
            <Box
              sx={{ display: "inline-flex", gap: 1, minWidth: "max-content" }}
            >
              {tabs.map((tab) => (
                <Button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  variant="outlined"
                  sx={{
                    whiteSpace: "nowrap",
                    borderRadius: "999px",
                    px: 2,
                    py: 0.5,
                    fontFamily: "Work Sans, sans-serif",
                    fontWeight: 500,
                    fontSize: "14px",
                    border:
                      activeTab === tab.id
                        ? "none"
                        : "1px solid rgba(0, 0, 0, 0.2)",
                    background:
                      activeTab === tab.id
                        ? "linear-gradient(140.64deg, #030304 53.36%, #BA65D4 87.49%)"
                        : "transparent",
                    color: activeTab === tab.id ? "white" : "#030304",
                    "&:hover": {
                      background:
                        activeTab === tab.id
                          ? "linear-gradient(140.64deg, #030304 53.36%, #BA65D4 87.49%)"
                          : "rgba(0,0,0,0.04)",
                      border: activeTab === tab.id ? "none" : undefined,
                    },
                  }}
                >
                  {tab.label}
                </Button>
              ))}
            </Box>
          </Box>

          {/* Swiper Gallery */}
          <Box sx={{ mt: 2, position: "relative" }}>
            <GlobalStyles
              styles={{
                ".swiper-pagination": {
                  bottom: "16px",
                  textAlign: "center",
                  width: "100%",
                  position: "absolute",
                  zIndex: 2,
                },
                ".swiper-pagination-bullet": {
                  backgroundColor: "#ffffff",
                  opacity: 0.5,
                  width: "7px",
                  height: "7px",
                  margin: "0 3px",
                  borderRadius: "50%",
                  transition: "all 0.2s ease-in-out",
                },
                ".swiper-pagination-bullet-active": {
                  backgroundColor: "#ffffff",
                  opacity: 1,
                  transform: "scale(1.2)",
                },
              }}
            />

            <Swiper
              modules={[Pagination]}
              pagination={{ clickable: true }}
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              centeredSlides
              slidesPerView="auto"
              spaceBetween={20}
              style={{ overflow: "visible", paddingBottom: "0px" }}
            >
              {images[activeTab]?.map((src, index) => (
                <SwiperSlide key={index} style={{ width: "100%" }}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                    onClick={() => handleOpenImage(src)}
                  >
                    <Box
                      component="img"
                      src={src}
                      alt={`venue-${index}`}
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
                </SwiperSlide>
              ))}
            </Swiper>
          </Box>

          {/* Navigation & Detail */}
          <Box
            sx={{
              mt: 2,
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              justifyContent: "space-between",
              alignItems: { xs: "flex-start", md: "center" },
              flexWrap: "wrap",
              gap: 2,
            }}
          >
            <Box sx={{ display: { xs: "none", md: "flex" }, gap: 1, order: 2 }}>
              <IconButton
                onClick={() => swiperRef.current?.slidePrev()}
                sx={{
                  width: 60,
                  height: 60,
                  bgcolor: "#374151",
                  color: "#fff",
                  borderRadius: "50%",
                  "&:hover": { bgcolor: "#1f2937" },
                }}
              >
                <ArrowBackIosNewIcon />
              </IconButton>
              <IconButton
                onClick={() => swiperRef.current?.slideNext()}
                sx={{
                  width: 60,
                  height: 60,
                  bgcolor: "#374151",
                  color: "#fff",
                  borderRadius: "50%",
                  "&:hover": { bgcolor: "#1f2937" },
                }}
              >
                <ArrowForwardIosIcon />
              </IconButton>
            </Box>

            <Box sx={{ order: { xs: 2, md: 1 } }}>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 600,
                  fontFamily: "Work Sans, sans-serif",
                  color: "#030304",
                }}
              >
                {roomDetails[activeTab].name}
              </Typography>
              <Typography
                variant="body1"
                sx={{ fontFamily: "Work Sans, sans-serif" }}
                color="text.secondary"
              >
                {roomDetails[activeTab].floor}
              </Typography>
            </Box>
          </Box>

          <Box sx={{ mt: 4, borderBottom: "1px solid #E5E5E5" }} />
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

export default Rooms;
