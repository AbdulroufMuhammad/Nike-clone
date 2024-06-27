import { reviews } from "../constant"
import ReviewCard from "../component/reviewCard"
const CostumerReviews = () => {
  return (
  <section className=" max-container">
    <h3 className=" font-mono text-4xl font-bold text-center ">
      What our <span>
         customers
      </span> say
    </h3>
    <p className="text-center font-mono text-slate-gray info-text max-w-lg mt-4 m-auto">hear genuine review from our customer about there exceptional experience with us</p>
    <div className="flex flex-1 mt-24 justify-evenly max-lg:flex-col items-center gap-14">
      {reviews.map((review)=>(
       <ReviewCard  key={review.customerName}
        imgURL={review.imgURL}
        customerName={review.customerName}
        rating={review.rating}
        feedback={review.feedback}
       />
      ))}
    </div>
  </section>
  )
}

export default CostumerReviews
