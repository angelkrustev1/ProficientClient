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
  let language = useLanguage();

  return (
    <Backdrop
      open={open}
      onClick={onClose}
      sx={{
        zIndex: "modal",
        bgcolor: "rgba(0, 0, 0, 0.6)",
      }}
    >
      <Box
        onClick={(e) => e.stopPropagation()}
        sx={{
          width: "100%",
          maxWidth: 420,
        }}
      >
        <Paper
          elevation={12}
          sx={{
            position: "relative",
            p: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 2,
            bgcolor: "background.paper",
            color: "text.primary",
            borderRadius: 1.6,
          }}
        >
          {/* CLOSE */}
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
            <CloseIcon />
          </IconButton>

          {/* ICON */}
          <Avatar
            sx={{
              bgcolor: "action.selected",
              color: "primary.main",
            }}
          >
            <AssignmentIcon />
          </Avatar>

          {/* TITLE */}
          <Typography
            variant="h5"
            sx={{
              fontWeight: 600,
              letterSpacing: "0.3px",
            }}
          >
            {language.createMaterial}
          </Typography>

          {/* FORM */}
          <Box
            component="form"
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              gap: 2,
              mt: 1,
            }}
          >
            {/* Title */}
            <TextField
              label={language.title}
              fullWidth
              required
            />

            {/* Description */}
            <TextField
              label={language.description}
              fullWidth
              required
              multiline
              minRows={3}
            />

            {/* File upload (optional) */}
            <Button
              variant="outlined"
              startIcon={<AttachFileIcon />}
              sx={{
                justifyContent: "flex-start",
                textTransform: "none",
                fontWeight: 500,
                color: "text.secondary",
              }}
            >
              {language.addFiles}
            </Button>

            {/* Submit */}
            <Button
              type="submit"
              variant="contained"
              fullWidth
              sx={{
                mt: 1,
                textTransform: "none",
                fontWeight: 600,
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
