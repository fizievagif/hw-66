import React, {useCallback, useEffect, useState} from 'react';
import {MealFormType, MealType} from "../../types";
import axiosApi from "../../axiosApi";
import Spinner from "../../Components/Spinner/Spinner";
import CaloriesForm from "../../Components/CaloriesForm/CaloriesForm";
import {useParams} from "react-router-dom";

const Edit = () => {
  const {id} = useParams();
  const [edit, setEdit] = useState<MealFormType | null>(null);
  const [loading, setLoading] = useState(false);

  const fetchMeal = useCallback(async () => {
    try {
      setLoading(true);
      const response = await axiosApi.get<MealType>('/meals/' + id + '.json');
      const responseData = response.data;

      if (responseData) {
        setEdit({...responseData, calories: responseData.calories.toString()});
      }
    } finally {
      setLoading(false);
    }
  },[id]);

  useEffect(() => {
    fetchMeal().catch(console.error);
  }, [fetchMeal]);

  const updateMeal = async (item: MealType) => {
    try {
      setLoading(true);
      await axiosApi.put('/meals/' + id + '.json', item);
      await fetchMeal().catch(console.error);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {loading ? <Spinner/> : edit && <CaloriesForm onSubmit={updateMeal} currentMeal={edit}/>}
    </div>
  );
};

export default Edit;