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
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import CancelIcon from "@mui/icons-material/Cancel";
import AlarmOnIcon from "@mui/icons-material/AlarmOn";
import BlockIcon from "@mui/icons-material/Block";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";

import AOGEOIcon from "../assets/images/icon_AOGEO.png";
import Img1 from "../assets/images/venue/3.jpg";
import Img2 from "../assets/images/venue/2.jpg";
import Img3 from "../assets/images/venue/1.jpg";
import Img4 from "../assets/images/venue/4.jpg";
import Img5 from "../assets/images/venue/5.jpg";
import Img6 from "../assets/images/venue/6.jpg";
import Img7 from "../assets/images/venue/7.jpg";
import Img8 from "../assets/images/venue/8.jpg";
import Img9 from "../assets/images/venue/9.jpg";
import Img10 from "../assets/images/venue/10.jpg";
import Img11 from "../assets/images/venue/11.jpg";
// import Img12 from "../assets/images/venue/12.jpg";
import Img13 from "../assets/images/venue/13.png";
import Img14 from "../assets/images/venue/14.jpg";

const images = [
  Img1,
  Img2,
  Img3,
  Img4,
  Img5,
  Img6,
  Img7,
  Img8,
  Img9,
  Img10,
  Img11,
  Img13,
  Img14,
];

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

  const terms = [
    {
      icon: <CheckCircleIcon sx={{ fontSize: 36, color: "#6D11D8" }} />,
      text: "20% Discount on Best Available Rate with breakfast at Deluxe Room type",
    },
    {
      icon: <CreditCardIcon sx={{ fontSize: 36, color: "#6D11D8" }} />,
      text: "50% Deposit payment is required upon booking, non-refundable",
    },
    {
      icon: <CreditCardIcon sx={{ fontSize: 36, color: "#6D11D8" }} />,
      text: "The outstanding balance will be charged upon departure to the provided credit card",
    },
    {
      icon: <CancelIcon sx={{ fontSize: 36, color: "#E53935" }} />,
      text: "50% cancellation fee is applied upon booking",
    },
    {
      icon: <AlarmOnIcon sx={{ fontSize: 36, color: "#F9A825" }} />,
      text: "100% cancellation fee 21 days prior to arrival",
    },
    {
      icon: <BlockIcon sx={{ fontSize: 36, color: "#D32F2F" }} />,
      text: "100% No-show charge",
    },
  ];

  return (
    <>
      <CssBaseline />
      <Container maxWidth="lg">
        <Box
          sx={{
            mt: {
              xs: "1rem",
              sm: "2rem",
            },
          }}
        >
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

            <Box sx={{ display: "flex", gap: 1 }}>
              <Box
                component="button"
                onClick={() =>
                  window.open(
                    "https://www.google.com/maps?q=Millennium+Hilton+Bangkok",
                    "_blank"
                  )
                }
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
          </Box>

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
                          aspectRatio: "4 / 3",
                        },
                      }}
                    />
                  </Box>
                </SwiperSlide>
              ))}
            </Swiper>
          </Box>

          <Box
            sx={{
              mt: 2,
              display: "flex",
              flexDirection: { xs: "column-reverse", md: "row" },
              alignItems: { xs: "flex-start", md: "center" },
              gap: 2,
            }}
          >
            {/* โรงแรม */}
            <Box
              sx={{
                width: "100%",
                textAlign: { xs: "center", md: "left" },
              }}
            >
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
                sx={{
                  fontFamily: "Work Sans, sans-serif",
                  fontSize: "16px",
                }}
                color="text.secondary"
              >
                123 Charoennakorn Road, Klongsan, Bangkok, 10600, Thailand
              </Typography>
            </Box>

            {/* ปุ่มควบคุม */}
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                gap: 1,
                ml: "auto",
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
          </Box>

          <Box sx={{ mt: 4, borderBottom: "1px solid #E5E5E5" }} />

          <Box
            sx={{
              mt: 4,
              px: 3,
              py: 3,
              backgroundColor: "#F3F6F9",
              borderRadius: "16px",
              border: "1px solid #E0E0E0",
            }}
          >
            <Typography
              variant="h6"
              sx={{
                fontWeight: 600,
                fontFamily: "Work Sans, sans-serif",
                fontSize: { xs: 18, md: 20 },
                color: "#030304",
                mb: 2,
                textAlign: "center",
              }}
            >
              Terms & Conditions
            </Typography>

            <Box
              component="ul"
              sx={{
                listStyle: "none",
                pl: 0,
                fontFamily: "Work Sans, sans-serif",
                color: "#4B5563",
                fontSize: 15,
                lineHeight: 1.8,
                display: "flex",
                flexDirection: "column",
                gap: 1,
              }}
            >
              {[
                "20% Discount on Best Available Rate with breakfast at Deluxe Room type",
                "50% Deposit payment is required upon booking, non-refundable",
                "The outstanding balance will be charged upon departure to the provided credit card",
                "50% cancellation fee is applied upon booking",
                "100% cancellation fee 21 days prior to arrival",
                "100% No-show charge",
              ].map((text, index) => (
                <Box
                  component="li"
                  key={index}
                  sx={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 1.2,
                  }}
                >
                  <Box
                    sx={{
                      mt: "6px",
                      width: 8,
                      height: 8,
                      backgroundColor: "#6D11D8",
                      borderRadius: "50%",
                      flexShrink: 0,
                    }}
                  />
                  <Typography component="span" sx={{ flex: 1 }}>
                    {text}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: { xs: "center", sm: "flex-start" },
              mt: 3,
            }}
          >
            <Box
              component="button"
              onClick={() =>
                window.open(
                  "https://www.hilton.com/en/hotels/bkkhitw-millennium-hilton-bangkok/?WT.mc_id=zPADA0TH1HI2PSH3paid_ggl4DOMBPP_Apr5SiteGGL_ObjROAS_TacBPP_TarKeyword_SMTH_FrmtRSAs_CrNText_DvceAll_LPOHW6BKKHITW7EN8acctid=700000002399000-campid=71700000093094233-adgrpid=58700007775465217&&&&&gad_source=1&gad_campaignid=16821069814&gbraid=0AAAAADnjLGO-83FiNtvbGS7I6albx9Ext&gclid=CjwKCAjwsZPDBhBWEiwADuO6y-H5zOCPQ8xRYIAq02kF40DDCjyLO99OMbZ52McQ6oIOHPTvpQyrfBoC3poQAvD_BwE&gclsrc=aw.ds",
                  "_blank"
                )
              }
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
              Booking now →
            </Box>
          </Box>

          <Box sx={{ mt: 4, borderBottom: "1px solid #E5E5E5" }} />
        </Box>
      </Container>

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
