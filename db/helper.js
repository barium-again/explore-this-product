const fs = require('fs');
const path = require('path');

const Explores = require('./model.js');
const mockarooData = require('../data.js');
const {
  articlesImage,
  exploresImage,
  youtubeVideo,
  youtubeThumbnail,
  month,
  productImg,
  productNames
} = require('../sephoraData.js');

let saveExplore = data => {
  data.forEach((entry, index) => {
    entry = new Explores({
      productId: entry.id,
      exploresLists: entry.explores,
      videosLists: entry.videos,
      articlesLists: entry.articles,
      innerCarousel: entry.innerCarousel
    })
      .save()
      .then(() => console.log(index))
      .catch(() => console.log('Failed'));
  });
};

let randGen = n => Math.floor(Math.random() * n);

let adjust = array => {
  for (let i = 0; i < array.length; i++) {
    array[i].image = exploresImage[randGen(30)];
    array[i].date = month[randGen(12)] + ' ' + randGen(31);
  }
  return array;
};

let adjustedData = adjust(mockarooData.mockarooData);

let generateData = (array, n) => {
  let products = [];
  for (let i = 1; i <= n; i++) {
    let entry = {
      id: i,
      explores: [],
      videos: [],
      articles: [],
      innerCarousel: []
    };

    let trackerObj = {};
    let productTracker = {};
    let videotracker = {};

    let arrayLengthGenerator = Math.max(randGen(30), 6);
    for (let k = 0; k < arrayLengthGenerator; k++) {
      let random = randGen(100);
      if (!trackerObj[array[random].image]) {
        trackerObj[array[random].image] = array[random].image;
        entry.explores.push(array[random]);
      }
    }

    while (entry.innerCarousel.length < Math.max(randGen(15), 8)) {
      let index = randGen(14);
      if (!productTracker[productImg[index]]) {
        productTracker[productImg[index]] = productImg[index];
        entry.innerCarousel.push({
          productNames: productNames[randGen(20)],
          productImg: productImg[index],
          prodDesc: mockarooData.mockarooData[randGen(600)].headerComments,
          prodPrice: randGen(100)
        });
      }
    }

    for (let k = 0; k < Math.max(randGen(10), 2); k++) {
      let index = randGen(9);
      if (!videotracker[youtubeVideo[index]]) {
        videotracker[youtubeVideo[index]] = youtubeVideo[index];
        entry.videos.push({
          videoTitle: mockarooData.mockarooData[randGen(600)].headerComments,
          videosList: youtubeVideo[index],
          videosThumbnail: youtubeThumbnail[index]
        });
      }
    }

    entry.articles.push({
      image: articlesImage[randGen(15)],
      title: mockarooData.mockarooData[randGen(600)].headerComments
    });
    // return entry;
    products.push(entry);
  }

  return products;
};

const file = fs.createWriteStream(`sample.txt`);

function writeOneMillionTimes(data, callback) {
  var x = 1e7;
  write();

  function write() {
    var ok = true;
    do {
      x -= 1;
      if (x === 0) {
        var data = JSON.stringify(generateData(adjustedData, 1));
        file.write(data, () => console.log('DONE'));
      } else {
        var data = JSON.stringify(generateData(adjustedData, 1));
        ok = file.write(data, () => console.log(x));
      }
    } while (x > 0 && ok);
    if (x > 0) {
      file.once('drain', write);
    }
  }
}

// writeOneMillionTimes();
let dataArr = generateData(adjustedData, 10);
saveExplore(dataArr);
