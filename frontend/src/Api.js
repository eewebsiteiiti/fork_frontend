// export let api = "http://localhost:8000/api";
// export let api = "https://eetest.profiles.iiti.ac.in/api";
// export let image_api = "https://eetest.profiles.iiti.ac.in";
// export let reads_api ="http://127.0.0.1:8000";
// src/api.js
import { API_BASE, IMAGE_BASE, READS_BASE } from "./config";

// Keep the same exported names so the rest of your code keeps working
export let api = `${API_BASE}/api`;
export let image_api = IMAGE_BASE;
export let reads_api = READS_BASE;
