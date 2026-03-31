import api from "./request";

const endpoints = {
  listMessages: (courseId) => `/courses/chat/${courseId}/messages/`,
  createMessage: (courseId) => `/courses/chat/${courseId}/messages/create/`,
  deleteMessage: (courseId, messageId) =>
    `/courses/chat/${courseId}/messages/${messageId}/delete/`,
  likeMessage: (messageId) => `/courses/chat/messages/${messageId}/like/`,
  unlikeMessage: (messageId) => `/courses/chat/messages/${messageId}/unlike/`,
};

export async function getCourseMessages(courseId) {
  return api.get(endpoints.listMessages(courseId));
}

export async function createCourseMessage(courseId, content) {
  return api.post(endpoints.createMessage(courseId), { content });
}

export async function deleteCourseMessage(courseId, messageId) {
  return api.delete(endpoints.deleteMessage(courseId, messageId));
}

export async function likeCourseMessage(messageId) {
  return api.post(endpoints.likeMessage(messageId));
}

export async function unlikeCourseMessage(messageId) {
  return api.delete(endpoints.unlikeMessage(messageId));
}