import api from "./request";

const endpoints = {
  list: "/assignments/",
  details: (assignmentId) => `/assignments/${assignmentId}/`,
  create: "/assignments/create/",
  edit: (assignmentId) => `/assignments/${assignmentId}/edit/`,
  delete: (assignmentId) => `/assignments/${assignmentId}/delete/`,
  submit: (assignmentId) => `/assignments/${assignmentId}/submission/`,
};

function buildAssignmentFormData({ courseId, title, description, files = [] }) {
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

function buildSubmissionFormData(files = []) {
  const formData = new FormData();

  files.forEach((file) => {
    formData.append("files", file);
  });

  return formData;
}

export function getAssignments(courseId) {
  const query = courseId ? `?course_id=${courseId}` : "";
  return api.get(`${endpoints.list}${query}`);
}

export function getAssignmentDetails(assignmentId) {
  return api.get(endpoints.details(assignmentId));
}

export function createAssignment({ courseId, title, description, files }) {
  return api.post(
    endpoints.create,
    buildAssignmentFormData({ courseId, title, description, files })
  );
}

export function updateAssignment(assignmentId, { courseId, title, description, files }) {
  return api.patch(
    endpoints.edit(assignmentId),
    buildAssignmentFormData({ courseId, title, description, files })
  );
}

export function deleteAssignment(assignmentId) {
  return api.delete(endpoints.delete(assignmentId));
}

export function submitAssignment(assignmentId, files) {
  return api.post(endpoints.submit(assignmentId), buildSubmissionFormData(files));
}