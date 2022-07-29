import { Action } from "./../actions/index";
import { ActionType } from "./../action-types/index";
import { Dispatch } from "redux";
import axios from "axios";
import { isLocal } from "../../constants/utilFunc";
import routes from "../../constants/routes";

const baseUrl = isLocal()
  ? "http://localhost:3001"
  : "https://jelovnik.nikola-djordjevic.com";
// USER
export const getUser = (value: any) => {
  return async (dispatch: Dispatch<Action>) => {
    const response = await axios.post(`${baseUrl}${routes.GET_USER}`, {
      value,
    });
    dispatch({
      type: ActionType.LOGIN_USER,
      payload: response.data[0],
    });
  };
};
export const loginUser = (value: any) => {
  return async (dispatch: Dispatch<Action>) => {
    const response = await axios.post(`${baseUrl}${routes.LOGIN_USER}`, value);
    if (response.data.error) {
      return console.log(response.data.msg);
    }
    localStorage.setItem("userId", response.data[0].id.toString());
    dispatch({
      type: ActionType.LOGIN_USER,
      payload: response.data[0],
    });
  };
};
export const createUser = (value: any) => {
  return async (dispatch: Dispatch<Action>) => {
    await axios.post(`${baseUrl}${routes.CREATE_USER}`, value);
  };
};
export const updateUser = (value: any) => {
  return async (dispatch: any) => {
    const response = await axios.post(`${baseUrl}${routes.UPDATE_USER}`, value);
    if (response.status === 200) {
      return dispatch(getUser(value.id));
    }
  };
};

// INGREDIENTS
export const getAllIngredients = () => {
  return async (dispatch: Dispatch<Action>) => {
    const response = await axios.get(`${baseUrl}/get_all_ingredients`);
    dispatch({
      type: ActionType.GET_ALL_INGREDIENTS,
      payload: response.data.results,
    });
  };
};
export const getIngredientByName = (value: any) => {
  return async (dispatch: Dispatch<Action>) => {
    const response = await axios.post(`${baseUrl}/get_ingredient_by_name`, {
      value,
    });

    dispatch({
      type: ActionType.GET_ING_BY_NAME,
      payload: response.data.results,
    });
  };
};
export const addNewIngredients = (value: any) => {
  return async (dispatch: any) => {
    await axios.post(`${baseUrl}/add_ingredients`, value);
    dispatch(getAllIngredients());
  };
};
export const deleteIngredients = (value: any) => {
  return async (dispatch: any) => {
    await axios.post(`${baseUrl}/delete_ing`, { value });
    dispatch(getAllIngredients());
  };
};
export const buyIngredients = (value: any) => {
  return async (dispatch: any) => {
    await axios.post(`${baseUrl}/purchase_made`, { value });
    dispatch(getAllIngredients());
  };
};

export const editIngredients = (value: any) => {
  return async (dispatch: any) => {
    await axios.post(`${baseUrl}/edit_ingredients`, { value });
    dispatch(getAllIngredients());
  };
};
// CREATE GLUE INGREDIENT
export const createIngredientInMeal = (mealId: any, value: any) => {
  return async (dispatch: any) => {
    value.ingredients.forEach(async (item: any) => {
      const data = {
        meal_id: mealId,
        ingredientId: item.id,
      };
      await axios.post(`${baseUrl}/ingredient_in_meal`, {
        data,
      });
    });
  };
};
// CREATE GLUE INGREDIENT
export const createMealSteps = (mealId: any, value: any) => {
  return async (dispatch: any) => {
    value.steps.forEach(async (item: any) => {
      const data = {
        meal_id: mealId,
        title: item.stepNum,
        description: item.description,
      };
      await axios.post(`${baseUrl}/add_meal_step`, {
        data,
      });
    });
  };
};

// CREATE MEAL
export const createMeal = (value: any) => {
  return async (dispatch: any) => {
    const mealInfo = {
      user_id: value.user_id,
      name: value.name,
      image: value.image,
      videoUrl: value.videoUrl,
    };

    const response = await axios.post(`${baseUrl}/create_meal`, {
      mealInfo,
    });
    dispatch(createIngredientInMeal(response.data.insertId, value));
    dispatch(createMealSteps(response.data.insertId, value));
  };
};

// GET USERS MEALS
export const getUsersMeals = (value: number) => {
  return async (dispatch: any) => {
    const response = await axios.post(`${baseUrl}/get_users_meals`, {
      value,
    });

    dispatch({
      type: ActionType.GET_USERS_MEALS,
      payload: response.data,
    });
  };
};
// GET MEALS INGREDIENTS
export const getMealsIngredients = (value: number) => {
  return async (dispatch: any) => {
    const response = await axios.post(`${baseUrl}/get_meals_ingredients`, {
      value,
    });
    dispatch({
      type: ActionType.GET_MEALS_INGREDIENTS,
      payload: response.data,
    });
  };
};
// GET MEALS STEPS
export const getMealsSteps = (value: number) => {
  return async (dispatch: any) => {
    const response = await axios.post(`${baseUrl}/get_meals_steps`, {
      value,
    });
    dispatch({
      type: ActionType.GET_MEALS_STEPS,
      payload: response.data,
    });
  };
};
