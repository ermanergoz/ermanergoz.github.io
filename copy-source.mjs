import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// Use these to get the directory name
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Function to get all .tsx files recursively
function getFiles(dirPath, arrayOfFiles = []) {
  const files = fs.readdirSync(dirPath);

  files.forEach((file) => {
    const filePath = path.join(dirPath, file);
    if (fs.statSync(filePath).isDirectory()) {
      arrayOfFiles = getFiles(filePath, arrayOfFiles);
    } else if (
      file.endsWith(".tsx") ||
      file.endsWith(".ts") ||
      file.endsWith(".js") ||
      file.endsWith(".scss")
    ) {
      arrayOfFiles.push(filePath);
    }
  });
  return arrayOfFiles;
}

// Specify the directory containing your source code
const sourceDir = path.join(__dirname, "src");

// Get all .tsx files in the source directory
const tsxFiles = getFiles(sourceDir);

// Initialize a variable to store the concatenated content
let concatenatedContent = "";
tsxFiles.forEach((file) => {
  const content = fs.readFileSync(file, "utf8");
  concatenatedContent += `${content}`;
});

// Write the concatenated content to a .txt file
const outputFilePath = path.join(__dirname, "source_code.txt");
fs.writeFileSync(outputFilePath, concatenatedContent);

console.log("Source code has been copied to source_code.txt");
