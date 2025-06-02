import CONFIG from '../../globals/config';

const createRestaurantDetailTemplate = (book) => {

  return `
    <h2 class="restaurant__title">${book.name}</h2>
    <img class="restaurant__poster" src="${CONFIG.BASE_IMAGE_URL + book.pictureId}">
    <div class="restaurant__info">
      <h3>Information</h3>
      
      <h4>Kurikulum</h4>
      <p>${book.kurikulum || 'JavaScript'}, ${book.kurikulum || 'JavaScript'}</p>
      
      <h4>Categories</h4>
      <p>${book.name}</p>
    </div>
    
    <div class="restaurant__overview">
      <h3>Description</h3>
      <p>${book.description || 'No description available'}</p>
    </div>
    
    <div class="restaurant__menu">
      <h3>Contoh soal</h3>
      
      <div class="menu__food">
        <h4>Soal</h4>
        <ul>${book.soal}</ul>
      </div>
      
      <div class="menu__drink">
        <h4>Pembahasan</h4>
        <ul>${book.jawab}</ul>
      </div>
    </div>
  `;
};


const createRestaurantItemTemplate = (book) => `
  <div class="restaurant-item">
  
    <div class ="restaurant-item__header">
      <img class="lazyload restaurant-item__header__poster" alt="${book.name}"
           data-src="${CONFIG.BASE_IMAGE_URL + book.pictureId}">
      
    </div>
    <div class="restaurant-item__content">
      <h3><a href="/#/detail/${book.id}">${book.name}</a></h3>
      <p>${book.description}</p>
    </div>

  </div>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
