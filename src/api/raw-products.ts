import { api } from "./apiConfig";

export const getAllRawProducts = async () => {
  const response = await api.get("/raw-products");

  return response.data;
};
