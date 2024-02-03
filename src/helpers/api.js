import axios from "axios";
import { URL } from "./constants";

export const handleSubmit = (formData) => {
  try {
    const response = axios.post(URL, formData, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response;
  } catch (error) {
    console.error(error);
  }
};

export const handleDelete = (id) => {
  try {
    const response = axios.delete(`${URL}/${id}`);
    return response;
  } catch (error) {
    console.error(error);
  }
};
