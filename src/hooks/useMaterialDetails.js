import { useEffect, useState } from "react";
import * as materialApi from "../api/materialApi";

export default function useMaterialDetails(materialId) {
  const [material, setMaterial] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let isMounted = true;

    async function fetchMaterial() {
      try {
        setLoading(true);
        setError("");

        const result = await materialApi.getMaterialDetails(materialId);

        if (isMounted) {
          setMaterial(result);
        }
      } catch (err) {
        if (isMounted) {
          setError(err.message || "Failed to load material.");
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }

    if (materialId) {
      fetchMaterial();
    } else {
      setLoading(false);
    }

    return () => {
      isMounted = false;
    };
  }, [materialId]);

  return { material, loading, error };
}