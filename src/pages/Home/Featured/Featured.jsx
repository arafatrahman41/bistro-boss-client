import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from '../../../assets/home/featured.jpg'
import './Featured.css'

const Featured = () => {
  return (
    <div className="featured-item bg-fixed text-white my-20">
      <SectionTitle subHeading="check it out" heading="Featured Item" />
      <div className="md:flex justify-center items-center bg-slate-500 bg-opacity-10 gap-10 pb-20 pt-12 px-16">
         <div>
            <img src={featuredImg} alt="" />
         </div>
         <div>
            <p>Aug 20, 2029</p>
            <p className="uppercase">Where can i get some?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, rem, sapiente earum officiis, in suscipit accusamus excepturi provident odio ut necessitatibus minima illum dolore nihil. Ea quas enim excepturi aliquam harum dolorem ullam ab laudantium sit id dolor voluptatibus suscipit, odit ducimus soluta. Dicta officiis deserunt, perferendis architecto magni harum!</p>
            <button className="btn btn-outline border-0 border-b-4 mt-4">Read More</button>
         </div>
      </div>
    </div>
  );
};

export default Featured;
