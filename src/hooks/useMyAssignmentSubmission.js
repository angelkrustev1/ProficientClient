import { useCallback, useEffect, useState } from "react";
import * as assignmentApi from "../api/assignmentApi";

export default function useMyAssignmentSubmission(assignmentId) {
  const [hasSubmission, setHasSubmission] = useState(false);
  const [submission, setSubmission] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchMySubmission = useCallback(async () => {
    if (!assignmentId) {
      setHasSubmission(false);
      setSubmission(null);
      setLoading(false);
      return;
    }

    try {
      setLoading(true);
      setError("");

      const result = await assignmentApi.getMyAssignmentSubmission(assignmentId);

      setHasSubmission(Boolean(result?.has_submission));
      setSubmission(result?.submission || null);
    } catch (err) {
      setError(err.message || "Failed to load your submission.");
      setHasSubmission(false);
      setSubmission(null);
    } finally {
      setLoading(false);
    }
  }, [assignmentId]);

  useEffect(() => {
    fetchMySubmission();
  }, [fetchMySubmission]);

  return {
    hasSubmission,
    submission,
    loading,
    error,
    refetchMySubmission: fetchMySubmission,
  };
}