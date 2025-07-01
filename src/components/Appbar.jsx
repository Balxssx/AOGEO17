import * as React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Container,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Slide,
  useScrollTrigger,
  GlobalStyles,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, useLocation } from "react-router-dom";
import GEOLogo from "../assets/images/GEO_logo.png";
import AOGEOLogo from "../assets/images/AOGEO_logo.png";
import AOGEOIcon from "../assets/images/icon_AOGEO.png";

const pages = [
  { name: "Home", path: "/" },
  { name: "Agenda", path: "/agenda" },
  { name: "Exhibition", path: "/exhibition" },
  { name: "Venue", path: "/venue" },
  { name: "Access", path: "/access" },
  { name: "Travel", path: "/travel" },
];

function HideOnScroll({ children }) {
  const trigger = useScrollTrigger();
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

function ResponsiveAppBar() {
  const location = useLocation();
  const currentPath = location.pathname;
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const trigger = useScrollTrigger();

  return (
    <>
      <GlobalStyles
        styles={`
          .menu-link {
            text-decoration: none;
            position: relative;
            transition: color 0.5s ease;
          }

          .menu-link::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 2px;
            background: linear-gradient(90deg, transparent, #3C066D, transparent);
            background-size: 300% 100%;
            opacity: 0;
            transition: opacity 0.5s;
          }

          .menu-link:hover {
            color: #3C066D;
          }

          .menu-link:hover::after {
            opacity: 1;
            animation: shimmer111 2s linear infinite !important;
          }

          @keyframes shimmer111 {
            0% { background-position: 200% 0; }
            100% { background-position: -200% 0; }
          }
        `}
      />

      {/* Top Bar */}
      <HideOnScroll>
        <Box
          sx={{
            height: "50px",
            backgroundColor: "#fafafa",
            display: "flex",
            alignItems: "center",
            px: 2,
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            zIndex: (theme) => theme.zIndex.appBar + 1,
          }}
        >
          <Container
            maxWidth="lg"
            sx={{ display: "flex", alignItems: "center" }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <a
                href="https://earthobservations.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Box
                  component="img"
                  src={GEOLogo}
                  alt="GEO Logo"
                  sx={{
                    height: { xs: 16, sm: 20, md: 25 },
                    width: "auto",
                  }}
                />
              </a>
              <a
                href="https://aogeo.net/en/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Box
                  component="img"
                  src={AOGEOLogo}
                  alt="AOGEO Logo"
                  sx={{
                    height: { xs: 16, sm: 20, md: 25 },
                    width: "auto",
                  }}
                />
              </a>
            </Box>
          </Container>
        </Box>
      </HideOnScroll>

      {/* App Bar */}
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          backgroundColor: "#ffffff",
          borderBottom: "1px solid #E5E5E5",
          boxShadow: "none",
          zIndex: (theme) => theme.zIndex.appBar,
        }}
      >
        <Container maxWidth="lg">
          <Toolbar
            disableGutters
            sx={{ mt: trigger ? "0px" : "50px", transition: "margin-top 0.3s" }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                flexGrow: 1,
              }}
            >
              <img
                src={AOGEOIcon}
                alt="AOGEO icon"
                style={{ width: "35px", height: "35px" }}
              />
              <Typography
                noWrap
                component={Link}
                to="/"
                sx={{
                  fontFamily: "Work Sans",
                  fontSize: { xs: "16px", md: "18px" },
                  fontWeight: 500,
                  color: "#3C066D",
                  textDecoration: "none",
                }}
              >
                17th AOGEO Symposium
              </Typography>
            </Box>

            {/* Mobile */}
            <Box sx={{ display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                onClick={() => setDrawerOpen(true)}
                color="#030304"
              >
                <MenuIcon />
              </IconButton>
              <Drawer
                anchor="right"
                open={drawerOpen}
                onClose={() => setDrawerOpen(false)}
              >
                <Box sx={{ width: 250 }}>
                  <List>
                    {pages.map(({ name, path }) => (
                      <ListItem
                        button
                        key={name}
                        component={Link}
                        to={path}
                        onClick={() => setDrawerOpen(false)}
                      >
                        <ListItemText
                          primary={name}
                          primaryTypographyProps={{
                            fontFamily: "Work Sans",
                            fontSize: "18px",
                            fontWeight: currentPath === path ? 600 : 400,
                            color: currentPath === path ? "#3C066D" : "#030304",
                          }}
                        />
                      </ListItem>
                    ))}
                  </List>
                </Box>
              </Drawer>
            </Box>

            {/* Desktop */}
            <Box sx={{ display: { xs: "none", md: "flex" }, ml: "auto" }}>
              {pages.map(({ name, path }) => (
                <Box key={name} sx={{ mx: "25px" }}>
                  <Link
                    to={path}
                    className="menu-link"
                    style={{
                      fontFamily: "Work Sans",
                      fontSize: "18px",
                      fontWeight: currentPath === path ? 600 : 400,
                      color: currentPath === path ? "#3C066D" : "#030304",
                      textDecoration: "none",
                      lineHeight: "1.5",
                    }}
                  >
                    {name}
                  </Link>
                </Box>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {/* เผื่อช่องว่าง TopBar + AppBar */}
      <Box sx={{ mt: "114px" }} />
    </>
  );
}

export default ResponsiveAppBar;
