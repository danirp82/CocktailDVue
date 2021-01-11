import axios from "axios";

class CocktailService {
  async getIngredientsList(i) {
    try {
      const response = await axios.get(
        `${process.env.VUE_APP_API_URL}filter.php?i=${i}`
      );
      return response.data.drinks;
    } catch (error) {
      console.error(error);
    }
  }
}

export default new CocktailService();
