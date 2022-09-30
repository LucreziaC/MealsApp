import { TabRouter } from '@react-navigation/native';
import { View, Text, StyleSheet } from 'react-native';

import {MEALS} from '../data/dummy-data'

function MealsOverviewScreen({ route }){
    const catID = route.params.categoryId; // extract the categoryId from categoriesSCreen 
    return(
        <View style={styles.container}>
            <Text>Meals Overview SCreen - { catID }</Text>
        </View>
    )
}

export default MealsOverviewScreen;

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:16
    }
})