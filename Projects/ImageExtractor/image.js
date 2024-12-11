const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');
const path = require('path');
const mkdirp = require('mkdirp');

// CREATE FOLDER
async function folderCreate(images) {
  try {
    const folderName = await prompt("Enter Folder Name: ");

    // Folder creation (if folder exists, prompt user again)
    if (fs.existsSync(folderName)) {
      console.log("Folder already exists with that name. Please choose another.");
      return folderCreate(images);
    }

    // Create the folder
    await mkdirp(folderName);

    // Image downloading starts after folder creation
    downloadImages(images, folderName);
  } catch (error) {
    console.error(`Error creating folder: ${error.message}`);
    return folderCreate(images); // Retry folder creation if any error occurs
  }
}

// DOWNLOAD ALL IMAGES FROM THAT URL
async function downloadImages(images, folderName) {
  let count = 0;

  // Print total images found on the URL
  console.log(`Total ${images.length} Image(s) Found!`);

  if (images.length === 0) {
    console.log("No images found on the page.");
    return;
  }

  // Loop through images and download them
  for (let i = 0; i < images.length; i++) {
    const image = images[i];
    let imageLink = null;

    // Try fetching image URL using different possible attributes
    for (let attr of ['data-srcset', 'data-src', 'data-fallback-src', 'src']) {
      if (image.attribs[attr]) {
        imageLink = image.attribs[attr];
        break;
      }
    }

    if (!imageLink) {
      continue; // Skip to next image if no valid URL is found
    }

    try {
      const response = await axios.get(imageLink, { responseType: 'arraybuffer' });
      const imageData = response.data;

      // Create a unique filename (e.g., images1.jpg, images2.jpg)
      const imageFilename = path.join(folderName, `image${i + 1}.jpg`);

      // Write the image to disk
      fs.writeFileSync(imageFilename, imageData);
      count++;

      console.log(`Downloaded image ${i + 1} from ${imageLink}`);
    } catch (error) {
      console.log(`Failed to download image ${i + 1}: ${error.message}`);
    }
  }

  // Report result of image download
  if (count === images.length) {
    console.log("All images downloaded successfully!");
  } else {
    console.log(`${count} out of ${images.length} images downloaded.`);
  }
}

// MAIN FUNCTION TO PARSE URL AND START DOWNLOAD
async function main(url) {
  try {
    const response = await axios.get(url);
    const $ = cheerio.load(response.data);

    // Find all images in the URL
    const images = $('img').toArray();

    // Call folder creation function
    folderCreate(images);
  } catch (error) {
    console.error(`Error fetching URL: ${error.message}`);
  }
}

// Get URL input and start the program
async function prompt(message) {
  const readline = require('readline');
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  return new Promise((resolve) => {
    rl.question(message, (answer) => {
      rl.close();
      resolve(answer);
    });
  });
}

// Start the program
(async () => {
  const url = await prompt("Enter URL: ");
  main(url);
})();
