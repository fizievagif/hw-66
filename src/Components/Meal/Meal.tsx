import React from 'react';
import {MealGetType} from "../../types";
import {Link} from "react-router-dom";

interface Props {
  meal: MealGetType;
  removeBtn: React.MouseEventHandler;
}

const Meal: React.FC<Props> = ({meal, removeBtn}) => {
  return (
    <div className="card mt-4 w-75 mx-auto">
      <div className="card-body">
        <div>
          <div className="d-flex justify-content-between border-bottom border-dark fs-4 mb-3">
            <p className="card-text"><b>Time:</b> {meal.time}</p>
            <p className="card-text">{meal.calories} <b>kcal</b></p>
          </div>
          <p className="card-text mb-3 fs-5"><b>Description:</b> {meal.description}</p>
        </div>
        <button className="btn btn-danger" onClick={removeBtn}>Delete</button>
        <Link
          className="btn btn-warning text-white mx-3"
          to={'/edit/' + meal.id}>Edit</Link>
      </div>
    </div>
  );
};

export default Meal;