"use client";


export default function BlogPostSkeleton() {
    function generateRandomString(amount: number, min: number = 1): string {
        const length = Math.floor(Math.random() * amount) + min;
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let result = '';
        for (let i = 0; i < length; i++) {
          result += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return result;
      }
    return (<article className={"flex w-full max-lg:flex-col"}>
        <div className="flex-1 flex-shrink-0 flex justify-center items-center">
            <span className="relative rounded-xl group hover:cursor-pointer w-96 h-32 bg-gray-500 animate-pulse"/>
            
        </div>
        <div className="flex-1 flex-shrink-0 flex flex-col max-lg:items-center gap-1 w-full">
        <span className={"flex flex-row font-roboto text-lg text-transparent bg-gray-500 w-fit animate-pulse select-none rounded-2xl my-1 gap-1"}>{generateRandomString(20, 10 )}</span>
        <h2 className="text-3xl text-transparent bg-gray-500 w-fit animate-pulse select-none rounded-2xl max-lg:text-center">{generateRandomString(20, 10)}</h2>
        <p className="animate-pulse text-lg max-lg:text-center whitespace-nowrap max-w-xs break-all break-words text-transparent bg-gray-500 w-fit select-none rounded-2xl h-auto">{generateRandomString(20, 10)} {generateRandomString(25, 15)}</p>
        <span className={"flex items-center gap-4 w-fit my-2"}>

        </span>
        </div>
    </article>)
}
