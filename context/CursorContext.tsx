import { createContext, Dispatch, SetStateAction } from "react";

export const CursorContext = createContext<{ hovered: boolean, setHovered: Dispatch<SetStateAction<boolean>> | null }>({ hovered: false, setHovered: null });