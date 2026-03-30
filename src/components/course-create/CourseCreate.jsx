import { useState } from "react";
import {
  Alert,
  Avatar,
  Box,
  Button,
  IconButton,
  Paper,
  TextField,
  Typography,
  Backdrop,
} from "@mui/material";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import CloseIcon from "@mui/icons-material/Close";
import useLanguage from "../../hooks/useLanguage";

const initialValues = {
  title: "",
  description: "",
  creator_code: "",
  image: null,
};

export default function CourseCreate({ open, onClose, onCreate, loading }) {
  const language = useLanguage();
  const [values, setValues] = useState(initialValues);
  const [error, setError] = useState("");

  const changeHandler = (e) => {
    const { name, value } = e.target;

    setValues((state) => ({
      ...state,
      [name]: value,
    }));
  };

  const fileChangeHandler = (e) => {
    const file = e.target.files?.[0] || null;

    setValues((state) => ({
      ...state,
      image: file,
    }));
  };

  const resetForm = () => {
    setValues(initialValues);
    setError("");
  };

  const closeHandler = () => {
    resetForm();
    onClose();
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    setError("");

    const result = await onCreate(values);

    if (!result.success) {
      setError(result.error);
      return;
    }

    resetForm();
    onClose();
  };

  return (
    <Backdrop
      open={open}
      onClick={closeHandler}
      sx={{
        zIndex: "modal",
        bgcolor: "rgba(0, 0, 0, 0.6)",
        px: 2,
        py: 3,
      }}
    >
      <Box
        onClick={(e) => e.stopPropagation()}
        sx={{
          width: "100%",
          maxWidth: 420,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Paper
          elevation={12}
          sx={{
            position: "relative",
            width: "100%",
            px: { xs: 2.25, sm: 4 },
            py: { xs: 3, sm: 4 },
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: { xs: 1.75, sm: 2 },
            bgcolor: "background.paper",
            color: "text.primary",
            borderRadius: 1.5,
            boxSizing: "border-box",
          }}
        >
          <IconButton
            onClick={closeHandler}
            size="small"
            sx={{
              position: "absolute",
              top: 10,
              right: 10,
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
              width: 44,
              height: 44,
              bgcolor: "action.selected",
              color: "primary.main",
            }}
          >
            <GroupAddIcon />
          </Avatar>

          <Typography
            variant="h5"
            sx={{
              fontWeight: 600,
              letterSpacing: "0.3px",
              textAlign: "center",
              fontSize: { xs: "1.25rem", sm: "1.5rem" },
              lineHeight: 1.2,
            }}
          >
            {language.createCourse}
          </Typography>

          <Box
            component="form"
            onSubmit={submitHandler}
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              gap: 2,
              mt: 0.5,
            }}
          >
            {error && <Alert severity="error">{error}</Alert>}

            <TextField
              label={language.courseName || "Course name"}
              name="title"
              value={values.title}
              onChange={changeHandler}
              fullWidth
              required
            />

            <TextField
              label={language.description || "Description"}
              name="description"
              value={values.description}
              onChange={changeHandler}
              fullWidth
              multiline
              minRows={3}
            />

            <TextField
              label={language.creatorCode || "Creator code"}
              name="creator_code"
              value={values.creator_code}
              onChange={changeHandler}
              fullWidth
              required
              helperText="Use only A-Z, 0-9, _ or -"
            />

            <Button variant="outlined" component="label">
              {language.selectImage || "Select image"}
              <input
                type="file"
                hidden
                accept="image/*"
                onChange={fileChangeHandler}
              />
            </Button>

            {values.image && (
              <Typography variant="body2" color="text.secondary">
                {values.image.name}
              </Typography>
            )}

            <Button
              type="submit"
              variant="contained"
              fullWidth
              disabled={loading}
              sx={{
                mt: 0.5,
                minHeight: 44,
                textTransform: "none",
                fontWeight: 600,
                borderRadius: 1.2,
              }}
            >
              {loading ? language.loading || "Loading..." : language.create}
            </Button>
          </Box>
        </Paper>
      </Box>
    </Backdrop>
  );
}