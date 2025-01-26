// backend/axios.js (or utils/axios.js, depending on your structure)
const axios = require("axios");

// Define the base URL for local development
const baseURL = "http://localhost:5000"; // Local backend URL for development

// Set up the Axios instance with the base URL
const instance = axios.create({
  baseURL, // Use the local backend URL
  timeout: 10000, // Optional: sets a timeout for requests
});

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
