// ###########################note###############################
const ShoeCard = ({ imgUrl, changeBigPics, bigShoeImg }) => {
  const handleClick = () => {
    if (bigShoeImg !== imgUrl.bigShoe) {
      changeBigPics(imgUrl.bigShoe);
    }
  };

  return (
    <div
      className={`rounded-xl border-2 ${
        bigShoeImg === imgUrl.bigShoe ? "border-coral-red" : "border-transparent"
      } cursor-pointer max-sm:flex-1`}
      onClick={handleClick}
    >
      <div className="flex justify-center items-center bg-card bg-center bg-cover rounded-xl sm:h-32 sm:w-32 max-sm:p-4">
        <img src={imgUrl.thumbnail} alt="Shoe"  width={127} height={103} className="object-contain" />
      </div>
    </div>
  );
};

export default ShoeCard;
