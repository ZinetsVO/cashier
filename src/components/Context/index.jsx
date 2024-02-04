import React, { createContext } from "react";
import axios from "axios";
import { URL } from "@/helpers/constants";

const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const fetchProduct = async function fetchProducts() {
    try {
      const response = await axios.get(URL);
      setProducts(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchProduct()
  

  }, [])
  

  return (
    <ProductContext.Provider value={{}}>{children}</ProductContext.Provider>
  );
};

export default ProductProvider;
