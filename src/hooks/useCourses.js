import { useCallback, useEffect, useState } from "react";
import {
  createCourse,
  deleteCourse,
  getCourses,
  joinCourse,
  leaveCourse,
} from "../api/courseApi";

export default function useCourses() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [actionLoading, setActionLoading] = useState(false);
  const [error, setError] = useState("");

  const loadCourses = useCallback(async () => {
    try {
      setLoading(true);
      setError("");
      const result = await getCourses();
      setCourses(Array.isArray(result) ? result : []);
    } catch (err) {
      setError(err.message || "Failed to load courses.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadCourses();
  }, [loadCourses]);

  const handleCreateCourse = async (courseData) => {
    try {
      setActionLoading(true);
      setError("");
      const createdCourse = await createCourse(courseData);
      await loadCourses();
      return { success: true, data: createdCourse };
    } catch (err) {
      const message = err.message || "Failed to create course.";
      setError(message);
      return { success: false, error: message };
    } finally {
      setActionLoading(false);
    }
  };

  const handleJoinCourse = async (code) => {
    try {
      setActionLoading(true);
      setError("");
      const result = await joinCourse(code);
      await loadCourses();
      return { success: true, data: result };
    } catch (err) {
      const message = err.message || "Failed to join course.";
      setError(message);
      return { success: false, error: message };
    } finally {
      setActionLoading(false);
    }
  };

  const handleLeaveCourse = async (courseId) => {
    try {
      setActionLoading(true);
      setError("");
      const result = await leaveCourse(courseId);
      setCourses((prev) => prev.filter((course) => course.id !== courseId));
      return { success: true, data: result };
    } catch (err) {
      const message = err.message || "Failed to leave course.";
      setError(message);
      return { success: false, error: message };
    } finally {
      setActionLoading(false);
    }
  };

  const handleDeleteCourse = async (courseId) => {
    try {
      setActionLoading(true);
      setError("");
      await deleteCourse(courseId);
      setCourses((prev) => prev.filter((course) => course.id !== courseId));
      return { success: true };
    } catch (err) {
      const message = err.message || "Failed to delete course.";
      setError(message);
      return { success: false, error: message };
    } finally {
      setActionLoading(false);
    }
  };

  return {
    courses,
    loading,
    actionLoading,
    error,
    reloadCourses: loadCourses,
    createCourse: handleCreateCourse,
    joinCourse: handleJoinCourse,
    leaveCourse: handleLeaveCourse,
    deleteCourse: handleDeleteCourse,
  };
}