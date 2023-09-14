const fs = require('fs');
const ExifParser = require('exif-parser');

const folderPath = './IMG/test/'; // Update this with your folder path
const imageMetadata = [];

// Read the contents of the folder
fs.readdirSync(folderPath).forEach((filename) => {
    // Filter files with specific extensions (e.g., .jpg, .png)
    if (filename.toLowerCase().endsWith('.jpg') || filename.toLowerCase().endsWith('.png')) {
        const imagePath = `${folderPath}/${filename}`;
        
        // Read the image file
        const imageBuffer = fs.readFileSync(imagePath);

        // Parse EXIF data
        const parser = ExifParser.create(imageBuffer);
        const exifData = parser.parse();
        
        // Extract tags (assuming a specific EXIF tag contains tags)
        const tags = exifData; // Adjust this based on your EXIF data structure

        // Create an object representing the image and its metadata
        const imageObject = {
            imagePath: imagePath,
            tags: tags,
        };

        // Add the image object to the array
        imageMetadata.push(imageObject);
    }
});

// Output the image metadata as JSON
console.log(JSON.stringify(imageMetadata));