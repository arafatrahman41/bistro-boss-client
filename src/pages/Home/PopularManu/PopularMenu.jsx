import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import axios from "axios";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const PopularMenu = () => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    const menuData = async () => {
      try {
        const { data } = await axios("menu.json");
        const popularItems = data.filter((item) => item.category === "popular");
        setMenu(popularItems);
        console.log(popularItems);
      } catch (error) {
        console.log(error.message);
      }
    };
    menuData();
  }, []);

  return (
    <section className="my-12">
      <SectionTitle
        heading="From Our Menu"
        subHeading="Check it out"
      ></SectionTitle>
      <div className="grid md:grid-cols-2 gap-6">
        {menu.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <div className="text-center">
      <button className="btn btn-outline border-0 border-b-4 mt-4">View Full Menu</button>
      </div>
    </section>
  );
};

export default PopularMenu;
