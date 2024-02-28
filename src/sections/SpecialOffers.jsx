import { arrowRight } from "../assets/icons"
import { offer } from "../assets/images"
import Button from "../components/Button"

const SpecialOffers = () => {
  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1">
        <img src={offer} width={773} height={687} className="object-contain w-full" />
      </div>
      <div className="flex flex-1 flex-col">
          <h2 className="font-palanquin text-4xl capitalize lg:max-w-lg font-bold">
            <span className="text-coral-red">Special</span> Offers
          </h2>
          <p className="mt-4 lg:max-w-lg info-text">
            Embark on a shopping journey that redefines your experience with unbeatable deals. From premier selections to incredible savings, we offer unparallel value that sets us apart.
          </p>
          <p className="mt-6 lg:max-w-lg info-text">
            Navigate a realm of endless possibilities with our special offers. We bring you the best of the best, so you can enjoy the finest products at the best prices. Your journey with us is nothing short or exceptional.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            {/* Shop now button */}
            <Button 
              label="Shop Now!" 
              iconURL={arrowRight}
            />  
            <Button 
              label="Learn more..." 
              backgroundColor="bg-white" 
              borderColor="border-slate-gray" 
              textColor="text-slate-gray" 
            />  
          </div>
      </div>
    </section>
  )
}

export default SpecialOffers