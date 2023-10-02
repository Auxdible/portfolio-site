export default function useMetaIAB() {
    return [!!navigator.userAgent.match(/FBAN|FBAV|INSTAGRAM/i)];
} 