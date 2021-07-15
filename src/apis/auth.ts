import apiRequest from "../helpers/apiRequest";
import { ILoginResponsePayload } from "../store/auth/types";

const API_PREFIX = "/auth";

export const loginApiRequest = async (
  email: string,
  password: string,
): Promise<ILoginResponsePayload> => {
  return await apiRequest.post(`${API_PREFIX}/login`, { email, password });
};
