import {
  Text,
  Image,
  View,
  StyleSheet,
  ScrollView,
  Button,
} from "react-native";
import { useLayoutEffect, useState } from "react";
import List from "../components/MealDetail/List";
import Subtitle from "../components/MealDetail/Subtitle";
import MealDetail from "../components/MealDetails";

import { MEALS } from "../data/dummy-data";
import IconButton from "../components/IconButton";

function MealDetailScreen({ route, navigation }) {
  var iconImage = "star-outline";
  const [isPreferred, setIsPreferred] = useState(false);

  useLayoutEffect(() => {
    console.log("useLayoutEffect");
    if (isPreferred) iconImage = "star";
    else iconImage = "star-outline";
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            icon={iconImage}
            color="white"
            onPress={headerButtonPressHandler}
          />
        );
      },
    });
  }, [navigation, headerButtonPressHandler, isPreferred]);

  function headerButtonPressHandler() {
    setIsPreferred(!isPreferred);
    console.log("isPreferred " + isPreferred);
  }

  const mealId = route.params.mealId;
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  return (
    <ScrollView style={styles.rootContainer}>
      <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <MealDetail
        duration={selectedMeal.duration}
        complexity={selectedMeal.complexity}
        affordability={selectedMeal.affordability}
        textStyle={styles.detailTextStyle}
      />
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <Subtitle>Ingredients</Subtitle>
          <List data={selectedMeal.ingredients} />
          <Subtitle> Steps </Subtitle>
          <List data={selectedMeal.steps} />
        </View>
      </View>
    </ScrollView>
  );
}

export default MealDetailScreen;

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 32,
  },
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
    color: "white",
  },
  detailTextStyle: {
    color: "white",
  },
  listOuterContainer: {
    alignItems: "center",
  },
  listContainer: {
    width: "80%",
  },
});
