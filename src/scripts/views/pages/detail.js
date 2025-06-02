import UrlParser from '../../routes/url-parser';
import data from '../../data/DATA.json';
import { createRestaurantDetailTemplate } from '../templates/template-creator';
import LikeButtonPresenter from './like-button-presenter';

const Detail = {
  async render() {
    return `
      <div id="book-list" class="book"></div>
      <div id="likeButtonContainer"></div>
      

      
      </div>
    `;
  },

  async afterRender() {
    try {
      let book = null;
      const url = UrlParser.parseActiveUrlWithoutCombiner();
	      const restaurantListContainer = document.querySelector('#book-list');
	      for (let i=0; i<data.books.length; i++){
	        if (data.books[i].id == url.id){
	          book = data.books[i];
	          restaurantListContainer.innerHTML = createRestaurantDetailTemplate(book);
	        }
	      }
      const restaurantForLike = this._createRestaurantForLike(book);
	      const likeButtonContainer = document.querySelector('#likeButtonContainer');
	      await LikeButtonPresenter.init({
	        likeButtonContainer,
        restaurant: restaurantForLike,
	      });

      // Render existing reviews


      // Handle review submission

    } catch (error) {
      console.error(error);
      const restaurantListContainer = document.querySelector('#book-list');
      restaurantListContainer.innerHTML = '<p>Gagal memuat detail buku.</p>';
    }
  },
  _createRestaurantForLike(book) {
    return {
      id: book.id,
      name: book.name,
      description: book.description,
      pictureId: book.pictureId,
      kurikulum: book.kurikulum,
      soal: book.soal,
      jawab: book.jawab
    };
  },
};

export default Detail;
