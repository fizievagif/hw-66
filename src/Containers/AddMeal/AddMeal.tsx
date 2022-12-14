import React, {useState} from 'react';
import CaloriesForm from "../../Components/CaloriesForm/CaloriesForm";
import {useNavigate} from "react-router-dom";
import Spinner from "../../Components/Spinner/Spinner";
import {MealType} from "../../types";
import axiosApi from "../../axiosApi";

const AddMeal = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const addNewMeal = async (item: MealType) => {
    try {
      setLoading(true)
      await axiosApi.post('/meals.json', item);
      navigate('/')
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {loading ? <Spinner/> : <CaloriesForm onSubmit={addNewMeal}/>}
    </div>
  );
};

export default AddMeal;