"use client"
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Search } from 'lucide-react'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { categories } from '@/data/categories'

function CategorySearch() {  
  
  return (
    <div className='mb-10 items-center px-5 flex flex-col gap-2'>
        <h2 className='font-bold
        text-4xl tracking-wide'>
            Pesquise <span className='text-primary'>Profissionais</span></h2>
        <h2 className='text-gray-500 text-xl'>Pesquise seu médico e marque consulta em um clique</h2>

        <div className="flex w-full mt-3 max-w-sm items-center space-x-2">
      <Input type="text" placeholder="Pesquisar..." />
      <Button type="submit">
        <Search className='h-4 w-4 mr-2'/>
        Pesquisar</Button>
    </div>
        
        {/* Display List of Category  */}
        <div className='grid grid-cols-3 mt-5 md:grid-cols-4 lg:grid-cols-6 '>
        {categories.length > 0 ? categories.map((item,index)=>index < 6 && (
          <Link href={'/search/'+item.attributes.Name} key={index} className='flex 
          flex-col text-center items-center
          p-5 bg-blue-50 m-2 rounded-lg cursor-pointer
          gap-2 hover:scale-110 transition-all ease-in-out'>
            <Image src={item.attributes?.Icon?.data.attributes?.url}
            alt='icon'
            width={40}
            height={40}/>
            <label className='text-blue-600 text-sm'>{item?.attributes?.Name}</label>
          </Link>
        ))
      :
      [1,2,3,4,5,6].map((item,index) => (
        <div className=' bg-slate-200 m-2 w-[130px] h-[120px] rounded-lg animate-pulse' key={index}></div>
    ))
     
      }
        </div>
    </div>
  )
}

export default CategorySearch