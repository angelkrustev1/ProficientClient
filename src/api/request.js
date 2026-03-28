const BASE_URL = "http://127.0.0.1:8000";
const AUTH_KEY = "auth";

function getAuth() {
  const authData = localStorage.getItem(AUTH_KEY);

  if (!authData) {
    return null;
  }

  try {
    return JSON.parse(authData);
  } catch {
    return null;
  }
}

function setAuth(authData) {
  localStorage.setItem(AUTH_KEY, JSON.stringify(authData));
}

function removeAuth() {
  localStorage.removeItem(AUTH_KEY);
}

async function tryRefreshToken() {
  const auth = getAuth();

  if (!auth?.refreshToken) {
    removeAuth();
    throw new Error("No refresh token available.");
  }

  const response = await fetch(`${BASE_URL}/auth/token/refresh/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      refresh: auth.refreshToken,
    }),
  });

  const result = await response.json().catch(() => null);

  if (!response.ok) {
    removeAuth();
    throw new Error(
      result?.detail ||
        result?.error ||
        result?.message ||
        "Session expired."
    );
  }

  const updatedAuth = {
    ...auth,
    accessToken: result.access,
  };

  setAuth(updatedAuth);

  return result.access;
}

async function request(method, url, data, options = {}, retry = true) {
  const auth = getAuth();

  const headers = {
    ...(data ? { "Content-Type": "application/json" } : {}),
    ...(auth?.accessToken ? { Authorization: `Bearer ${auth.accessToken}` } : {}),
    ...(options.headers || {}),
  };

  const requestOptions = {
    method,
    ...options,
    headers,
  };

  if (data) {
    requestOptions.body = JSON.stringify(data);
  }

  const response = await fetch(`${BASE_URL}${url}`, requestOptions);
  const result = await response.json().catch(() => null);

  if (response.ok) {
    return result;
  }

  const shouldRefresh =
    response.status === 401 &&
    retry &&
    url !== "/auth/login/" &&
    url !== "/auth/register/" &&
    url !== "/auth/logout/" &&
    url !== "/auth/token/refresh/";

  if (shouldRefresh) {
    try {
      const newAccessToken = await tryRefreshToken();

      const retryHeaders = {
        ...(data ? { "Content-Type": "application/json" } : {}),
        Authorization: `Bearer ${newAccessToken}`,
        ...(options.headers || {}),
      };

      const retryOptions = {
        method,
        ...options,
        headers: retryHeaders,
      };

      if (data) {
        retryOptions.body = JSON.stringify(data);
      }

      const retryResponse = await fetch(`${BASE_URL}${url}`, retryOptions);
      const retryResult = await retryResponse.json().catch(() => null);

      if (!retryResponse.ok) {
        throw new Error(
          retryResult?.detail ||
            retryResult?.error ||
            retryResult?.message ||
            "Something went wrong"
        );
      }

      return retryResult;
    } catch (error) {
      removeAuth();
      window.dispatchEvent(new Event("auth-logout"));
      throw error;
    }
  }

  throw new Error(
    result?.detail ||
      result?.error ||
      result?.message ||
      "Something went wrong"
  );
}

const api = {
  get(url, options) {
    return request("GET", url, undefined, options);
  },
  post(url, data, options) {
    return request("POST", url, data, options);
  },
  put(url, data, options) {
    return request("PUT", url, data, options);
  },
  patch(url, data, options) {
    return request("PATCH", url, data, options);
  },
  delete(url, options) {
    return request("DELETE", url, undefined, options);
  },
};

export default api;