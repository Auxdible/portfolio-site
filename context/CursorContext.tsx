import { createContext } from "react";

export const CursorContext = createContext<{ hovered: boolean, setHovered: React.Dispatch<React.SetStateAction<boolean>> | null }>({ hovered: false, setHovered: null });