import React, {useState} from 'react';
import {MealFormType, MealType} from "../../types";

interface Props {
  currentMeal?: MealFormType;
  onSubmit: (item: MealType) => void;
}

const CaloriesForm: React.FC<Props> = ({currentMeal, onSubmit}) => {
  const initialState = currentMeal ? currentMeal : {
    time: '',
    description: '',
    calories: '',
  }

  const [meals, setMeals] = useState<MealFormType>(initialState);

  const onChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    const {name, value} = e.target;
    setMeals(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const onFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      ...meals,
      calories: Number(meals.calories),
    });
  };

  return (
    <>
      <h1 className="my-5">Calories form</h1>
      <div>
        <form onSubmit={onFormSubmit}>
          <select
            name="time"
            id="time"
            className="form-select mb-3 w-75 mx-auto"
            value={meals.time}
            required
            onChange={onChange}
          >
            <option value="" disabled>Select time</option>
            <option value="breakfast">Breakfast</option>
            <option value="snack">Snack</option>
            <option value="lunch">Lunch</option>
            <option value="dinner">Dinner</option>
          </select>

          <div className="form-group">
            <input
              type="text"
              name="description"
              id="description"
              className="form-control w-75 mx-auto"
              placeholder="Enter description"
              required
              value={meals.description}
              onChange={onChange}
            />
          </div>

          <div className="form-group my-3">
           <input
             type="number"
             id="calories"
             name="calories"
             className="form-control w-75 mx-auto"
             placeholder="Enter calories"
             required
             value={meals.calories}
             onChange={onChange}
           />
          </div>

          <button
            type="submit"
            className="btn btn-primary"
          >Send</button>
        </form>
      </div>
    </>
  );
};

export default CaloriesForm;