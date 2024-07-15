import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import { useEffect, useState } from "react";
import axios from "axios";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { FaQuoteLeft } from "react-icons/fa";

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    const reviewsData = async () => {
      try {
        const { data } = await axios("reviews.json");
        setReviews(data);
        console.log(data);
      } catch (err) {
        console.log(err.message);
      }
    };
    reviewsData();
  }, []);
  return (
    <div>
      <section className="my-20">
        <SectionTitle
          subHeading="What Our Client Say"
          heading={"Testimonials"}
        />
        <Swiper
          pagination={{
            type: "fraction",
          }}
          loop={true}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          {reviews.map((review) => (
            <SwiperSlide key={review._id}>
              <div className="m-16 flex flex-col items-center space-y-2">
                <Rating
                  style={{ maxWidth: 180 }}
                  value={review.rating}
                  readOnly
                />
                <FaQuoteLeft size={50} />
                <p>{review.details}</p>
                <h2 className="text-2xl text-orange-400">{review.name}</h2>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </div>
  );
};

export default Testimonials;
