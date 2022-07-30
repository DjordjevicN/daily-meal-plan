import { Action } from "./../actions/index";
import { ActionType } from "./../action-types/index";
import { Dispatch } from "redux";
import axios from "axios";
import { isLocal } from "../../constants/utilFunc";
import routes from "../../constants/routes";
import FormData from "form-data";

const baseUrl = isLocal()
  ? "http://localhost:3001"
  : "https://jelovnik.nikola-djordjevic.com";
// USER
export const getUser = (value: any) => {
  return async (dispatch: Dispatch<Action>) => {
    const response = await axios.post(`${baseUrl}${routes.GET_USER_BY_ID}`, {
      value,
    });
    dispatch({
      type: ActionType.LOGIN_USER,
      payload: response.data[0],
    });
  };
};

const handleFile = async (value: any) => {
  const formData = new FormData();
  formData.append("picture", value.files);
  formData.append("tableName", value.tableName);
  formData.append("itemId", `${value.itemId}`);
  await axios.post(`${baseUrl}/picture`, formData);
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
    const response = await axios.get(`${baseUrl}${routes.GET_ALL_INGREDIENTS}`);
    dispatch({
      type: ActionType.GET_ALL_INGREDIENTS,
      payload: response.data.results,
    });
  };
};
export const getIngredientByName = (value: any) => {
  return async (dispatch: Dispatch<Action>) => {
    const response = await axios.post(
      `${baseUrl}${routes.GET_INGREDIENTS_BY_NAME}`,
      {
        value,
      }
    );

    dispatch({
      type: ActionType.GET_ING_BY_NAME,
      payload: response.data.results,
    });
  };
};
export const addNewIngredients = (value: any) => {
  return async (dispatch: any) => {
    console.log(value);

    const response = await axios.post(
      `${baseUrl}${routes.ADD_INGREDIENT}`,
      value
    );
    const imageData = {
      tableName: "ingredients",
      files: value.img,
      itemId: response.data.insertId,
    };
    dispatch(getAllIngredients());
    dispatch(handleFile(imageData));
  };
};
export const deleteIngredients = (value: any) => {
  return async (dispatch: any) => {
    await axios.post(`${baseUrl}${routes.DELETE_INGREDIENT}`, { value });
    dispatch(getAllIngredients());
  };
};
export const buyIngredients = (value: any) => {
  return async (dispatch: any) => {
    await axios.post(`${baseUrl}${routes.PURCHASE_INGREDIENT}`, { value });
    dispatch(getAllIngredients());
  };
};

export const editIngredients = (value: any) => {
  return async (dispatch: any) => {
    await axios.post(`${baseUrl}${routes.EDIT_INGREDIENT}`, { value });
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
        amount: item.amount,
        unit: item.unit,
      };
      await axios.post(`${baseUrl}${routes.CREATE_INGREDIENT_IN_MEAL}`, {
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
      await axios.post(`${baseUrl}${routes.CREATE_MEAL_STEP}`, {
        data,
      });
    });
  };
};
// GET USERS MEALS
export const getUsersMeals = (value: number) => {
  return async (dispatch: any) => {
    const response = await axios.post(
      `${baseUrl}${routes.GET_MEAL_BY_USER_ID}`,
      {
        value,
      }
    );

    dispatch({
      type: ActionType.GET_USERS_MEALS,
      payload: response.data,
    });
  };
};
// CREATE MEAL
export const createMeal = (value: any) => {
  return async (dispatch: any) => {
    const mealInfo = {
      user_id: value.user_id,
      name: value.name,
      videoUrl: value.videoUrl,
    };

    const response = await axios.post(`${baseUrl}${routes.CREATE_MEAL}`, {
      mealInfo,
    });

    const imageData = {
      tableName: "meal",
      files: value.image,
      itemId: response.data.insertId,
    };

    dispatch(createIngredientInMeal(response.data.insertId, value));
    dispatch(createMealSteps(response.data.insertId, value));
    dispatch(getUsersMeals(mealInfo.user_id));
    dispatch(handleFile(imageData));
  };
};

// GET MEALS INGREDIENTS
export const getMealsIngredients = (value: number) => {
  return async (dispatch: any) => {
    const response = await axios.post(
      `${baseUrl}${routes.GET_MEAL_INGREDIENTS}`,
      {
        value,
      }
    );
    dispatch({
      type: ActionType.GET_MEALS_INGREDIENTS,
      payload: response.data,
    });
  };
};
// GET MEALS STEPS
export const getMealsSteps = (value: number) => {
  return async (dispatch: any) => {
    const response = await axios.post(`${baseUrl}${routes.GET_MEALS_STEPS}`, {
      value,
    });
    dispatch({
      type: ActionType.GET_MEALS_STEPS,
      payload: response.data,
    });
  };
};
// DELETE MEAL
export const deleteMeal = (value: { userId: number; mealId: number }) => {
  return async (dispatch: any) => {
    await axios.post(`${baseUrl}/delete_meal`, {
      value,
    });
    dispatch(getUsersMeals(value.userId));
  };
};
