import axios from "axios";
import { isLocal } from "../../constants/utilFunc";

const baseUrl = isLocal()
  ? "http://localhost:3001"
  : "https://jelovnik.nikola-djordjevic.com";

export const addBasicFoods = (value: any) => {
  return async (dispatch: any) => {
    await axios.post(`${baseUrl}/add_basic_foods`, {
      value,
    });
  };
};

export const scrapeMeals = (value: any) => {
  return async (dispatch: any) => {
    const response = await axios.post(`${baseUrl}/scrape_meals`, {
      value,
    });
    console.log(response.data);

    // eslint-disable-next-line array-callback-return
    response.data.map((item: any) => {
      let data = {
        etm_id: item.id,
        food_name: item.food_name,
        etm_image: item.images[0]?.image,
        imageCall: `https://images.eatthismuch.com/${item.images[0]?.image}`,
        alcohol: item.nutrition.alcohol,
        alpha_carotene: item.nutrition.alpha_carotene,
        beta_carotene: item.nutrition.beta_carotene,
        betaine: item.nutrition.betaine,
        caffeine: item.nutrition.caffeine,
        calcium: item.nutrition.calcium,
        calories: item.nutrition.calories,
        carbs: item.nutrition.carbs,
        cholesterol: item.nutrition.cholesterol,
        fats: item.nutrition.fats,
        fiber: item.nutrition.fiber,
        fructose: item.nutrition.fructose,
        glucose: item.nutrition.glucose,
        glutamic_acid: item.nutrition.glutamic_acid,
        alanine: item.nutrition.alanine,
        glycine: item.nutrition.glycine,
        histidine: item.nutrition.histidine,
        iron: item.nutrition.iron,
        lactose: item.nutrition.lactose,
        leucine: item.nutrition.leucine,
        magnesium: item.nutrition.magnesium,
        maltose: item.nutrition.maltose,
        manganese: item.nutrition.manganese,
        methionine: item.nutrition.methionine,
        monounsaturated_fats: item.nutrition.monounsaturated_fats,
        niacin: item.nutrition.niacin,
        pantothenic_acid: item.nutrition.pantothenic_acid,
        phenylalanine: item.nutrition.phenylalanine,
        phosphorus: item.nutrition.phosphorus,
        polyunsaturated_fats: item.nutrition.polyunsaturated_fats,
        potassium: item.nutrition.potassium,
        proline: item.nutrition.proline,
        proteins: item.nutrition.proteins,
        serine: item.nutrition.serine,
        sodium: item.nutrition.sodium,
        sucrose: item.nutrition.sucrose,
        sugar: item.nutrition.sugar,
        total_omega_3: item.nutrition.total_omega_3,
        total_omega_6: item.nutrition.total_omega_6,
        trans_fats: item.nutrition.trans_fats,
        tryptophan: item.nutrition.tryptophan,
        tyrosine: item.nutrition.tyrosine,
        valine: item.nutrition.valine,
        veggie_servings: item.nutrition.veggie_servings,
        vit_a: item.nutrition.vit_a,
        vit_a_iu: item.nutrition.vit_a_iu,
        vit_b6: item.nutrition.vit_b6,
        vit_b12: item.nutrition.vit_b12,
        vit_c: item.nutrition.vit_c,
        vit_d: item.nutrition.vit_d,
        vit_d2: item.nutrition.vit_d2,
        vit_d3: item.nutrition.vit_d3,
        vit_d_iu: item.nutrition.vit_d_iu,
        vit_e: item.nutrition.vit_e,
        vit_k: item.nutrition.vit_k,
        water: item.nutrition.water,
        zinc: item.nutrition.zinc,
      };
      dispatch(addBasicFoods(data));
    });
  };
};
