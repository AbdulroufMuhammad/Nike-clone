import { shoe8 } from "../assets/images"
import Button from "../component/button"
const SuperQuality = () => {
  return (
   <section id="about-us" className=" flex justify-between items-center max-lg:flex-col gap-19 w-full">
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
          <div className=" mt-6">
            <Button label="View Details" /> 
          </div>
          
    </div>
    <div className="flex flex-1 justify-center items-center">
      <img src={shoe8} alt="" 
      width={570} height={522} className=" object-contain"/>
    </div>
   </section>
  )
}

export default SuperQuality
