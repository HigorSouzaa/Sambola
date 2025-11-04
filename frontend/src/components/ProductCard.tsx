interface ProductCardProps {
  imageUrl: string;
  title: string;
  price: string;
  altText: string;
}

function ProductCard({ imageUrl, title, price, altText }: ProductCardProps) {
  return (
    <div className="flex flex-col gap-3 pb-3 group cursor-pointer">
      <div className="w-full bg-center bg-no-repeat aspect-[3/4] bg-cover rounded-lg overflow-hidden">
        <img
          alt={altText}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          src={imageUrl}
        />
      </div>
      <div>
        <p className="text-[#111111] dark:text-white text-base font-medium leading-normal">
          {title}
        </p>
        <p className="text-gray-500 dark:text-gray-400 text-sm font-normal leading-normal">
          {price}
        </p>
      </div>
    </div>
  );
}

export default ProductCard;
