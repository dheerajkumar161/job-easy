import path from "path";
import DataUriParser from "datauri/parser.js"; // or "datauri/parser.js" if using the npm version

const getDataUri = (file) => {
    if (!file || !file.originalname || !file.buffer) {
        console.warn("⚠️  getDataUri: file object is missing or malformed");
        return null;
    }

    const parser = new DataUriParser();
    const extName = path.extname(file.originalname);
    const formatted = parser.format(file.originalname, file.buffer);

    return formatted.content; // 👈 important: return the .content property
};

export default getDataUri;
