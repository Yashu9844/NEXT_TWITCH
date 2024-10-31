"use client"

import qr from 'query-string'
import { Input } from "@/components/ui/input"
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import {SearchIcon , X} from 'lucide-react'



const Search = () => {

  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState('');

 const handleSubmit = (e : React.FormEvent<HTMLFormElement>)=>{
e.preventDefault();

 if(!searchTerm) return

 const url = qr.stringifyUrl({
  url:'/search',
  query: { term:searchTerm}
 },{skipEmptyString:true})

router.push(url)


 }


  return (
    <form onSubmit={handleSubmit}  className='flex w-full lg:w-[400px] items-center relative'  >
     <Input
     placeholder='Search'
     value={searchTerm}
     onChange={(e)=>setSearchTerm(e.target.value)}
     className='rounded-r-none focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0'
     
     />
      {searchTerm && 
      <X className='absolute top-1.8 right-12 h-5 w-5 hover:opacity-75 text-muted-foreground
      transition cursor-pointer
      ' onClick={()=>setSearchTerm("")} />
      
      }


     <Button
     type='submit'
     size={"sm"}
     variant={"secondary"}
     className='rounded-l-none'

     >
       <SearchIcon className='h-5 w-5 text-muted-foreground'  />
     </Button>

    </form>
  );
};

export default Search;