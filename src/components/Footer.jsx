import React from "react";
import { Box, Typography, Divider, Container, Stack } from "@mui/material";
import AOGEOIcon from "../assets/images/icon_AOGEO.png";

function Footer() {
  return (
    <Box
      sx={{
        bgcolor: "#fff",
        color: "#000",
        fontFamily: "'Work Sans', sans-serif",
        pt: 2,
      }}
    >
      <Container maxWidth="xl">
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
                  color: "#030304",
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
                color="text.secondary"
                sx={{ fontFamily: "Work Sans" }}
              >
                The 17th AOGEO Symposium Secretariat
                <br />
                Geo-Informatics and Space Technology Development Agency (Public
                Organization)
              </Typography>
              <Typography
                variant="body2"
                mt={2}
                color="text.secondary"
                sx={{ fontFamily: "Work Sans" }}
              >
                aogeo17@gistda.or.th
              </Typography>
            </Box>
          </Stack>
        </Stack>

        <Divider sx={{ my: 2, borderColor: "#E5E5E5" }} />

        <Typography
          variant="body2"
          align="center"
          sx={{
            color: "text.secondary",
            pb: 2,
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
