import { useCallback, useEffect, useState } from "react";
import * as materialApi from "../api/materialApi";

export default function useCourseMaterials(courseId) {
  const [materials, setMaterials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchMaterials = useCallback(async () => {
    if (!courseId) {
      setMaterials([]);
      setLoading(false);
      return;
    }

    try {
      setLoading(true);
      setError("");
      const result = await materialApi.getMaterials(courseId);
      setMaterials(Array.isArray(result) ? result : []);
    } catch (err) {
      setError(err.message || "Failed to load materials.");
    } finally {
      setLoading(false);
    }
  }, [courseId]);

  useEffect(() => {
    fetchMaterials();
  }, [fetchMaterials]);

  return {
    materials,
    loading,
    error,
    refetchMaterials: fetchMaterials,
  };
}