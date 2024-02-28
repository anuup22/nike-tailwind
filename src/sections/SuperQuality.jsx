import { shoe8 } from "../assets/images"
import Button from "../components/Button"

const SuperQuality = () => {
  return (
    <section 
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
    >
      <div className="flex flex-1 flex-col">
          <h2 className="font-palanquin text-4xl capitalize lg:max-w-lg font-bold">
            We Provide You
            <span className="text-coral-red"> Super</span>
            <span className="text-coral-red">Quality</span> Shoes
          </h2>
          <p className="mt-4 lg:max-w-lg info-text">
            Ensuring premium comfort and quality, our shoes are designed to provide you with the best experience. A footwear that is perfect for your active lifestyle. Providing you the unmatched quality and comfort you deserve. With innovation and touch of style, we are committed to provide you the best. Elegent and stylish, our shoes are perfect for all occasions.
          </p>
          <p className="mt-6 lg:max-w-lg info-text">
            Our dedication to details and excellence ensures your satisfaction
          </p>
          <div className="mt-9 ">
            {/* Shop now button */}
            <Button label="View Details"/>  
          </div>
      </div>
      <div className="flex-1 flex justify-center items-center">
        <img 
          src={shoe8}
          alt="Shoe8"
          width={570}
          height={522}
          className="object-contain" 
        />
      </div>
    </section>
  )
}

export default SuperQuality