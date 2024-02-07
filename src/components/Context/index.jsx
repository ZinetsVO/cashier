"use client";
import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import { URL } from "@/helpers/constants";

const ProductContext = createContext();

export default function ProductProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  const fetchProducts = async () => {
    try {
      const response = await axios.get(URL);
      setProducts(response.data);
    } catch (error) {
      console.error(error);
      setError(error.message);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleSubmit = (formData) => {
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

  const handleDelete = (id) => {
    try {
      const response = axios.delete(`${URL}/${id}`);
      return response;
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <ProductContext.Provider value={{ products, fetchProducts, error, handleDelete, handleSubmit }}>
      {children}
    </ProductContext.Provider>
  );
}

export function useProduct() {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error("UseProduct must be used with productProvider");
  }
  return context;
}
