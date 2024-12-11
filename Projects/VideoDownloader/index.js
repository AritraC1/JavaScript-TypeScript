const axios = require('axios');
const fs = require('fs');
const path = require('path');

async function downloadVideoWithRange(url, outputPath) {
    try {
        const response = await axios({
            method: 'HEAD', // Just to get the headers initially
            url: url,
        });

        const fileSize = response.headers['content-length'];
        const fileName = path.basename(url);
        const filePath = path.join(outputPath, fileName);
        const writer = fs.createWriteStream(filePath);

        let downloaded = 0;
        const CHUNK_SIZE = 1024 * 1024; // 1MB per chunk
        let start = 0;

        // Start downloading in chunks
        while (downloaded < fileSize) {
            const range = `bytes=${start}-${start + CHUNK_SIZE - 1}`;
            const chunkResponse = await axios({
                method: 'GET',
                url: url,
                headers: { Range: range },
                responseType: 'stream',
            });

            chunkResponse.data.pipe(writer, { end: false });

            chunkResponse.data.on('data', (chunk) => {
                downloaded += chunk.length;
                process.stdout.write(`Downloading: ${Math.round((downloaded / fileSize) * 100)}%\r`);
            });

            await new Promise((resolve) => {
                chunkResponse.data.on('end', resolve);
            });

            start += CHUNK_SIZE;
        }

        writer.on('finish', () => {
            console.log(`Download complete: ${filePath}`);
        });

        writer.on('error', (err) => {
            console.error('Error writing the file:', err);
        });

    } catch (error) {
        console.error('Error during the video download:', error);
    }
}

// Example usage:
const videoUrl = 'https://example.mp4'; // Replace with actual video URL
const outputFolder = './folder_name'; // Replace with folder name

if (!fs.existsSync(outputFolder)) {
    fs.mkdirSync(outputFolder, { recursive: true });
}

downloadVideoWithRange(videoUrl, outputFolder);