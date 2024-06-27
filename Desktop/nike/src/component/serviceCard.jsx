const ServiceCard = ({ imgURL,label,subtext}) => {
  return (
    <div className="flex-1 sm:w-[350px] sm:min-w-[350px] shadow-3xl w-full rounded-[20px] px-10 py-16 ">
        <div className="w-11 h-11 rounded-full bg-coral-red justify-center items-center flex">
            <img src={imgURL} alt=""  width={25} height={25}/>
        </div>
        <h3 className="font-bold font-mono text-3xl mt-3">{label}</h3>
        <p className=" mt-3 break-words text-slate-gray font-mono">{subtext}</p>
    </div>
  )
}

export default ServiceCard
