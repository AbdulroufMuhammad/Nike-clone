import { products } from "../constant"
import ProductCard from "../component/ProductCard"
const PopularProduct = () => {
  return (
    <section id="products" className="max-container max-sm:mt-20">
      <div className="flex flex-col justify-start gap-5">
        <h2 className=" flex gap-2 text-4xl font-mono font-extrabold">Our <span className=" text-coral-red">Popular</span> Products</h2>
        <p className=" lg:max-w-lg mt-16 text-slate-gray ">Experience our Top-notch quality and style
          with our sort after selections.Discover a world of comfort,design
          and Value </p>
      </div>
      <div className=" mt-16 grid lg:grid-cols-4 md:grid-col-3 sm:grid-cols-2 grid-cols-1 sm:justify-center sm:items-center
       sm:gap-4 gap-14">
          {products.map((product)=>(
           <ProductCard key={product.name} {...product}/>
          ))}
      </div>
    </section>
  )
}

export default PopularProduct
