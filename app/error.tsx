"use client";

import Image from 'next/image'
import Link from 'next/link';
import { useEffect } from 'react';

type ErrorProps = { error: Error, reset: () => void };
export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error(error)
  }, [error])
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
          <h1 className={"text-4xl p-4 text-orange font-montserrat text-primary"}>Error!</h1>
          <p>An error occurred trying to do this.</p>
          <div className={"flex justify-center gap-10 my-4"}>
          <Link className={"flex-1 transition-color duration-100 hover:dark:text-orange-400 hover:text-orange-600 flex-grow flex-shrink"} href="/">Home</Link>
          <a className={"cursor-pointer transition-color duration-100 hover:dark:text-orange-400 hover:text-orange-600 flex-1 flex-grow flex-shrink"} onClick={() => reset()}>Try Again</a>
          </div>
      </div>
    </main>
  )
}
