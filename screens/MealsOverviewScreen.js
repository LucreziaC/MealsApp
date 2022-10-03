import { useLayoutEffect } from "react";
import MealsList from "../components/MealDetail/MealsList/MealsList";

import { MEALS, CATEGORIES } from "../data/dummy-data";

function MealsOverviewScreen({ route, navigation }) {
  //    const route = useRoute() //alternative to route prop

  const catID = route.params.categoryId; // extract the categoryId from categoriesSCreen

  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catID) >= 0; //Se c'è almento un categoria nell'array delle categorie che corrisponde a catId
  });

  /* useEffect(() => { //executed after page is rendered
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === catID
    ).title;

    navigation.setOptions({ title: categoryTitle });
  }, [catID, navigation]);
 */

  useLayoutEffect(() => {
    //executed after page is rendered
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === catID
    ).title;

    navigation.setOptions({ title: categoryTitle });
  }, [catID, navigation]);

  return <MealsList items={displayedMeals} />;
}

export default MealsOverviewScreen;
