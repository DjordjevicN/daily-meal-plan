import { Action } from "./../actions/index";
import { ActionType } from "./../action-types/index";
import { Dispatch } from "redux";
import axios from "axios";
import routes from "../../constants/routes";
import FormData from "form-data";
import { IUser } from "../../constants/types";
import { baseUrl } from "../../constants/utilFunc";

// USER
export const getUser = (value: number | string | null) => {
  return async (dispatch: Dispatch<Action>) => {
    const response = await axios.post(`${baseUrl()}${routes.GET_USER_BY_ID}`, {
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
  await axios.post(`${baseUrl()}/picture`, formData);
};

export const loginUser = (value: { email: string; password: string }) => {
  return async (dispatch: Dispatch<Action>) => {
    const response = await axios.post(
      `${baseUrl()}${routes.LOGIN_USER}`,
      value
    );
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
export const createUser = (value: IUser) => {
  return async () => {
    await axios.post(`${baseUrl()}${routes.CREATE_USER}`, value);
  };
};

export const updateUser = (value: IUser) => {
  return async (dispatch: any) => {
    const response = await axios.post(
      `${baseUrl()}${routes.UPDATE_USER}`,
      value
    );
    if (response.status === 200) {
      return dispatch(getUser(value.id));
    }
  };
};

// INGREDIENTS
export const getAllIngredients = () => {
  return async (dispatch: Dispatch<Action>) => {
    const response = await axios.get(
      `${baseUrl()}${routes.GET_ALL_INGREDIENTS}`
    );
    dispatch({
      type: ActionType.GET_ALL_INGREDIENTS,
      payload: response.data.results,
    });
  };
};
export const getIngredientByName = (value: any) => {
  return async (dispatch: Dispatch<Action>) => {
    const response = await axios.post(
      `${baseUrl()}${routes.GET_INGREDIENTS_BY_NAME}`,
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
    const response = await axios.post(
      `${baseUrl()}${routes.ADD_INGREDIENT}`,
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

export const upgradeIngredient = (value: any) => {
  return async (dispatch: any) => {
    await axios.post(`${baseUrl()}${routes.EDIT_INGREDIENT}`, { value });
    const imageData = {
      tableName: "ingredients",
      files: value.img,
      itemId: value.id,
    };
    dispatch(handleFile(imageData));
  };
};

export const deleteIngredients = (value: number | string) => {
  return async (dispatch: any) => {
    await axios.post(`${baseUrl()}${routes.DELETE_INGREDIENT}`, { value });
    dispatch(getAllIngredients());
  };
};
export const buyIngredients = (value: any) => {
  return async (dispatch: any) => {
    await axios.post(`${baseUrl()}${routes.PURCHASE_INGREDIENT}`, { value });
    dispatch(getAllIngredients());
  };
};

export const editIngredients = (value: any) => {
  return async (dispatch: any) => {
    await axios.post(`${baseUrl()}${routes.EDIT_INGREDIENT}`, { value });
    dispatch(getAllIngredients());
  };
};
// CREATE GLUE INGREDIENT
export const createIngredientInMeal = (mealId: number | string, value: any) => {
  return async (dispatch: any) => {
    value.ingredients.forEach(async (item: any) => {
      const data = {
        meal_id: mealId,
        ingredientId: item.id,
        amount: item.amount,
        unit: item.unit,
      };
      await axios.post(`${baseUrl()}${routes.CREATE_INGREDIENT_IN_MEAL}`, {
        data,
      });
    });
  };
};
// CREATE GLUE INGREDIENT
export const createMealSteps = (mealId: number, value: any) => {
  return async (dispatch: any) => {
    value.steps.forEach(async (item: any) => {
      const data = {
        meal_id: mealId,
        title: item.stepNum ?? item.title,
        description: item.description,
      };

      await axios.post(`${baseUrl()}${routes.CREATE_MEAL_STEP}`, {
        data,
      });
    });
  };
};
export const createStep = (value: any) => {
  return async (dispatch: any) => {
    await axios.post(`${baseUrl()}/add_step`, {
      value,
    });
  };
};

export const updateMealSteps = (value: any) => {
  return async (dispatch: any) => {
    await axios.post(`${baseUrl()}/update_step`, {
      value,
    });
  };
};
// GET USERS MEALS
export const getUsersMeals = (value: number) => {
  return async (dispatch: any) => {
    const response = await axios.post(
      `${baseUrl()}${routes.GET_MEAL_BY_USER_ID}`,
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

    const response = await axios.post(`${baseUrl()}${routes.CREATE_MEAL}`, {
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
      `${baseUrl()}${routes.GET_MEAL_INGREDIENTS}`,
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
    const response = await axios.post(`${baseUrl()}${routes.GET_MEALS_STEPS}`, {
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
    await axios.post(`${baseUrl()}/delete_meal`, {
      value,
    });
    dispatch(getUsersMeals(value.userId));
  };
};
// DELETE Ingredients in meal MEAL
export const deleteIngredientsInMeal = (value: { mealId: number }) => {
  return async (dispatch: any) => {
    await axios.post(`${baseUrl()}/delete_ingredients_in_meal`, {
      value,
    });
  };
};
export const deleteMealSteps = (value: { mealId: number }) => {
  return async (dispatch: any) => {
    await axios.post(`${baseUrl()}/delete_meal_steps`, {
      value,
    });
  };
};

export const updateMeal = (value: any) => {
  return async (dispatch: any) => {
    const mealInfo = {
      id: value.id,
      user_id: value.user_id,
      name: value.name,
      videoUrl: value.videoUrl,
    };

    await axios.post(`${baseUrl()}${routes.UPDATE_MEAL}`, {
      mealInfo,
    });
    const imageData = {
      tableName: "meal",
      files: value.img,
      itemId: value.id,
    };

    dispatch(deleteIngredientsInMeal(value.id));
    dispatch(createIngredientInMeal(value.id, value));
    // dispatch(deleteMealSteps(value.id));
    // dispatch(createMealSteps(value.id, value));
    dispatch(handleFile(imageData));
    dispatch(getUsersMeals(value.user_id));
  };
};
export const updateAmountAndUnitOfMeal = (value: any) => {
  return async (dispatch: any) => {
    await axios.post(`${baseUrl()}/update_amount_and_unit_of_meal`, {
      value,
    });
  };
};

export const addMealToDay = (value: any) => {
  return async (dispatch: any) => {
    const dayId = value.day_id;
    const checkResponse = await axios.post(
      `${baseUrl()}/check_if_meal_to_day`,
      {
        dayId,
      }
    );
    if (checkResponse.data.length === 0) {
      await axios.post(`${baseUrl()}/add_meal_to_day`, {
        value,
      });
    } else {
      value.id = checkResponse.data[0].id;
      const response = await axios.post(`${baseUrl()}/update_meal_to_day`, {
        value,
      });
      return response;
    }
  };
};
// ****************************
// CREATE PLAN KOMBO

export const createMealInDay = (day_id: number, meal_type: number) => {
  return async (dispatch: any) => {
    const value = {
      day_id: day_id,
      meal_type: meal_type,
    };
    await axios.post(`${baseUrl()}/create_meal_in_day`, value);
  };
};
export const createDay = (plan_id: number, weekDay_id: number) => {
  return async (dispatch: any) => {
    const value = {
      plan_id: plan_id,
      weekDay_id: weekDay_id,
    };
    const response = await axios.post(`${baseUrl()}/create_day`, value);

    for (let i = 0; i < 5; i++) {
      let day_id = response.data.insertId;
      let meal_type = i;
      dispatch(createMealInDay(day_id, meal_type));
    }
  };
};
export const createPlan = () => {
  return async (dispatch: any) => {
    const response = await axios.post(`${baseUrl()}/create_plan`);
    for (let i = 0; i < 7; i++) {
      let plan_id = response.data.insertId;
      let weekDay_id = i;
      dispatch(createDay(plan_id, weekDay_id));
    }
  };
};
// ****************************

export const getPlanById = (value: any) => {
  return async (dispatch: any) => {
    const response = await axios.post(`${baseUrl()}/get_plan_by_id`, { value });
    dispatch({
      type: ActionType.GET_PLAN_BY_ID,
      payload: response.data[0],
    });
  };
};

export const getPlanDays = (value: any) => {
  return async (dispatch: any) => {
    const response = await axios.post(`${baseUrl()}/get_plan_days`, {
      value,
    });
    dispatch({
      type: ActionType.GET_PLANE_DAYS,
      payload: response.data,
    });
  };
};

export const getMealsInDay = (value: any) => {
  return async (dispatch: any) => {
    const response = await axios.post(`${baseUrl()}/get_meals_in_day`, {
      value,
    });

    dispatch({
      type: ActionType.GET_TODAYS_MEALS,
      payload: response.data,
    });
  };
};
export const updateUsersCalories = (value: any) => {
  return async (dispatch: any) => {
    await axios.post(`${baseUrl()}/update_users_calories`, {
      value,
    });
  };
};
export const getTodaysMeals = (value: any) => {
  return async (dispatch: any) => {
    const response = await axios.post(`${baseUrl()}/get_todays_meals`, {
      value,
    });

    dispatch(getMealsInDay(response.data[0].id));
  };
};

export const clearSearchState = () => {
  return async (dispatch: any) => {
    dispatch({
      type: ActionType.CLEAR_SEARCH,
    });
  };
};
