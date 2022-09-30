import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CategoriesScreen from './screens/CategoriesScreen';
import MealsOverviewScreen from './screens/MealsOverviewScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <><StatusBar style='dark' />
      <NavigationContainer>
        <Stack.Navigator screenOptions={ {headerStyle:{backgroundColor: '#680442'}, headerTintColor:'white', contentStyle:{backgroundColor:'#2e011d'}}}>
          <Stack.Screen name="MealsCategories" component={CategoriesScreen} title={'All Categories'}/>
          <Stack.Screen name="MealsOverview" component={MealsOverviewScreen} title={'Meal List'} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {

  },
});
