import { Box, Typography } from "@mui/material";

export default function Reading() {
  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: 900,
        mx: "auto",

        border: "1px solid",
        borderColor: "divider",
        backgroundColor: "background.paper",

        boxShadow: "0 10px 24px rgba(0, 15, 8, 0.14)",
        p: 3,
      }}
    >
      {/* Header */}
      <Box
        sx={{
          border: "1px solid",
          borderColor: "primary.main",
          backgroundColor: "base.light",
          px: 2.5,
          py: 2,
          mb: 2,
        }}
      >
        <Typography
          sx={{
            fontSize: "1.05rem",
            fontWeight: 700,
            letterSpacing: "0.2px",
            color: "text.primary",
          }}
        >
          Reading
        </Typography>

        <Typography
          sx={{
            mt: 0.75,
            fontSize: "0.9rem",
            color: "text.secondary",
          }}
        >
          Read the text carefully. Scroll only if the passage is long.
        </Typography>
      </Box>

      {/* Scrollable text area — auto height until max */}
      <Box
        sx={{
          border: "1px solid",
          borderColor: "primary.main",
          backgroundColor: "background.paper",

          /* ✅ THIS is the correct combo */
          maxHeight: 420,        // cap growth
          overflowY: "auto",     // scroll ONLY after cap is reached

          px: 2.5,
          py: 2,

          scrollbarWidth: "thin",
          scrollbarColor: "rgba(28, 55, 56, 0.35) transparent",

          "&::-webkit-scrollbar": {
            width: 10,
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "rgba(28, 55, 56, 0.35)",
            borderRadius: 10,
            border: "3px solid transparent",
            backgroundClip: "content-box",
          },
          "&::-webkit-scrollbar-thumb:hover": {
            backgroundColor: "rgba(28, 55, 56, 0.55)",
          },
        }}
      >
        <Typography
          sx={{
            fontSize: "0.98rem",
            lineHeight: 1.85,
            color: "text.primary",
            whiteSpace: "pre-wrap",
          }}
        >
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia aperiam officiis iste excepturi quibusdam nesciunt voluptatem quia impedit cumque rem, quis minima qui libero numquam. Tempore quibusdam cum nostrum assumenda!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit provident hic ut eveniet praesentium doloremque et laborum repellendus autem? Necessitatibus sunt natus esse, obcaecati amet accusantium praesentium eos excepturi facere.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi doloribus, soluta aliquid laboriosam aliquam mollitia quasi eius numquam dolorem asperiores explicabo illo laborum dolores minus quaerat recusandae voluptatem commodi reprehenderit?
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam magni asperiores error suscipit et autem repudiandae fugiat, culpa voluptatum doloremque iusto eius, consectetur impedit saepe minima neque non ipsam cum.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At optio vel rerum voluptatum dignissimos exercitationem, impedit natus, cumque, officia voluptas dolores! Vel delectus recusandae natus iusto minima nam labore. Delectus.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi maxime voluptates aliquid et dolorem porro ea voluptatum, natus necessitatibus eveniet! Eos inventore aut aperiam necessitatibus non laborum excepturi at! Mollitia.
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa architecto deleniti excepturi nostrum quasi nesciunt aperiam natus? Reiciendis, optio ab quo eum voluptatem aspernatur voluptatibus, animi magni quaerat id saepe!
        </Typography>
      </Box>
    </Box>
  );
}
