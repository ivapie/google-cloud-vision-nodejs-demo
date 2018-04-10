const vision = require("@google-cloud/vision");
const client = new vision.ImageAnnotatorClient();

// Performs web detection on the image file
client
  .webDetection("./resources/image1.jpg")
  .then(results => {
    const webDetection = results[0].webDetection;

    console.log("Fully matching images:");
    const fullyMatchingImages = webDetection.fullMatchingImages;
    fullyMatchingImages.forEach(content => console.log(content.url));

    console.log("\n");
    console.log("Partially Matched Images:");
    const partialMatchingImages = webDetection.partialMatchingImages;
    partialMatchingImages.forEach(content => console.log(content.url));

    console.log("\n");
    console.log("Pages with matching images:");
    const pages = webDetection.pagesWithMatchingImages;
    pages.forEach(page => console.log(page.url));

    console.log("\n");
    console.log("Web entities:");
    const entities = webDetection.webEntities;
    entities.forEach(content =>
      console.log(
        (content.description || content.entityId) + ", " + content.score
      )
    );
  })
  .catch(err => {
    console.error("ERROR:", err);
  });
