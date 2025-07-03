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
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";

import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";

// ✅ รูปทั้งหมด
import AOGEOIcon from "../assets/images/icon_AOGEO.png";
import Img1 from "../assets/images/venue/7.jpg";
import Img2 from "../assets/images/venue/8.jpg";
import Img3 from "../assets/images/venue/15.jpg";

import Img4 from "../assets/images/venue/bkkhitw-exterior-sunset.avif";
import Img5 from "../assets/images/venue/bkkhitw-family-suite-living-04.avif";
import Img6 from "../assets/images/venue/bkkhitw-king-premium-room-03.avif";
import Img7 from "../assets/images/venue/bkkhitw-panoramic-executive-suite-living-room.avif";

import Img8 from "../assets/images/venue/5.jpg";
import Img9 from "../assets/images/venue/6.jpg";
import Img10 from "../assets/images/venue/1.jpg";
import Img11 from "../assets/images/venue/2.jpg";

// ✅ โครงสร้างภาพใหม่
const images = {
  ballroom: [Img1, Img2, Img3],
  breakout: [Img4, Img5, Img3],
  secretariat: [Img6],
  reception: [Img8, Img9, Img10, Img11],
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
    ballroom: { name: "Grand Ballroom and Foyer", floor: "Level 2" },
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
      <GlobalStyles
        styles={{
          ".swiper": {
            scrollbarWidth: "none",
            "&::-webkit-scrollbar": {
              display: "none",
            },
          },
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

      <Container maxWidth="lg" sx={{ overflow: "visible" }}>
        <Box sx={{ mt: { xs: "1rem", sm: "1rem" } }}>
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

          <Box sx={{ mt: 0, width: { xs: "100%", md: 350 } }}>
            <FormControl fullWidth>
              <Select
                value={activeTab}
                onChange={(e) => setActiveTab(e.target.value)}
                displayEmpty
                IconComponent={KeyboardArrowDownRoundedIcon}
                sx={{
                  fontSize: { xs: "16px", sm: "16px" },
                  borderRadius: "25px",
                  border: "1px solid #030304",
                  fontFamily: "Work Sans, sans-serif",
                  fontWeight: 600,
                  background: "white",
                  cursor: "pointer",
                  color: "#030304",
                  transition: "all 0.3s ease-in-out",
                  minHeight: "42px",
                  "& .MuiSelect-icon": {
                    color: "#030304",
                  },
                  "& .MuiOutlinedInput-notchedOutline": {
                    border: "none",
                  },
                }}
                inputProps={{
                  sx: {
                    py: "4px",
                  },
                }}
                MenuProps={{
                  PaperProps: {
                    sx: {
                      borderRadius: "16px",
                      border: "1px solid #030304",
                      mt: 1, // ระยะห่างจาก input
                      boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.08)",
                    },
                  },
                }}
              >
                {tabs.map((tab) => (
                  <MenuItem
                    key={tab.id}
                    value={tab.id}
                    sx={{
                      fontFamily: "Work Sans, sans-serif",
                      fontWeight: 500,
                      fontSize: "14px",
                      "&.Mui-selected": {
                        backgroundColor: "#F3E8FF", // ม่วงอ่อน
                      },
                      "&.Mui-selected:hover": {
                        backgroundColor: "#E9D5FF", // ม่วง hover อ่อนกว่า
                      },
                    }}
                  >
                    {tab.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>

          {/* Swiper Gallery */}
          <Box sx={{ mt: 2, position: "relative" }}>
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
                          aspectRatio: "4 / 3",
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

          <Box sx={{ mt: 4, borderBottom: "1px solidrgb(255, 255, 255)" }} />
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
