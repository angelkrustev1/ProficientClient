import { Box, IconButton } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useRef } from "react";
import ExamCard from "../exam-card/ExamCard";

export default function ActionCardCarousel() {
  const containerRef = useRef(null);

  const CARD_WIDTH = 315;
  const GAP = 24;
  const VISIBLE_CARDS = 3.7;

  const maxWidth = CARD_WIDTH * VISIBLE_CARDS + GAP * (VISIBLE_CARDS - 1);

  const scrollStep = CARD_WIDTH + GAP;

  const scroll = (direction) => {
    const el = containerRef.current;
    if (!el) return;

    el.scrollBy({
      left: direction === "left" ? -scrollStep : scrollStep,
      behavior: "smooth",
    });
  };

  const handleWheel = (e) => {
    const el = containerRef.current;
    if (!el) return;

    const atStart = el.scrollLeft === 0;
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
        maxWidth,
        mx: "auto",
        px: 1,
        backgroundColor: "transparent",
      }}
    >
      {/* LEFT ARROW */}
      <IconButton
        onClick={() => scroll("left")}
        sx={{
          position: "absolute",
          left: -20,
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 4,

          backgroundColor: "background.paper",
          backdropFilter: "blur(6px)",
          boxShadow: "0px 4px 12px rgba(0,0,0,0.14)",

          "&:hover": {
            backgroundColor: "action.hover",
          },
        }}
      >
        <ArrowBackIosNewIcon fontSize="small" />
      </IconButton>

      {/* RIGHT ARROW */}
      <IconButton
        onClick={() => scroll("right")}
        sx={{
          position: "absolute",
          right: -20,
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 4,

          backgroundColor: "background.paper",
          backdropFilter: "blur(6px)",
          boxShadow: "0px 4px 12px rgba(0,0,0,0.14)",

          "&:hover": {
            backgroundColor: "action.hover",
          },
        }}
      >
        <ArrowForwardIosIcon fontSize="small" />
      </IconButton>

      {/* SCROLL CONTAINER */}
      <Box
        ref={containerRef}
        onWheel={handleWheel}
        sx={{
          display: "flex",
          gap: `${GAP}px`,
          overflowX: "auto",
          overflowY: "hidden",

          px: 3, // more inner breathing room
          py: 2,

          scrollBehavior: "smooth",
          scrollSnapType: "x proximity",

          "& > *": {
            scrollSnapAlign: "start",
          },

          backgroundColor: "transparent",

          "&::-webkit-scrollbar": {
            display: "none",
          },
          scrollbarWidth: "none",
        }}
      >
        {Array.from({ length: 8 }).map((_, i) => (
          <Box key={i} sx={{ flex: "0 0 auto" }}>
            <ExamCard />
          </Box>
        ))}
      </Box>

      {/* LEFT FADE (ultra subtle) */}
      <Box
        sx={{
          pointerEvents: "none",
          position: "absolute",
          top: 0,
          left: 0,
          width: 32,
          height: "100%",
          background:
            "linear-gradient(to right, rgba(255,255,255,0.25), rgba(255,255,255,0))",
        }}
      />

      {/* RIGHT FADE (ultra subtle) */}
      <Box
        sx={{
          pointerEvents: "none",
          position: "absolute",
          top: 0,
          right: 0,
          width: 32,
          height: "100%",
          background:
            "linear-gradient(to left, rgba(255,255,255,0.25), rgba(255,255,255,0))",
        }}
      />
    </Box>
  );
}
