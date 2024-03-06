"use client";
import DoctorList from "@/components/doctor-list";
import { doctors } from "@/data/doctor-list";

interface Props {
  params: {
    cname: string;
  };
}
function Search({ params }: Props) {
  return (
    <div className="mt-5">
      <DoctorList heading={params.cname} doctorList={doctors} />
    </div>
  );
}

export default Search;
