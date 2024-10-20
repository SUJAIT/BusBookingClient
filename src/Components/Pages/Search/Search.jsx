
import '../../.././Components/Pages/Search/Search.css'




const Search = () => {




  return (
  

 <div className='allHW'>
     <div className='search ml-'>
  <div className='inputParent'>

<div className='inputBox form__group-fast'>
  <p className='text-sm'>FROM</p>
 <input type="text" placeholder='Choose a location'/>
</div>
<div className='inputBox form__group-fast'>
  <p className='text-sm'>TO</p>
 <input type="text" placeholder='Choose a location'/>
</div>
<div className='inputBox form__group-fast'>
  <p className='text-sm'>BUS TYPE</p>
 <input type="text" placeholder='ALL'/>
</div>
<div className='inputBox'>
  <p className='text-sm'>DEPARTURE DATE</p>
 <input type="text" placeholder="Date Pik" />
</div>


   

  </div>

 </div>    
    </div>



  )
}

export default Search
