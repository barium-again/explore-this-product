// const fs = require('fs');
// const faker = require('faker');
// const { month, productName, youtubeVideo } = require('./dummyData.js');

// let random = n => {
//   return Math.floor(Math.random() * n);
// };

// let generateArticles = () => {
//   let array = [
//     {
//       image: faker.image.cats(),
//       title: faker.lorem.word()
//     }
//   ];
//   return array;
// };

// let generateExploresList = n => {
//   let array = [];
//   for (let i = 0; i < n; i++) {
//     array.push({
//       comments: faker.lorem.words(),
//       date: `${month[random(12)]} ${random(31)}`,
//       headerComments: faker.lorem.words(),
//       image: faker.image.image(),
//       productBrand: productName[random(5)],
//       user: faker.internet.userName()
//     });
//   }
//   return array;
// };

// let generateCarousel = n => {
//   let array = [];
//   for (let i = 0; i < n; i++) {
//     array.push({
//       prodDesc: faker.lorem.words(),
//       prodPrice: random(10),
//       productImg: faker.image.image(),
//       productNames: productName[random(4)]
//     });
//   }
//   return array;
// };

// generateVideos = () => {
//   let array = [];
//   for (let i = 0; i < 3; i++) {
//     array.push({
//       videoTitle: faker.lorem.words(),
//       videosList: youtubeVideo[random(3)],
//       videosThumbnail: faker.image.image()
//     });
//   }
//   return array;
// };

// let generate = n => {
//   let entry = {
//     productId: n,
//     exploresLists: generateExploresList(6),
//     videosLists: generateVideos(),
//     articlesLists: generateArticles(),
//     innerCarousel: generateCarousel(8)
//   };
//   return entry;
// };

// const file = fs.createWriteStream('data2.txt');

// function writeOneMillionTimes() {
//   var x = 3;
//   write();

//   function write() {
//     var ok = true;
//     do {
//       x -= 1;
//       if (x === 0) {
//         let data = generate(x);
//         file.write(JSON.stringify(data), () => console.log('DONE'));
//       } else {
//         let data = generate(x);
//         ok = file.write(JSON.stringify(data), () => console.log(x));
//       }
//     } while (x > 0 && ok);
//     if (x > 0) {
//       file.once('drain', write);
//     }
//   }
// }

// writeOneMillionTimes();
