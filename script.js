// Import modules
import { fetchData } from './fetchData.js';
import { renderGallery } from './renderGallery.js';

// API endpoint
const API_URL = 'https://jsonplaceholder.typicode.com/photos';

// Initialize application
async function init() {
    try {
        const data = await fetchData(API_URL);
        renderGallery(data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

// Run initialization function
init();


// fetchData.js

// Fetch data from API
export async function fetchData(url) {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error('Failed to fetch data');
    }
    return response.json();
}