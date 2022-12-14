export interface MealFormType {
  time: string;
  description: string;
  calories: string;
}

export interface MealType {
  time: string;
  description: string;
  calories: number;
}

export interface MealGetType extends MealType {
  id: string;
}