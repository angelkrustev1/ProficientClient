import { useEffect, useState } from "react";
import * as assignmentApi from "../api/assignmentApi";

export default function useAssignmentDetails(assignmentId) {
  const [assignment, setAssignment] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let isMounted = true;

    async function fetchAssignment() {
      try {
        setLoading(true);
        setError("");

        const result = await assignmentApi.getAssignmentDetails(assignmentId);

        if (isMounted) {
          setAssignment(result);
        }
      } catch (err) {
        if (isMounted) {
          setError(err.message || "Failed to load assignment.");
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }

    if (assignmentId) {
      fetchAssignment();
    } else {
      setLoading(false);
    }

    return () => {
      isMounted = false;
    };
  }, [assignmentId]);

  return { assignment, loading, error };
}