import styles from "./grid.module.css";
import { MealsItem } from "@/components/Atons";

function MealsGrid({ meals }) {
  return (
    <ul className={styles.meals}>
      {meals.map((meal) => (
        <li key={meal.id}>
          <MealsItem {...meal} />
        </li>
      ))}
    </ul>
  );
}

export default MealsGrid;
