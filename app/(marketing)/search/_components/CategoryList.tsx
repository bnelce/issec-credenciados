"use client";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { categories } from "@/data/categories";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
function CategoryList() {
  const params = usePathname();
  const category = params.split("/")[2];

  return (
    <div className="h-screen fixed mt-5 flex flex-col">
      <Command>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList className="overflow-visible">
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Suggestions">
            {categories &&
              categories.map((item, index) => (
                <CommandItem key={index}>
                  <Link
                    href={"/search/" + item?.attributes?.Name}
                    className={`p-2 flex gap-2
                text-[14px]
                text-blue-600
                items-center
                rounded-md cursor-pointer w-full
                ${category == item.attributes.Name && "bg-blue-100"}
                `}
                  >
                    <Image
                      src={item.attributes?.Icon?.data.attributes?.url}
                      alt="icon"
                      width={25}
                      height={25}
                    />
                    <label>{item.attributes.Name}</label>
                  </Link>
                </CommandItem>
              ))}
          </CommandGroup>
        </CommandList>
      </Command>
    </div>
  );
}

export default CategoryList;
