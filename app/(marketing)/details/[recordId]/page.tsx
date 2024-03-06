"use client";
import { doctors } from "@/data/doctor-list";
import { useEffect, useState } from "react";
import DoctorDetail from "../_components/DoctorDetail";
import DoctorSuggestionList from "../_components/DoctorSuggestionList";

interface Props {
  params: {
    recordId: string;
  };
}
function Details({ params }: Props) {
  const [doctor, setDoctor] = useState();
  useEffect(() => {
    getDoctorById();
  }, []);
  const getDoctorById = () => {
    const res = doctors.find((doctor: any) => doctor.id == params.recordId);
    setDoctor(res);
  };
  return (
    <div className="p-5 md:px-10">
      <h2 className="font-bold text-[22px]">Details</h2>

      <div className="grid grid-cols-1 lg:grid-cols-4 ">
        {/* Doctor Detail  */}
        <div className=" col-span-3">
          {doctor && <DoctorDetail doctor={doctor} />}
        </div>
        {/* Doctor Suggestion  */}
        <div>
          <DoctorSuggestionList />
        </div>
      </div>
    </div>
  );
}

export default Details;
