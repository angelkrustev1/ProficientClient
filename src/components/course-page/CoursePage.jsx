import {
  Alert,
  Backdrop,
  Box,
  Button,
  CircularProgress,
  Fade,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Paper,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";
import { useMemo, useState } from "react";
import { useParams } from "react-router";
import Course from "../course/Course";
import Chat from "../chat/Chat";
import useLanguage from "../../hooks/useLanguage";
import useCourseDetails from "../../hooks/useCourseDetails";

export default function CoursePage() {
  const language = useLanguage();
  const { courseId } = useParams();
  const { course, loading, error } = useCourseDetails(courseId);
  const [tabValue, setTabValue] = useState(0);
  const [membersOpen, setMembersOpen] = useState(false);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const handleOpenMembers = () => {
    setMembersOpen(true);
  };

  const handleCloseMembers = () => {
    setMembersOpen(false);
  };

  const members = useMemo(() => {
    if (!course) return [];

    if (Array.isArray(course.members)) return course.members;
    if (Array.isArray(course.users)) return course.users;
    if (Array.isArray(course.participants)) return course.participants;

    return [];
  }, [course]);

  const getMemberPrimaryText = (member) => {
    if (typeof member === "string") return member;

    return (
      member?.email ||
      member?.username ||
      member?.name ||
      member?.full_name ||
      "Unknown user"
    );
  };

  const getMemberSecondaryText = (member) => {
    if (typeof member === "string") return "";

    return member?.role || member?.creator ? "Course owner" : "";
  };

  if (loading) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", py: 8 }}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box sx={{ width: "100%", maxWidth: 1200, mx: "auto", px: 2, py: 4 }}>
        <Alert severity="error">{error}</Alert>
      </Box>
    );
  }

  if (!course) {
    return (
      <Box sx={{ width: "100%", maxWidth: 1200, mx: "auto", px: 2, py: 4 }}>
        <Alert severity="warning">Course not found.</Alert>
      </Box>
    );
  }

  return (
    <>
      <Box
        sx={{
          width: "100%",
          maxWidth: 1200,
          mx: "auto",
          backgroundColor: "background.default",
          flexGrow: 1,
          px: { xs: 1.5, sm: 3, md: 5, lg: 7 },
          py: { xs: 2, sm: 2.5, md: 3 },
          border: "1px solid",
          borderColor: "divider",
          boxShadow: "0px 10px 24px rgba(0, 0, 0, 0.14)",
          position: "relative",
          zIndex: 1,
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            mb: 2,
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
            gap: 2,
            flexWrap: "wrap",
          }}
        >
          <Box sx={{ minWidth: 0 }}>
            <Typography
              variant="h4"
              sx={{
                fontWeight: 700,
                color: "text.primary",
                fontSize: { xs: "1.4rem", sm: "1.8rem" },
                mb: 0.5,
                wordBreak: "break-word",
              }}
            >
              {course.title}
            </Typography>

            <Typography
              variant="body2"
              sx={{
                color: "text.secondary",
                fontWeight: 500,
              }}
            >
              {(language.joinCode || "Join code")}: {course.join_code}
            </Typography>
          </Box>

          <Button
            variant="outlined"
            startIcon={<GroupOutlinedIcon />}
            onClick={handleOpenMembers}
            sx={{
              textTransform: "none",
              fontWeight: 600,
              alignSelf: { xs: "stretch", sm: "flex-start" },
              minWidth: { xs: "100%", sm: "auto" },
              px: 1.75,
              py: 0.9,
              borderColor: "divider",
              color: "text.primary",
              backgroundColor: "background.paper",
              borderRadius: 1.5,
              boxShadow: "none",
              transition: "all 0.18s ease",
              "&:hover": {
                backgroundColor: "action.hover",
                borderColor: "primary.main",
              },
            }}
          >
            {(language.courseMembers || "Members")} ({members.length})
          </Button>
        </Box>

        <Box
          sx={{
            borderBottom: "1px solid",
            borderColor: "divider",
            backgroundColor: "background.paper",
            overflowX: "auto",
          }}
        >
          <Tabs
            value={tabValue}
            onChange={handleTabChange}
            variant="fullWidth"
            sx={{
              minHeight: { xs: 46, sm: 48 },
              "& .MuiTabs-indicator": {
                height: 2,
                backgroundColor: "primary.main",
              },
            }}
          >
            <Tab
              label={language.course}
              sx={{
                minHeight: { xs: 46, sm: 48 },
                minWidth: 0,
                textTransform: "none",
                fontSize: { xs: "0.9rem", sm: "0.95rem" },
                fontWeight: 600,
                letterSpacing: "0.25px",
                color: "text.primary",
                borderRight: "1px solid",
                borderColor: "divider",
                px: { xs: 1, sm: 2 },
                "&.Mui-selected": {
                  color: "primary.main",
                },
                "&:hover": {
                  backgroundColor: "action.hover",
                },
              }}
            />

            <Tab
              label={language.chat}
              sx={{
                minHeight: { xs: 46, sm: 48 },
                minWidth: 0,
                textTransform: "none",
                fontSize: { xs: "0.9rem", sm: "0.95rem" },
                fontWeight: 600,
                letterSpacing: "0.25px",
                color: "text.primary",
                px: { xs: 1, sm: 2 },
                "&.Mui-selected": {
                  color: "primary.main",
                },
                "&:hover": {
                  backgroundColor: "action.hover",
                },
              }}
            />
          </Tabs>
        </Box>

        {tabValue === 0 && <Course course={course} />}
        {tabValue === 1 && <Chat />}
      </Box>

      <Backdrop
        open={membersOpen}
        onClick={handleCloseMembers}
        sx={{
          zIndex: (theme) => theme.zIndex.modal + 1,
          backgroundColor: "rgba(0, 0, 0, 0.55)",
          backdropFilter: "blur(5px)",
        }}
      >
        <Fade in={membersOpen}>
          <Paper
            onClick={(event) => event.stopPropagation()}
            elevation={0}
            sx={{
              width: "min(92vw, 560px)",
              maxHeight: "82vh",
              overflow: "hidden",
              border: "1px solid",
              borderColor: "divider",
              backgroundColor: "background.default",
              boxShadow: "0px 16px 40px rgba(0, 0, 0, 0.22)",
              borderRadius: 2,
            }}
          >
            <Box
              sx={{
                px: { xs: 2, sm: 2.5 },
                py: 1.75,
                borderBottom: "1px solid",
                borderColor: "divider",
                backgroundColor: "background.paper",
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "space-between",
                gap: 2,
              }}
            >
              <Box sx={{ minWidth: 0 }}>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 700,
                    color: "text.primary",
                    fontSize: { xs: "1rem", sm: "1.08rem" },
                    lineHeight: 1.2,
                    mb: 0.4,
                  }}
                >
                  {language.courseMembers || "Course members"}
                </Typography>

                <Typography
                  variant="body2"
                  sx={{
                    color: "text.secondary",
                    fontWeight: 500,
                  }}
                >
                  {members.length} {members.length === 1 ? "member" : "members"}
                </Typography>
              </Box>

              <IconButton
                onClick={handleCloseMembers}
                size="small"
                aria-label="Close members modal"
                sx={{
                  color: "text.secondary",
                  border: "1px solid",
                  borderColor: "divider",
                  backgroundColor: "background.default",
                  flexShrink: 0,
                  "&:hover": {
                    backgroundColor: "action.hover",
                    color: "text.primary",
                  },
                }}
              >
                <CloseIcon fontSize="small" />
              </IconButton>
            </Box>

            <Box
              sx={{
                px: { xs: 2, sm: 2.5 },
                py: { xs: 2, sm: 2.25 },
              }}
            >
              {members.length > 0 ? (
                <Box
                  sx={{
                    border: "1px solid",
                    borderColor: "divider",
                    backgroundColor: "background.paper",
                    borderRadius: 1.5,
                    overflow: "hidden",
                    maxHeight: "58vh",
                    overflowY: "auto",
                  }}
                >
                  <List disablePadding>
                    {members.map((member, index) => (
                      <ListItem
                        key={
                          member?.id ||
                          member?.email ||
                          `${getMemberPrimaryText(member)}-${index}`
                        }
                        sx={{
                          px: 2,
                          py: 1.5,
                          borderBottom:
                            index !== members.length - 1 ? "1px solid" : "none",
                          borderColor: "divider",
                          alignItems: "center",
                          transition: "background-color 0.15s ease",
                          "&:hover": {
                            backgroundColor: "action.hover",
                          },
                        }}
                      >
                        <Box
                          sx={{
                            width: 36,
                            height: 36,
                            minWidth: 36,
                            borderRadius: "50%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            mr: 1.5,
                            backgroundColor: "action.hover",
                            border: "1px solid",
                            borderColor: "divider",
                            color: "text.primary",
                            fontSize: "0.9rem",
                            fontWeight: 700,
                          }}
                        >
                          {getMemberPrimaryText(member).charAt(0).toUpperCase()}
                        </Box>

                        <ListItemText
                          primary={getMemberPrimaryText(member)}
                          secondary={getMemberSecondaryText(member)}
                          primaryTypographyProps={{
                            fontWeight: 600,
                            color: "text.primary",
                            fontSize: "0.96rem",
                          }}
                          secondaryTypographyProps={{
                            color: "text.secondary",
                            fontSize: "0.82rem",
                            sx: { mt: 0.2 },
                          }}
                        />
                      </ListItem>
                    ))}
                  </List>
                </Box>
              ) : (
                <Box
                  sx={{
                    border: "1px solid",
                    borderColor: "divider",
                    backgroundColor: "background.paper",
                    borderRadius: 1.5,
                    px: 2,
                    py: 3,
                    textAlign: "center",
                  }}
                >
                  <Typography
                    variant="body2"
                    sx={{
                      color: "text.secondary",
                    }}
                  >
                    No members available.
                  </Typography>
                </Box>
              )}
            </Box>
          </Paper>
        </Fade>
      </Backdrop>
    </>
  );
}