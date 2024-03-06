import Hero from "@/components/hero";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Badge } from "lucide-react";
import Link from "next/link";

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
  // const [mail, setMail] = useMail();
  function getBadgeVariantFromLabel(
    label: string
  ): ComponentProps<typeof Badge>["variant"] {
    if (["work"].includes(label.toLowerCase())) {
      return "default";
    }

    if (["personal"].includes(label.toLowerCase())) {
      return "outline";
    }

    return "secondary";
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-100 dark:bg-gray-900">
      <main className="flex-1">
      <div>
        {/* Hero Section  */}
        <Hero/>

        {/* Search bar + Categories  */}
        {/* <CategorySearch/> */}

        {/* Popular Doctor List  */}
        {/* <DoctorList doctorList={doctorList}/> */}
    </div>
        <section
          id="credenciados"
          className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-800"
        >
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                Credenciados
              </h2>
              <p className="mx-auto text-gray-500 md:text-xl dark:text-gray-400">
                Filtre por especialidade, procedimento e veja o perfil de cada
                um dos credenciados
              </p>
            </div>
            <div>
              {/* {posts.map((post) => (
                    <PostItem key={post.id} post={post} />
                  ))} */}
              {posts.map((item) => (
                <button
                  key={item.id}
                  className={cn(
                    "flex flex-col w-full mt-2 items-start gap-2 rounded-lg border p-3 text-left text-sm transition-all hover:bg-accent"
                  )}
                >
                  <div className="flex w-full flex-col gap-1">
                    <div className="flex items-center">
                      <div className="flex items-center gap-2">
                        <div className="font-semibold">{item.nome}</div>
                        {/* {!item.read && (
                              <span className="flex h-2 w-2 rounded-full bg-blue-600" />
                            )} */}
                      </div>
                      <div
                        className={cn(
                          "ml-auto text-xs text-muted-foreground"
                          /* mail.selected === item.id
                                ? "text-foreground"
                                : "text-muted-foreground" */
                        )}
                      >
                        {item.municipio}
                      </div>
                    </div>
                    <div className="text-xs font-medium">{item.endereco}</div>
                  </div>
                  <div className="line-clamp-2 text-xs text-muted-foreground">
                    {item.nome.substring(0, 300)}
                  </div>
                  {item.especialidades.length ? (
                    <div className="flex items-center gap-2">
                      {item.especialidades.map((label) => (
                        <Badge
                          key={label}
                          variant={getBadgeVariantFromLabel(label)}
                        >
                          {label}
                        </Badge>
                      ))}
                    </div>
                  ) : null}
                </button>
              ))}
            </div>
            )
          </div>
        </section>
      </main>
    </div>
  );
}
