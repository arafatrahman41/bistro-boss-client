import { Helmet } from "react-helmet-async";
import Cover from "../Shared/Cover/Cover";
import menuImg from "../../assets/menu/banner3.jpg";
import PopularMenu from "../Home/PopularManu/PopularMenu";

const OurMenu = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      <Cover img={menuImg} title={"Our Menu"} />
      <PopularMenu />
    </div>
  );
};

export default OurMenu;
