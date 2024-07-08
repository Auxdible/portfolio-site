"use client";
import { Button } from "@/components/ui/Button"
import Image from "next/image"
import Link from "next/link"
import { BsQuestionCircle } from "react-icons/bs"

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center max-w-lg mx-auto">
      <div className={"block mx-auto text-center font-roboto text-2xl text"}>
          <Image
            className={"mx-auto rounded-full border-2 p-2 border-orange-400"}
            src='/icon.png'
            alt="Auxdible's icon."
            width='150'
            height='150'
          />
          <h1 className={"text-5xl my-4 text-orange font-raleway font-bold text-title"}>Not Found</h1>
          <p>Couldn&apos;t find that page.</p>
          <div className={"flex justify-center gap-2 my-4"}>
          <Button className="text-xl" href='/'>Home</Button>
          </div>
      </div>
    </main>
  )
}
