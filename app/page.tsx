import Image from 'next/image'

export default function Home() {
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
          <h1 className={"text-4xl p-4 text-orange font-montserrat text-primary"}>Under Construction</h1>
          <p>This is the portfolio site for the Full Stack Developer, Auxdible. It is currently under construction. Please be patient!</p>
      </div>
    </main>
  )
}
