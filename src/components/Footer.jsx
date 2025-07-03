import React from "react";
import { Box, Typography, Divider, Container, Stack } from "@mui/material";
import AOGEOIcon from "../assets/images/icon_AOGEO.png";

function Footer() {
  return (
    <Box
      sx={{
        background:
          "linear-gradient(63deg,rgb(80, 49, 133) -14.73%,rgb(195, 162, 250) 92.2%)",
        color: "#ffffff", // สีตัวหนังสือ
        fontFamily: "'Work Sans', sans-serif",
        pt: 4,
        pb: 2,
        minHeight: 200, // ปรับความสูงของ footer
      }}
    >
      <Container maxWidth="lg">
        <Stack direction="row" spacing={3} alignItems="flex-start">
          {/* Logo + Text block */}
          <Stack spacing={1}>
            {/* โลโก้ + Secretariat แนวนอน */}
            <Stack direction="row" spacing={1} alignItems="center">
              <Box
                component="img"
                src={AOGEOIcon}
                alt="logo"
                sx={{ width: 35, height: 35 }}
              />
              <Typography
                sx={{
                  fontSize: "18px",
                  fontWeight: 600,
                  color: "#ffffff",
                  fontFamily: "Work Sans",
                }}
              >
                Secretariat
              </Typography>
            </Stack>

            {/* ข้อความหลักด้านล่าง Secretariat */}
            <Box>
              <Typography
                variant="body2"
                sx={{
                  color: "#ffffff",
                  fontFamily: "Work Sans",
                }}
              >
                The 17th AOGEO Symposium Secretariat
                <br />
                Geo-Informatics and Space Technology Development Agency (Public
                Organization)
              </Typography>
              <Box
                component="a"
                href="mailto:aogeo17@gistda.or.th"
                sx={{
                  textDecoration: "none",
                }}
              >
                <Typography
                  variant="body2"
                  mt={2}
                  sx={{
                    color: "#ffffff",
                    fontFamily: "Work Sans",
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                  }}
                >
                  aogeo17@gistda.or.th
                </Typography>
              </Box>
            </Box>
          </Stack>
        </Stack>

        <Divider sx={{ my: 3, borderColor: "rgba(255, 255, 255, 0.3)" }} />

        <Typography
          variant="body2"
          align="center"
          sx={{
            color: "#ffffff",
            pb: 1,
            fontFamily: "Work Sans",
          }}
        >
          Copyright ©2025 17th AOGEO. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
}

export default Footer;
