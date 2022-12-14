import React, {useCallback, useEffect, useState} from 'react';
import {useLocation} from "react-router-dom";
import {MealGetType} from "../../types";
import axiosApi from "../../axiosApi";
import Meal from "../Meal/Meal";
import Spinner from "../Spinner/Spinner";

const Meals: React.FC = () => {
  const [meal, setMeals] = useState<MealGetType[]>([]);
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  const axiosPost = useCallback(async () => {
    try {
      setLoading(true);
      const response = await axiosApi.get('/meals.json');
      const responseData = response.data;

      if (responseData !== null || undefined) {
        const mealsKeys = Object.keys(responseData).map(key => {
          const mealsTracker = responseData[key];
          mealsTracker.id = key;
          return mealsTracker;
        });
        setMeals(mealsKeys);
      }
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  }, []);

  const totalCalories = meal.reduce((acc, elem) => acc + Number(elem.calories), 0);

  const remove = async (id: string) => {
    try {
      await axiosApi.delete('/meals/' + id + '.json');
      setMeals([]);
      await axiosPost();
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    if (location.pathname === '/') {
      void axiosPost();
    }
  }, [axiosPost, location])

  let isPostOrNot;

  if (meal.length !== 0) {
    isPostOrNot = meal.map(meal => (
      <Meal
        key={meal.id}
        meal={meal}
        removeBtn={() => remove(meal.id)}
      />
    ));
  } else {
    isPostOrNot = <h1 className="text-center">Unfortunately there are no posts</h1>
  }

  return (
    <>
      <div>
        <p><b>Total: </b>{totalCalories} <b>kcal</b></p>
      </div>
      {loading ? <Spinner/> : isPostOrNot}
    </>
  );
};

export default Meals;