import axios from "axios";
import { useEffect, useState } from "react";

const useMenu = () => {
  const [menu, setMenu] = useState([]);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const menuData = async () => {
      try {
        const { data } = await axios("http://localhost:5000/menu");
        setMenu(data);
        setLoading(false)
      } catch (error) {
        console.log(error.message);
      }
    };
    menuData(); 
  }, []);

  return [menu, loading]
};

export default useMenu;
