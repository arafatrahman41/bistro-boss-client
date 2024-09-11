import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const FoodCard = ({ item }) => {
  const { image, price, recipe, name } = item;
  const { user } = useAuth();
  const navigate = useNavigate();
  const handleAddToCart = (food) => {
    if (user && user.email) {
      // send cart item to the database
    } else {
      Swal.fire({
        title: "You are not Logged In",
        text: "Please login to add to the cart?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, login!",
      }).then((result) => {
        if (result.isConfirmed) {
          // send the user to login page
          navigate("/login");
        }
      });
    }
  };
  return (
    <div className="card bg-base-200 shadow-xl">
      <figure>
        <img className="w-full" src={image} alt={`name of ${name}`} />
      </figure>
      <p className="bg-slate-900 text-white absolute right-0 px-4 py-2 mr-4 mt-4">
        ${price}
      </p>
      <div className="card-body flex flex-col items-center">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions">
          <button
            onClick={() => handleAddToCart(item)}
            className="btn btn-outline border-0 border-b-4 mt-4 border-orange-400 bg-slate-200"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
