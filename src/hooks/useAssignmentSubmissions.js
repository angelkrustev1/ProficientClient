import { useCallback, useEffect, useState } from "react";
import * as assignmentApi from "../api/assignmentApi";

export default function useAssignmentSubmissions(assignmentId) {
  const [submissions, setSubmissions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchSubmissions = useCallback(async () => {
    if (!assignmentId) {
      setSubmissions([]);
      setLoading(false);
      return;
    }

    try {
      setLoading(true);
      setError("");

      const result = await assignmentApi.getAssignmentSubmissions(assignmentId);
      setSubmissions(Array.isArray(result) ? result : []);
    } catch (err) {
      setError(err.message || "Failed to load assignment submissions.");
      setSubmissions([]);
    } finally {
      setLoading(false);
    }
  }, [assignmentId]);

  useEffect(() => {
    fetchSubmissions();
  }, [fetchSubmissions]);

  return {
    submissions,
    loading,
    error,
    refetchSubmissions: fetchSubmissions,
  };
}