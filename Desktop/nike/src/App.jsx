import {
  Hero,CostumerReviews,Services,SpecialOffers,Subscribe,SuperQuality,Footer,PopularProduct
} from './sections/index'
import Nav from './component/Nav'
const App =()=>(
  <main className="relative">
    <Nav/>
    <section className="xl:padding- 1 wide:padding-b padding-r">
      <Hero/>
    </section>
    <section className="padding">
      <PopularProduct/>
    </section>
    <section className="padding">
      <SuperQuality />
    </section>
    <section className="padding-x py-10">
      <Services />
    </section>
    <section className="padding">
      <SpecialOffers/>
    </section>
    <section className="padding bg-pale-blue">
      <CostumerReviews/>
    </section>
    <section className="padding-x sm:py-32 py-16 w-full">
     <Subscribe/>
    </section>
    <section className="padding bg-black padding-x padding-t pb-8">
      <Footer/>
    </section>
  </main>
)
export default App