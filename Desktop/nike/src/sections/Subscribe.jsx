import Button from "../component/button"
const Subscribe = () => {
  return (
    <section id="contact-us" className="flex justify-center max-lg:flex-col gap-10 items-center">
    <div>
      <h3 className="justify-center items-center flex text-3xl font-mono font-bold">
        Sign up for &nbsp; <span className="text-coral-red"> updates</span>
         & newsletter
      </h3>
      <div className="flex mt-10 justify-center max-sm:flex gap-5 w-full items-center border border-slate-gray rounded-full">
        <input type="email" 
        placeholder="subscribe@nike.com"
        className="input w-250  border-none"
        />
        <div className="flex justify-end items-center p-1.5 max-sm:w-full ">
          <Button label="signup" fullWidth />
        </div>
        
      </div>
    </div>
  </section>
  )  
}

export default Subscribe
