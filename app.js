const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

const location = process.argv[2];

// if (location) {
//   geocode(location, (error, { latitude, longitude, location }) => {
//     if (error) {
//       return console.log(error);
//     }
//     forecast(latitude, longitude, (error, { temperature, summary }) => {
//       if (error) {
//         return console.log(error);
//       }
//       console.log(location);
//       console.log(`It is currently ${temperature}`);
//       console.log(summary);
//     });
//   });
// } else {
//   console.log("Please provide a location.");
// }

if (location) {
  geocode(location)
    .then(data => {
      return forecast(data.latitude, data.longitude)
    })
    .then(data => {
      console.log(location)
      console.log(`It is currently ${data.temperature}`);
      console.log(data.summary);
    })
    .catch(err => console.log(err));
} else {
  console.log("Please provide a location.");
}