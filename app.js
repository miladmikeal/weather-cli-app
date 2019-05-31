const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

const location = process.argv[2];

if (location) {
  geocode(location, (error, { latitude, longitude, location }) => {
    if (error) {
      return console.log(error);
    }
    forecast(latitude, longitude, (error, { temperature, summary }) => {
      if (error) {
        return console.log(error);
      }
      console.log(location);
      console.log(`It is currently ${temperature}`);
      console.log(summary);
    });
  });
} else {
  console.log("Please provide a location.");
}
