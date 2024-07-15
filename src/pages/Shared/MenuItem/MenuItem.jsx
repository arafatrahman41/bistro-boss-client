const MenuItem = ({item}) => {
    const {image, price, recipe, name} = item
    return (
        <div className="flex gap-4">
            <img className="w-36 h-32 object-cover object-center rounded-tr-full rounded-b-full" src={image} alt="" />
            <div className="flex">
                <div className="space-y-2">
                <h3 className="uppercase">{name}----------</h3>
                <p>{recipe}</p>
                </div>
                <p className="text-yellow-500">${price}</p>
            </div>
        </div>
    );
};

export default MenuItem;