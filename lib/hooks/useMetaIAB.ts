"use client";

import { useEffect, useState } from "react";

export default function useMetaIAB() {
    const [iab, setIAB] = useState(false);
    useEffect(() => {
        setIAB(!!navigator.userAgent.match(/FBAN|FBAV|INSTAGRAM/i));
    }, [iab]);
    return [iab]
} 