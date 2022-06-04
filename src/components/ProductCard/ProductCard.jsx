export const ProductCard = ({ product }) => {
  const { title, brand, image, price, gender, size } = product;

  return (
    <div className="w-full flex flex-col gap-1 border border-gray-500 rounded">
      <img src={image} alt={title} className="w-full h-[20rem]" />

      <div className="p-2">
        <div className="font-bold">{title}</div>

        <div className="text-gray-500">{brand}</div>

        <div className="flex gap-2">
          <div>&#8377; {price}</div>|<div>{gender}</div>
        </div>

        <div>Size: {size}</div>
      </div>
    </div>
  );
};
