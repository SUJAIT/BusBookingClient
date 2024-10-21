

const BusCard = () => {



  return (
    <div>
 <div>
          <div>
        <img src="https://i.ibb.co.com/S32RLtP/coche-de-pasajeros-azul-bus-viajes-ilustraci-n-de-dibujos-animados-dibujado-a-mano-ilustraci-n-festi.jpg" alt="" />
      </div>
    <p>This Is Bus</p>
    {/* carousel start */}
      <div className="carouselParent">

      <div className="carousel w-full">
  <div id="sl1" className="carousel-item relative w-full">
    <img
      src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp"
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#sl4" className="btn btn-circle">❮</a>
      <a href="#sl2" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="sl2" className="carousel-item relative w-full">
  <div className="rating">
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input
    type="radio"
    name="rating-2"
    className="mask mask-star-2 bg-orange-400"
    defaultChecked />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
</div>

    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#sl1" className="btn btn-circle">❮</a>
      <a href="#sl3" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="sl3" className="carousel-item relative w-full">
    <img
      src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp"
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#sl2" className="btn btn-circle">❮</a>
      <a href="#sl4" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="sl4" className="carousel-item relative w-full">
   <div className="ml-32 text-center">
   <div className="rating">
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input
    type="radio"
    name="rating-2"
    className="mask mask-star-2 bg-orange-400"
    defaultChecked />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
</div>
   <p>This Is Review</p>
   </div>
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#sl3" className="btn btn-circle">❮</a>
      <a href="#sl1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>

    </div>
    {/* carousel end */}
  
 </div>

    </div>
  )
}

export default BusCard
