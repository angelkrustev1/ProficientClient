import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import HistoryIcon from "@mui/icons-material/History";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import Paper from "@mui/material/Paper";
import Tooltip from "@mui/material/Tooltip";

function formatDate(dateString) {
  try {
    return new Intl.DateTimeFormat(undefined, {
      dateStyle: "medium",
      timeStyle: "short",
    }).format(new Date(dateString));
  } catch {
    return dateString;
  }
}

function getInitials(email) {
  if (!email) {
    return "?";
  }

  const namePart = email.split("@")[0];

  return namePart.slice(0, 2).toUpperCase();
}

export default function Message({
  message,
  isMine,
  onDelete,
  onToggleLike,
}) {
  return (
    <ListItem
      component={Paper}
      elevation={0}
      alignItems="flex-start"
      sx={{
        width: "100%",
        p: { xs: 1.5, sm: 2 },
        backgroundColor: "background.paper",
        borderRadius: 1.5,
        border: "1px solid",
        borderColor: "divider",
        boxShadow: "0 10px 26px rgba(0, 15, 8, 0.12)",
        flexDirection: "column",
      }}
    >
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
          {formatDate(message.created_at)}
        </Typography>

        {isMine ? (
          <Tooltip title="Delete message">
            <IconButton
              size="small"
              onClick={onDelete}
              sx={{
                color: "text.secondary",
                "&:hover": {
                  backgroundColor: "action.hover",
                  color: "error.main",
                },
              }}
            >
              <DeleteOutlineIcon fontSize="small" />
            </IconButton>
          </Tooltip>
        ) : (
          <Tooltip title="Message info">
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
          </Tooltip>
        )}
      </Box>

      <Box
        sx={{
          display: "flex",
          width: "100%",
          alignItems: "flex-start",
        }}
      >
        <ListItemAvatar
          sx={{
            minWidth: { xs: 44, sm: 48 },
          }}
        >
          <Avatar
            sx={{
              bgcolor: "primary.main",
              color: "primary.contrastText",
              width: { xs: 36, sm: 40 },
              height: { xs: 36, sm: 40 },
              fontSize: "0.85rem",
              fontWeight: 600,
            }}
          >
            {getInitials(message.author_email)}
          </Avatar>
        </ListItemAvatar>

        <Box
          sx={{
            flex: 1,
            pl: { xs: 1.5, sm: 2 },
            minWidth: 0,
          }}
        >
          <Typography
            variant="subtitle2"
            sx={{
              fontWeight: 600,
              color: "text.primary",
              fontSize: { xs: "0.9rem", sm: "0.95rem" },
            }}
          >
            {message.author_email}
          </Typography>

          <Typography
            variant="body2"
            sx={{
              mt: 0.5,
              color: "text.primary",
              lineHeight: 1.6,
              fontSize: { xs: "0.88rem", sm: "0.9rem" },
              wordBreak: "break-word",
              whiteSpace: "pre-wrap",
            }}
          >
            {message.content}
          </Typography>

          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
              mt: { xs: 2, sm: 2.5 },
              gap: 0.5,
            }}
          >
            <IconButton
              size="small"
              onClick={onToggleLike}
              sx={{
                color: message.liked_by_me ? "primary.main" : "text.secondary",
                "&:hover": {
                  color: "primary.main",
                  backgroundColor: "action.hover",
                },
              }}
            >
              {message.liked_by_me ? (
                <ThumbUpAltIcon fontSize="small" />
              ) : (
                <ThumbUpAltOutlinedIcon fontSize="small" />
              )}
            </IconButton>

            <Typography
              variant="body2"
              sx={{
                color: "text.secondary",
                fontSize: "0.85rem",
              }}
            >
              {message.likes_count}
            </Typography>
          </Box>
        </Box>
      </Box>
    </ListItem>
  );
}