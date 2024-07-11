import { useThree } from "@react-three/fiber"
import { useLayoutEffect } from "react"

export function Precompile() {
    const { gl, scene, camera } = useThree()
    useLayoutEffect(() => void gl.compile(scene, camera))
    return null;
}