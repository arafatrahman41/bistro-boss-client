const FoodCard = ({ item }) => {
  const { image, price, recipe, name } = item;
  return (
    <div className="card bg-base-200 shadow-xl">
      <figure>
        <img
        className="w-full"
          src={image}
          alt={`name of ${name}`}
        />
      </figure>
      <p className="bg-slate-900 text-white absolute right-0 px-4 py-2 mr-4 mt-4">${price}</p>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
