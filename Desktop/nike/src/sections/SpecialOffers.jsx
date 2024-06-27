import { arrowRight } from "../assets/icons"
import { offer } from "../assets/images"
import Button from "../component/button"
const SpecialOffers = () => {
  return (
    <section className=" flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className=" flex-1">
        <img src={offer} alt=""  width={673} height={587} className="object-contain w-full"/>
      </div>
      <div className=" flex flex-col">
          <h2 className=" capitalize font-mono text-4xl font-bold lg:max-w-screen-lg">
            we provide you <span className="text-coral-red">
              super
            </span>
            <br />
            <span className="text-coral-red">
              quality
            </span> shoes
          </h2>
          <p className=" mt-4 info-text lg:max-w-lg">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque ut placeat accusamus non fugit itaque earum alias numquam asperiores id. Recusandae sunt quia doloremque tenetur, necessitatibus suscipit illo dolor asperiores. </p>
          <p className="mt-6 lg:max-w-lg info-text">
            Our dedication to detail and excellence ensure your satisfaction.
          </p>
          <div className=" mt-6 flex flex-1 flex-wrap gap-6">
            <Button label="shop now"  iconURL={arrowRight}/>
            <Button label="learn more"
            backgroundColor="bg-white"
            borderColor="border-slate-gray"
            textColor="black"/>
          </div>
          
    </div>
    </section>
  )
}

export default SpecialOffers
