import { Box, IconButton } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useRef } from "react";
import ExamCard from "../exam-card/ExamCard";

export default function ActionCardCarousel() {
  const containerRef = useRef(null);

  const scroll = (direction) => {
    const el = containerRef.current;
    if (!el) return;

    const step = el.clientWidth * 0.82;

    el.scrollBy({
      left: direction === "left" ? -step : step,
      behavior: "smooth",
    });
  };

  const handleWheel = (e) => {
    const el = containerRef.current;
    if (!el) return;

    const atStart = el.scrollLeft <= 0;
    const atEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 1;

    const shouldHijack =
      el.scrollWidth > el.clientWidth &&
      !((e.deltaY < 0 && atStart) || (e.deltaY > 0 && atEnd));

    if (shouldHijack) {
      e.preventDefault();
      el.scrollLeft += e.deltaY;
    }
  };

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        maxWidth: {
          xs: "100%",
          sm: 720,
          md: 980,
          lg: 1220,
        },
        mx: "auto",
        px: { xs: 0.5, sm: 1.5, md: 2 },
        backgroundColor: "transparent",
      }}
    >
      <IconButton
        onClick={() => scroll("left")}
        sx={{
          position: "absolute",
          left: { xs: 4, sm: -10, md: -16 },
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 4,
          width: { xs: 34, sm: 40 },
          height: { xs: 34, sm: 40 },
          backgroundColor: "background.paper",
          backdropFilter: "blur(6px)",
          boxShadow: "0px 4px 12px rgba(0,0,0,0.14)",
          "&:hover": {
            backgroundColor: "action.hover",
          },
        }}
      >
        <ArrowBackIosNewIcon sx={{ fontSize: { xs: 16, sm: 18 } }} />
      </IconButton>

      <IconButton
        onClick={() => scroll("right")}
        sx={{
          position: "absolute",
          right: { xs: 4, sm: -10, md: -16 },
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 4,
          width: { xs: 34, sm: 40 },
          height: { xs: 34, sm: 40 },
          backgroundColor: "background.paper",
          backdropFilter: "blur(6px)",
          boxShadow: "0px 4px 12px rgba(0,0,0,0.14)",
          "&:hover": {
            backgroundColor: "action.hover",
          },
        }}
      >
        <ArrowForwardIosIcon sx={{ fontSize: { xs: 16, sm: 18 } }} />
      </IconButton>

      <Box
        ref={containerRef}
        onWheel={handleWheel}
        sx={{
          display: "flex",
          gap: { xs: 1.5, sm: 2, md: 3 },
          overflowX: "auto",
          overflowY: "hidden",
          px: { xs: 1, sm: 2, md: 3 },
          py: { xs: 1.5, sm: 2 },
          scrollBehavior: "smooth",
          scrollSnapType: "x proximity",
          WebkitOverflowScrolling: "touch",

          "& > *": {
            scrollSnapAlign: "start",
            flex: "0 0 auto",
            width: {
              xs: "calc(100% - 24px)",
              sm: "calc(50% - 8px)",
              md: "315px",
            },
            maxWidth: {
              xs: "calc(100% - 24px)",
              sm: "calc(50% - 8px)",
              md: "315px",
            },
          },

          backgroundColor: "transparent",

          "&::-webkit-scrollbar": {
            display: "none",
          },
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        {Array.from({ length: 8 }).map((_, i) => (
          <Box key={i}>
            <ExamCard />
          </Box>
        ))}
      </Box>

      <Box
        sx={{
          pointerEvents: "none",
          position: "absolute",
          top: 0,
          left: 0,
          width: { xs: 18, sm: 24, md: 32 },
          height: "100%",
          background:
            "linear-gradient(to right, rgba(255,255,255,0.22), rgba(255,255,255,0))",
        }}
      />

      <Box
        sx={{
          pointerEvents: "none",
          position: "absolute",
          top: 0,
          right: 0,
          width: { xs: 18, sm: 24, md: 32 },
          height: "100%",
          background:
            "linear-gradient(to left, rgba(255,255,255,0.22), rgba(255,255,255,0))",
        }}
      />
    </Box>
  );
}
