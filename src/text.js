const vision = require('@google-cloud/vision');
const client = new vision.ImageAnnotatorClient();

// Performs text detection on the image file
client
  .textDetection('./resources/image1.jpg')
  .then(results => {
    console.log('Text:');
    console.log(results[0].fullTextAnnotation.text)
  })
  .catch(err => {
    console.error('ERROR:', err);
  });