import CategorySearch from "@/components/category-search";
import DoctorList from "@/components/doctor-list";
import Hero from "@/components/hero";
import { buttonVariants } from "@/components/ui/button";
import { doctors } from "@/data/doctor-list";
import { cn } from "@/lib/utils";
import { Badge } from "lucide-react";
import { ComponentProps } from "react";


const posts = [
  {
    id: 1,
    nome: "Hospital São Mateus",
    endereco: "Endereço 1",
    municipio: "Crato",
    telefone: "(85) 99999-9999",
    whatsapp: "(85) 99999-9999",
    instaram: "https://www.instagram.com/issec",
    categorias: ["Odontologia", "Exames"],
    especialidades: ["Pneumologia", "Urologia"],
    procedimentos: [
      {
        id: 30201012,
        nome: "Biópsia de lábio ",
      },
      {
        id: 30201013,
        nome: "Cirurgia de pele",
      },
      {
        id: 30201055,
        nome: "Excisão em cunha",
      },
    ],
    published: "2022-01-01T00:00:00.000Z",
    createdAt: "2022-01-01T00:00:00.000Z",
  },
  {
    id: 2,
    nome: "Hospital Uniclinic",
    endereco: "Endereço 1",
    municipio: "Fortaleza",
    telefone: "(85) 99999-9999",
    whatsapp: "(85) 99999-9999",
    instaram: "https://www.instagram.com/issec",
    categorias: ["Urgência", "Exames"],
    especialidades: ["Cardiologia", "Dermatologia"],
    procedimentos: [
      {
        id: 30201012,
        nome: "Biópsia de lábio ",
      },
      {
        id: 30201013,
        nome: "Cirurgia de pele",
      },
      {
        id: 30201055,
        nome: "Excisão em cunha",
      },
    ],
    published: "2022-01-01T00:00:00.000Z",
    createdAt: "2022-01-01T00:00:00.000Z",
  },
];

export default async function IndexPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100 dark:bg-gray-900">
      <main className="flex-1">
      <div>        
        <Hero/>        
        <CategorySearch />
        <DoctorList doctorList={doctors}/>
    </div>
      </main> 
    </div>
  );
}
