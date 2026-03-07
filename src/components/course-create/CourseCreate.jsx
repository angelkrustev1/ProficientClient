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
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import CloseIcon from "@mui/icons-material/Close";
import useLanguage from "../../hooks/useLanguage";

export default function CourseCreate({ open, onClose }) {
    const language = useLanguage();

    return (
        <Backdrop
            open={open}
            onClick={onClose}
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
                        onClick={onClose}
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
                        sx={{
                            width: "100%",
                            display: "flex",
                            flexDirection: "column",
                            gap: 2,
                            mt: 0.5,
                        }}
                    >
                        <TextField
                            label={language.courseName}
                            fullWidth
                            required
                            size="medium"
                        />

                        <TextField
                            label={language.url}
                            fullWidth
                            required
                            size="medium"
                        />

                        <Button
                            type="submit"
                            variant="contained"
                            fullWidth
                            sx={{
                                mt: 0.5,
                                minHeight: 44,
                                textTransform: "none",
                                fontWeight: 600,
                                borderRadius: 1.2,
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