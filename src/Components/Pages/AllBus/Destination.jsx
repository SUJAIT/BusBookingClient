import React, { useState } from 'react'
import BusSeats from './BusSeats'

const Destination = () => {

    const [from, setFrom] = useState('')
    const [to,setTo] = useState('')

    const handleFromChange = (event) =>{
        setFrom(event.target.value);
    }

    const handleToChange = (event) =>{
        setTo(event.target.value)
    }

console.log(from)
console.log(to)
    const isDestinationSelected = from && to;


  return (
 <div>
       <div className='p'>
      {
        !isDestinationSelected
        ?
        (
           <div className="w-full grid grid-cols-2 gap-10">
                 <div>
                    <label htmlFor="from" className='block mb-2 font-semibold'>
                        From
                    </label>
                    <select name="from" value={from} onChange={handleFromChange} id="from" className='w-310 appearance-none text-neutral-800 dark:text-neutral-100 placeholder:text-neutral-400 dark:bg-neutral-900/60 px-3 h-12 border border-neutral-200'>
                        <option value="">Select Location</option>
                        <option value="locatio1">Location 1</option>
                        <option value="location2">Location 2</option>
                        <option value="location3">Location 3</option>
                    </select>
                 </div>
            
                 <div>
                    <label htmlFor="from" className='block mb-2 font-semibold'>
                       To
                    </label>
                    <select name="to" value={to} onChange={handleToChange} id="from" className='w-310 appearance-none text-neutral-800 dark:text-neutral-100 placeholder:text-neutral-400 dark:bg-neutral-900/60 px-3 h-12 border border-neutral-200'>
                        <option value="">Select Location</option>
                        <option value="location1">Location 4</option>
                        <option value="location2">Location 5</option>
                        <option value="location3">Location 6</option>
                    </select>
                 </div>
           </div>
        )
        :
        (
            <div className='space-y-5'>
<h1 className='text-xl text-neutral-800 dark:text-neutral-100 font'>
Your Destination 
</h1>
<div className='w-full flex items-center gap-x-3'>
<div className="w-fit text-base font-semibold">
    From:- <span className="ml-1 5 font-medium">{from}</span>
</div>
<div className='flex-1'>
<div className="w-full h-[1px] border border-dashed border-neutral-200 dark:border-neutral-800/80"></div>
<div className="w-fit text-base font-semibold">
    To:- <span className="ml-1 5 font-medium">{to}</span>
</div>
</div>
</div>
            </div>
        )
      }
    </div>
    <BusSeats></BusSeats>
 </div>
  )
}

export default Destination
