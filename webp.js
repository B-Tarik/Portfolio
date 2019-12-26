const imagemin = require("imagemin");
const imageminWebp = require("imagemin-webp");

imagemin(["public/images/png/*.{jpg,png}"], {
  destination: __dirname + "/public/images/webp",
  plugins: [imageminWebp({ quality: 75 })]
}).then(() => {
  console.log("Images optimized");
});


// commande: node webp.js