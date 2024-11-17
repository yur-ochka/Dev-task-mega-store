import axiosInstance from "@/utils/axiosInstance";

const GET = async () => {
  const response = await axiosInstance.get("/products");
  if (response.status !== 200) {
    throw new Error("Couldnt get products");
  }
  return response.data;
};

export default GET;
