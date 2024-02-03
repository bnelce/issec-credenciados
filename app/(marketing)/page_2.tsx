import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";

export default async function IndexPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100 dark:bg-gray-900">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Hospitais, clínicas e profissionais credenciados ao ISSEC
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Descubra uma ampla gama de profissionais de saúde credenciados
                  para atender às suas necessidades, oferecendo qualidade e
                  conveniência no plano de saúde dos servidores do governo do
                  Ceará.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex space-x-2">
                  <Input
                    className="flex-1"
                    placeholder="Search terms, categories, city, medical specialty, procedures..."
                    type="search"
                  />
                  <Button type="submit">
                    <SearchIcon className="h-5 w-5" />
                    <span className="sr-only">Search</span>
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                Resultados
              </h2>
              <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                Encontramos os seguintes resultados para sua pesquisa.
              </p>
            </div>
            <div className="grid w-full grid-cols-2 lg:grid-cols-3 items-start gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Hospital Name</CardTitle>
                  <CardDescription>
                    Address, City, State, Country
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <img
                    alt="Image"
                    className="aspect-video overflow-hidden rounded-xl object-cover object-center"
                    height="310"
                    src="/placeholder.svg"
                    width="550"
                  />
                  <div className="mt-4">
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Specialties: Specialty 1, Specialty 2, Specialty 3
                    </p>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" variant="outline">
                    View Profile
                  </Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Clinic Name</CardTitle>
                  <CardDescription>
                    Address, City, State, Country
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <img
                    alt="Image"
                    className="aspect-video overflow-hidden rounded-xl object-cover object-center"
                    height="310"
                    src="/placeholder.svg"
                    width="550"
                  />
                  <div className="mt-4">
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Specialties: Specialty 1, Specialty 2, Specialty 3
                    </p>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" variant="outline">
                    View Profile
                  </Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Doctor Name</CardTitle>
                  <CardDescription>
                    Address, City, State, Country
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <img
                    alt="Image"
                    className="aspect-video overflow-hidden rounded-xl object-cover object-center"
                    height="310"
                    src="/placeholder.svg"
                    width="550"
                  />
                  <div className="mt-4">
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Specialties: Specialty 1, Specialty 2, Specialty 3
                    </p>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" variant="outline">
                    View Profile
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
