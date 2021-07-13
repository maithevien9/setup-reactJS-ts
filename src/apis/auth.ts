import apiRequest from "../helpers/apiRequest";

const API_PREFIX = "/auth";

export const loginApiRequest = (email: string, password: string): any => {
  return apiRequest.post(`${API_PREFIX}/login`, { email, password });
};
