import api from "./request";

const endpoints = {
  list: "/courses/",
  create: "/courses/create/",
  join: "/courses/join/",
  detail: (courseId) => `/courses/${courseId}/`,
  edit: (courseId) => `/courses/${courseId}/edit/`,
  delete: (courseId) => `/courses/${courseId}/delete/`,
  leave: (courseId) => `/courses/${courseId}/leave/`,
};

export function getCourses() {
  return api.get(endpoints.list);
}

export function getCourseDetails(courseId) {
  return api.get(endpoints.detail(courseId));
}

export function createCourse({ title, description, creator_code, image }) {
  const formData = new FormData();

  formData.append("title", title);
  formData.append("description", description || "");
  formData.append("creator_code", creator_code);

  if (image) {
    formData.append("image", image);
  }

  return api.post(endpoints.create, formData);
}

export function updateCourse(courseId, { title, description, creator_code, image }) {
  const formData = new FormData();

  if (title !== undefined) formData.append("title", title);
  if (description !== undefined) formData.append("description", description);
  if (creator_code !== undefined) formData.append("creator_code", creator_code);
  if (image) formData.append("image", image);

  return api.patch(endpoints.edit(courseId), formData);
}

export function joinCourse(code) {
  return api.post(endpoints.join, { code });
}

export function leaveCourse(courseId) {
  return api.post(endpoints.leave(courseId), {});
}

export function deleteCourse(courseId) {
  return api.delete(endpoints.delete(courseId));
}