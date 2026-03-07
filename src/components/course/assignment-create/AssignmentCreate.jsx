import {
  Avatar,
  Box,
  Button,
  IconButton,
  Paper,
  TextField,
  Typography,
  Backdrop,
} from "@mui/material";
import AssignmentIcon from "@mui/icons-material/Assignment";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import CloseIcon from "@mui/icons-material/Close";
import useLanguage from "../../../hooks/useLanguage";

export default function AssignmentCreate({ open, onClose }) {
  const language = useLanguage();

  return (
    <Backdrop
      open={open}
      onClick={onClose}
      sx={{
        zIndex: "modal",
        bgcolor: "rgba(0, 0, 0, 0.6)",
        px: { xs: 1.5, sm: 2 },
        py: { xs: 2, sm: 3 },
      }}
    >
      <Box
        onClick={(e) => e.stopPropagation()}
        sx={{
          width: "100%",
          maxWidth: 420,
          maxHeight: "100%",
          display: "flex",
        }}
      >
        <Paper
          elevation={12}
          sx={{
            position: "relative",
            width: "100%",
            p: { xs: 2, sm: 3, md: 4 },
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: { xs: 1.5, sm: 2 },
            bgcolor: "background.paper",
            color: "text.primary",
            borderRadius: { xs: 1.2, sm: 1.6 },
            overflowY: "auto",
            boxShadow: "0 18px 40px rgba(0, 0, 0, 0.22)",
          }}
        >
          <IconButton
            size="small"
            onClick={onClose}
            sx={{
              position: "absolute",
              top: 8,
              right: 8,
              color: "text.secondary",
              "&:hover": {
                bgcolor: "action.hover",
              },
            }}
          >
            <CloseIcon fontSize="small" />
          </IconButton>

          <Avatar
            sx={{
              width: { xs: 42, sm: 48 },
              height: { xs: 42, sm: 48 },
              bgcolor: "action.selected",
              color: "primary.main",
            }}
          >
            <AssignmentIcon sx={{ fontSize: { xs: 22, sm: 24 } }} />
          </Avatar>

          <Typography
            variant="h5"
            sx={{
              fontWeight: 600,
              letterSpacing: "0.3px",
              fontSize: { xs: "1.15rem", sm: "1.35rem", md: "1.5rem" },
              textAlign: "center",
              lineHeight: 1.3,
              px: 2,
            }}
          >
            {language.createMaterial}
          </Typography>

          <Box
            component="form"
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              gap: { xs: 1.5, sm: 2 },
              mt: 0.5,
            }}
          >
            <TextField
              label={language.title}
              fullWidth
              required
              size="small"
            />

            <TextField
              label={language.description}
              fullWidth
              required
              multiline
              minRows={3}
            />

            <Button
              variant="outlined"
              startIcon={<AttachFileIcon />}
              sx={{
                justifyContent: "flex-start",
                textTransform: "none",
                fontWeight: 500,
                color: "text.secondary",
                borderColor: "divider",
                py: 1.15,
                px: 1.5,
                borderRadius: 1.1,
                "&:hover": {
                  borderColor: "primary.main",
                  backgroundColor: "action.hover",
                },
              }}
            >
              {language.addFiles}
            </Button>

            <Button
              type="submit"
              variant="contained"
              fullWidth
              sx={{
                mt: 0.5,
                textTransform: "none",
                fontWeight: 600,
                py: 1.2,
                borderRadius: 1.1,
                boxShadow: "0 8px 22px rgba(28, 55, 56, 0.35)",
                "&:hover": {
                  boxShadow: "0 10px 28px rgba(28, 55, 56, 0.42)",
                },
              }}
            >
              {language.create}
            </Button>
          </Box>
        </Paper>
      </Box>
    </Backdrop>
  );
}