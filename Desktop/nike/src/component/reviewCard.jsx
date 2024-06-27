import { star } from "../assets/icons"

const ReviewCard = ({imgURL,feedback,rating,customerName}) => {
  return (
    <div className="flex justify-center flex-1 flex-col items-center mt-8">
      <img src={imgURL} alt="avatar" width={120} height={120} className="rounded-full object-cover" />
      <p className=" text-slate-gray text-center info-text max-w-sm ">{feedback}</p>
      <div className=" flex m-4 justify-center items-center gap-2.5">
        <img src={star} alt="" width={24} height={24}  className=" object-contain"/>
        <p className="text-slate-gray">({rating})</p>
       
      </div>
     <h3 className="m-0 font-mono font-bold text-lg text-slate-gray">{customerName}</h3>
    </div>
  )
}

export default ReviewCard
