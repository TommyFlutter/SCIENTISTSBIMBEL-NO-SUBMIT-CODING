//* eslint-disable linebreak-style */

import { createRestaurantItemTemplate } from '../templates/template-creator';
import data from '../../data/DATA.json';

const DaftarResto = {
  async render() {
    return `
      <div class="content">
        <h2 class="content__heading">Daftar Produk Kursus Coding Ayo Daftar di BIMBEL SCIENTISTS WA 0858 8652 8913 </h2>
        <div id="restaurant-list" class="restaurant-list">
        </div>
      </div>
    `;
  },

  async afterRender() {
    try {
      console.log('API Response:', data); // Check the structure of `data`
      const restaurantListContainer = document.querySelector('#restaurant-list');
      for (let i=0; i<data.books.length; i++){
        restaurantListContainer.innerHTML += createRestaurantItemTemplate(data.books[i]);  // panggil method dari template
      }
      const restaurants = data.restaurants || []; // Adjust this based on the actual key
      if (Array.isArray(restaurants)) {
        restaurants.forEach((restaurant) => {
          restaurantListContainer.innerHTML += createRestaurantItemTemplate(restaurant);
        });
      } else {
        throw new Error('Invalid data format: expected an array');
      }
    } catch (error) {
      console.error('Error in afterRender:', error);
      document.querySelector('#restaurant-list').innerHTML = '<p>Failed to load restaurants.</p>';
    }
  },
};

export default DaftarResto;
