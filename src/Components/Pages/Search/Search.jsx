
import '../../.././Components/Pages/Search/Search.css'

import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"
 
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { useState } from 'react'



const Search = () => {

  const [date, setDate] = useState()

console.log(date)
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
  <Popover>
     <PopoverTrigger asChild>
     <Button
         variant={"none"}
         className={cn(
           " justify-start text-left font-normal",
           !date && "text-muted-foreground"
         )}
       >
         <CalendarIcon />
         {date ? format(date, "PPP") : <span>Pick a date</span>}
       </Button>
     </PopoverTrigger>
     <PopoverContent className="w-auto p-0">
       <Calendar
         mode="single"
         selected={date}
         onSelect={setDate}
         initialFocus
       />
     </PopoverContent>
   </Popover>
</div>


   

  </div>

 </div>    
    </div>



  )
}

export default Search
