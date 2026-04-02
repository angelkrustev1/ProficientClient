import { useState } from "react";
import {
  Avatar,
  Box,
  Button,
  IconButton,
  Paper,
  TextField,
  Typography,
  Backdrop,
  Alert,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import CloseIcon from "@mui/icons-material/Close";
import useLanguage from "../../hooks/useLanguage";
import useAuth from "../../hooks/useAuth";
import * as authApi from "../../api/authApi";

const initialValues = {
  current_password: "",
  new_email: "",
};

export default function ChangeEmail({ open, onClose }) {
  const language = useLanguage();
  const { email, updateUserEmail } = useAuth();

  const [values, setValues] = useState(initialValues);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const changeHandler = (e) => {
    const { name, value } = e.target;

    setValues((state) => ({
      ...state,
      [name]: value,
    }));

    if (error) {
      setError("");
    }

    if (successMessage) {
      setSuccessMessage("");
    }
  };

  const resetForm = () => {
    setValues(initialValues);
    setError("");
    setSuccessMessage("");
    setIsSubmitting(false);
  };

  const closeHandler = () => {
    resetForm();
    onClose();
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    if (!values.new_email.trim()) {
      setError("New email is required.");
      return;
    }

    if (!values.current_password.trim()) {
      setError("Current password is required.");
      return;
    }

    setIsSubmitting(true);
    setError("");
    setSuccessMessage("");

    try {
      const result = await authApi.changeEmail(
        values.new_email.trim(),
        values.current_password
      );

      updateUserEmail(result.email);
      setSuccessMessage(result.message || "Email changed successfully.");

      setTimeout(() => {
        closeHandler();
      }, 700);
    } catch (error) {
      setError(error.message || "Failed to change email.");
    } finally {
      setIsSubmitting(false);
    }
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
            <EmailIcon />
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
            {language.changeEmail || "Change Email"}
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
            {!!email && (
              <TextField
                label={language.currentEmail || "Current email"}
                value={email}
                fullWidth
                disabled
              />
            )}

            <TextField
              label={language.newEmail || "New email"}
              name="new_email"
              value={values.new_email}
              onChange={changeHandler}
              fullWidth
              required
            />

                        <TextField
              label={language.currentPassword || "Current password"}
              name="current_password"
              type="password"
              value={values.current_password}
              onChange={changeHandler}
              fullWidth
              required
            />

            {error ? <Alert severity="error">{error}</Alert> : null}
            {successMessage ? (
              <Alert severity="success">{successMessage}</Alert>
            ) : null}

            <Button
              type="submit"
              variant="contained"
              fullWidth
              disabled={isSubmitting}
              sx={{
                mt: 0.5,
                minHeight: 44,
                textTransform: "none",
                fontWeight: 600,
                borderRadius: 1.2,
              }}
            >
              {isSubmitting
                ? language.saving || "Saving..."
                : language.saveChanges || "Save changes"}
            </Button>
          </Box>
        </Paper>
      </Box>
    </Backdrop>
  );
}