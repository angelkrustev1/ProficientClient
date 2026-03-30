import { useCallback, useEffect, useState } from "react";
import { getCourseDetails } from "../api/courseApi";

export default function useCourseDetails(courseId) {
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const loadCourse = useCallback(async () => {
    if (!courseId) return;

    try {
      setLoading(true);
      setError("");
      const result = await getCourseDetails(courseId);
      setCourse(result);
    } catch (err) {
      setError(err.message || "Failed to load course.");
    } finally {
      setLoading(false);
    }
  }, [courseId]);

  useEffect(() => {
    loadCourse();
  }, [loadCourse]);

  return {
    course,
    loading,
    error,
    reloadCourse: loadCourse,
  };
}