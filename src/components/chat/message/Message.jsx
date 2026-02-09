import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";
import HistoryIcon from "@mui/icons-material/History";
import Paper from "@mui/material/Paper";

export default function Message() {
  return (
    <ListItem
      component={Paper}
      elevation={0}
      alignItems="flex-start"
      sx={{
        width: "100%",
        p: 2,
        backgroundColor: "background.paper",
        borderRadius: 1.5,
        border: "1px solid",
        borderColor: "divider",

        boxShadow: "0 10px 26px rgba(0, 15, 8, 0.12)",
        flexDirection: "column",
      }}
    >
      {/* Top bar */}
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 1,
        }}
      >
        <Typography
          variant="caption"
          sx={{
            fontSize: "0.75rem",
            color: "text.secondary",
          }}
        >
          25 април 2025
        </Typography>

        <IconButton
          size="small"
          sx={{
            color: "text.secondary",
            "&:hover": {
              backgroundColor: "action.hover",
              color: "primary.main",
            },
          }}
        >
          <HistoryIcon fontSize="small" />
        </IconButton>
      </Box>

      {/* Content */}
      <Box sx={{ display: "flex", width: "100%" }}>
        <ListItemAvatar>
          <Avatar
            sx={{
              bgcolor: "primary.main",
              color: "primary.contrastText",
              width: 40,
              height: 40,
              fontSize: "0.85rem",
            }}
          >
            AC
          </Avatar>
        </ListItemAvatar>

        <Box sx={{ flex: 1, pl: 2 }}>
          {/* Username */}
          <Typography
            variant="subtitle2"
            sx={{
              fontWeight: 600,
              color: "text.primary",
            }}
          >
            Ali Connors
          </Typography>

          {/* Message text */}
          <Typography
            variant="body2"
            sx={{
              mt: 0.5,
              color: "text.primary",
              lineHeight: 1.6,
            }}
          >
            Why is the sky blue, and does it change based on location or time of
            day? I’ve always wondered how the atmosphere works when traveling to
            different regions.
          </Typography>

          {/* Likes */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
              mt: 2.5,
              gap: 0.5,
            }}
          >
            <IconButton
              size="small"
              sx={{
                color: "text.secondary",
                "&:hover": {
                  color: "primary.main",
                  backgroundColor: "action.hover",
                },
              }}
            >
              <ThumbUpAltOutlinedIcon fontSize="small" />
            </IconButton>

            <Typography
              variant="body2"
              sx={{
                color: "text.secondary",
                fontSize: "0.85rem",
              }}
            >
              12
            </Typography>
          </Box>
        </Box>
      </Box>
    </ListItem>
  );
}
