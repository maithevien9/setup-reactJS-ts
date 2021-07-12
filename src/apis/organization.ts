import apiRequest from "../helpers/apiRequest";

const API_PREFIX = "/organizations";

export const getOrganizationApiRequest = () => {
  return apiRequest.get(API_PREFIX);
};
