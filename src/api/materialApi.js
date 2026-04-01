import api from "./request";

const endpoints = {
  list: "/materials/",
  details: (materialId) => `/materials/${materialId}/`,
  create: "/materials/create/",
  edit: (materialId) => `/materials/${materialId}/edit/`,
  delete: (materialId) => `/materials/${materialId}/delete/`,
};

function buildMaterialFormData({ courseId, title, description, files = [] }) {
  const formData = new FormData();

  if (courseId !== undefined && courseId !== null) {
    formData.append("course_id", courseId);
  }

  formData.append("title", title);
  formData.append("description", description || "");

  files.forEach((file) => {
    formData.append("files", file);
  });

  return formData;
}

export function getMaterials(courseId) {
  const query = courseId ? `?course_id=${courseId}` : "";
  return api.get(`${endpoints.list}${query}`);
}

export function getMaterialDetails(materialId) {
  return api.get(endpoints.details(materialId));
}

export function createMaterial({ courseId, title, description, files }) {
  return api.post(
    endpoints.create,
    buildMaterialFormData({ courseId, title, description, files })
  );
}

export function updateMaterial(materialId, { courseId, title, description, files }) {
  return api.patch(
    endpoints.edit(materialId),
    buildMaterialFormData({ courseId, title, description, files })
  );
}

export function deleteMaterial(materialId) {
  return api.delete(endpoints.delete(materialId));
}