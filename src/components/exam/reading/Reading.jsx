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
        p: { xs: 1.5, sm: 2.5, md: 3 },
      }}
    >
      <Box
        sx={{
          border: "1px solid",
          borderColor: "primary.main",
          backgroundColor: "base.light",
          px: { xs: 1.5, sm: 2, md: 2.5 },
          py: { xs: 1.5, sm: 1.75, md: 2 },
          mb: { xs: 1.5, sm: 2 },
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: "0.98rem", sm: "1.02rem", md: "1.05rem" },
            fontWeight: 700,
            letterSpacing: "0.2px",
            color: "text.primary",
            lineHeight: 1.3,
          }}
        >
          Reading
        </Typography>

        <Typography
          sx={{
            mt: 0.75,
            fontSize: { xs: "0.82rem", sm: "0.87rem", md: "0.9rem" },
            color: "text.secondary",
            lineHeight: 1.5,
          }}
        >
          Read the text carefully. Scroll only if the passage is long.
        </Typography>
      </Box>

      <Box
        sx={{
          border: "1px solid",
          borderColor: "primary.main",
          backgroundColor: "background.paper",
          maxHeight: { xs: 320, sm: 380, md: 420 },
          overflowY: "auto",
          px: { xs: 1.5, sm: 2, md: 2.5 },
          py: { xs: 1.5, sm: 1.75, md: 2 },
          scrollbarWidth: "thin",
          scrollbarColor: "rgba(28, 55, 56, 0.35) transparent",

          "&::-webkit-scrollbar": {
            width: 8,
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "rgba(28, 55, 56, 0.35)",
            borderRadius: 10,
            border: "2px solid transparent",
            backgroundClip: "content-box",
          },
          "&::-webkit-scrollbar-thumb:hover": {
            backgroundColor: "rgba(28, 55, 56, 0.55)",
          },
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: "0.92rem", sm: "0.96rem", md: "0.98rem" },
            lineHeight: { xs: 1.75, sm: 1.8, md: 1.85 },
            color: "text.primary",
            whiteSpace: "pre-wrap",
            wordBreak: "break-word",
          }}
        >
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia
          aperiam officiis iste excepturi quibusdam nesciunt voluptatem quia
          impedit cumque rem, quis minima qui libero numquam. Tempore quibusdam
          cum nostrum assumenda! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Sit provident hic ut eveniet praesentium doloremque
          et laborum repellendus autem? Necessitatibus sunt natus esse,
          obcaecati amet accusantium praesentium eos excepturi facere. Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Eligendi doloribus,
          soluta aliquid laboriosam aliquam mollitia quasi eius numquam dolorem
          asperiores explicabo illo laborum dolores minus quaerat recusandae
          voluptatem commodi reprehenderit? Lorem ipsum dolor sit amet
          consectetur, adipisicing elit. Quisquam magni asperiores error
          suscipit et autem repudiandae fugiat, culpa voluptatum doloremque
          iusto eius, consectetur impedit saepe minima neque non ipsam cum.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. At optio vel
          rerum voluptatum dignissimos exercitationem, impedit natus, cumque,
          officia voluptas dolores! Vel delectus recusandae natus iusto minima
          nam labore. Delectus. Lorem, ipsum dolor sit amet consectetur
          adipisicing elit. Commodi maxime voluptates aliquid et dolorem porro
          ea voluptatum, natus necessitatibus eveniet! Eos inventore aut aperiam
          necessitatibus non laborum excepturi at! Mollitia. Lorem ipsum dolor
          sit amet consectetur, adipisicing elit. Ipsa architecto deleniti
          excepturi nostrum quasi nesciunt aperiam natus? Reiciendis, optio ab
          quo eum voluptatem aspernatur voluptatibus, animi magni quaerat id
          saepe!
        </Typography>
      </Box>
    </Box>
  );
}