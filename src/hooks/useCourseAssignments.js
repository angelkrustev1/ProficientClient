import { useCallback, useEffect, useState } from "react";
import * as assignmentApi from "../api/assignmentApi";

export default function useCourseAssignments(courseId) {
  const [assignments, setAssignments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchAssignments = useCallback(async () => {
    if (!courseId) {
      setAssignments([]);
      setLoading(false);
      return;
    }

    try {
      setLoading(true);
      setError("");
      const result = await assignmentApi.getAssignments(courseId);
      setAssignments(Array.isArray(result) ? result : []);
    } catch (err) {
      setError(err.message || "Failed to load assignments.");
    } finally {
      setLoading(false);
    }
  }, [courseId]);

  useEffect(() => {
    fetchAssignments();
  }, [fetchAssignments]);

  return {
    assignments,
    loading,
    error,
    refetchAssignments: fetchAssignments,
  };
}