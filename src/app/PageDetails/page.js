"use client"
import { useSearchParams } from "next/navigation";

const Page = () => {
  const searchParams = useSearchParams();
  console.log(searchParams.get('name'));
  return (
    <div>Page</div>
  )
}

export default Page;