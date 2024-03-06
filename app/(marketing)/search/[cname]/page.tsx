"use client"
import React, { useEffect, useState } from 'react'
import { doctors } from "@/data/doctor-list";
import DoctorList from '@/components/doctor-list';

function Search({params}: any) {

  return (
    <div className='mt-5'>
        <DoctorList heading={params.cname} doctorList={doctors} />
    </div>
  )
}

export default Search