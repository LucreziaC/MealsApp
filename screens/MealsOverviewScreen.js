import { View, FlatList, StyleSheet } from "react-native";
import { useRoute } from "@react-navigation/native";
import { useLayoutEffect } from "react";

import { MEALS, CATEGORIES } from "../data/dummy-data";
import MealItem from "../components/MealItem";

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

  function renderMealtem(itemData) {
    const item = itemData.item;
    const mealItemProps = {
      title: item.title,
      imageUrl: item.imageUrl,
      affordability: item.affordability,
      complexity: item.complexity,
      duration: item.duration,
    };
    return <MealItem {...mealItemProps} />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealtem}
      />
    </View>
  );
}

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
