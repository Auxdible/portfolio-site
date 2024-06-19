import { Lato, Raleway } from "next/font/google";

export const raleway = Raleway({ 
    subsets: ["latin"],
    variable: "--font-raleway",
});
export const lato = Lato({ 
    subsets: ["latin"],
    variable: "--font-lato",
    weight: "300",
});