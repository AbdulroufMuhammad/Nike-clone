import { star } from "../assets/icons";

const ProductCard = ({ imgURL, name, price }) => {
  return (
    <div className=" justify-center items-center flex flex-1 w-full max-sm:w-full flex-col ">
      <img src={imgURL} alt="name" className=" w-[250px] h-[250px]" />
      <div className=" mt-8 gap-4 flex justify-start">
        {" "}
        <img src={star} alt="rating" width={24} height={24} />
        <p className=" text-slate-gray font-mono text-xl leading-normal">(4.5)</p>
      </div>
      <h3 className="leading-normal mt-2 font-mono font-semibold text-2xl">{name}</h3>
      <p className="font-semibold font-mono mt-2 text-coral-red text-2xl">{price}</p>
    </div>
  );
};

export default ProductCard;
