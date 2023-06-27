import Showdown from "showdown";

const converter = new Showdown.Converter({
    noHeaderId: true,
    ghCodeBlocks: true,
    parseImgDimensions: true,
    emoji: true
});
export default converter;