// backend/axios.js (or utils/axios.js)
const axios = require("axios");

// Check if we are in development or production
const baseURL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:5000" // Local backend URL for development
    : "https://second-backend-7.onrender.com"; // Remote backend URL for production

// Set up the Axios instance with the dynamic base URL
const instance = axios.create({
  baseURL, // Dynamically use baseURL
  timeout: 10000, // optional: sets a timeout for requests
});

// Optionally, add interceptors if needed for handling authentication tokens, etc.

module.exports = instance;

// Optionally, add interceptors if needed for handling authentication tokens, etc.
// Example:
// instance.interceptors.request.use(
//   (config) => {
//     // Modify config before the request is sent
//     return config;
//   },
//   (error) => {
//     // Handle the request error
//     return Promise.reject(error);
//   }
// );

module.exports = instance;

// // backend/axios.js (or utils/axios.js, depending on your structure)
// const axios = require("axios");

// // Set up the Axios instance with a base URL
// const instance = axios.create({
//   baseURL: "http://localhost:5000/api", // replace with your backend URL
//   timeout: 10000, // optional: sets a timeout for requests
// });

// // Optionally, add interceptors if needed for handling authentication tokens, etc.

// module.exports = instance;
