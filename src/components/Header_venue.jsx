import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination } from "swiper/modules";
import "swiper/css/pagination";
import {
  GlobalStyles,
  CssBaseline,
  Container,
  Box,
  Typography,
  IconButton,
  Dialog,
  DialogContent,
  Fade,
} from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

import AOGEOIcon from "../assets/images/icon_AOGEO.png";
import Img1 from "../assets/images/venue/bkkhi-ale-house-01.avif";
import Img2 from "../assets/images/venue/bkkhi-lifetyle03.avif";
import Img3 from "../assets/images/venue/bkkhitw-exterior-sunset.avif";
import Img4 from "../assets/images/venue/bkkhitw-family-suite-living-04.avif";
import Img5 from "../assets/images/venue/bkkhitw-king-premium-room-03.avif";
import Img6 from "../assets/images/venue/bkkhitw-panoramic-executive-suite-living-room.avif";
import Img7 from "../assets/images/venue/bkkhitw-shuttle-boat-hotel-exterior.avif";

const images = [Img1, Img2, Img3, Img4, Img5, Img6, Img7];

function Header_venue() {
  const swiperRef = useRef(null);
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

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
          {/* Title and logo */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
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
                Venue
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
                fontFamily: "Work Sans, sans-serif",
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

          {/* <Box sx={{ mt: 2, borderBottom: "1px solid #E5E5E5" }} /> */}

          {/* Swiper */}
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
                  width: "6px",
                  height: "6px",
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
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              loop
              centeredSlides
              slidesPerView="auto"
              spaceBetween={20}
              modules={[Pagination]}
              pagination={{ clickable: true }}
              style={{ overflow: "visible", paddingBottom: "0px" }}
            >
              {images.map((src, index) => (
                <SwiperSlide key={index} style={{ width: "100%" }}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      cursor: "pointer",
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

          {/* Controls + Details */}
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
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                gap: 1,
                order: 2,
              }}
            >
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
                Millennium Hilton Bangkok
              </Typography>
              <Typography
                variant="body1"
                sx={{ fontFamily: "Work Sans, sans-serif" }}
                color="text.secondary"
              >
                123 Charoennakorn Road, Klongsan, Bangkok, 10600, Thailand
              </Typography>
            </Box>
          </Box>

          <Box sx={{ mt: 4, borderBottom: "1px solid #E5E5E5" }} />
        </Box>
      </Container>

      {/* Fullscreen Image Dialog */}
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

export default Header_venue;
