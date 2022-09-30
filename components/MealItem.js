import { View, Text, Pressable, Image, StyleSheet, Platform } from 'react-native';

function MealItem(props) {
    return (
        <View style={styles.mealItem}>
            <Pressable
                style={({ pressed }) => pressed ? styles.buttonPressed : null}
                android_ripple={{ color: '#ccc' }}>
                <View style={styles.innerContainer}>
                    <View>
                        <Image source={{ uri: props.imageUrl }}
                            style={styles.image} />
                        <Text style={styles.title}>{props.title}</Text>
                    </View>
                    <View style={styles.details}>
                        <Text style={styles.detailItem}>{props.duration}</Text>
                        <Text style={styles.detailItem}>{props.complexity.toUpperCase()}</Text>
                        <Text style={styles.detailItem}>{props.affordability.toUpperCase()}</Text>
                    </View>
                </View>
            </Pressable>
        </View>
    );
}

export default MealItem;

const styles = StyleSheet.create({
    mealItem: {
        margin: 16,
        borderRadius: 8,
        backgroundColor: 'white',
        elevation: 4,
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 16,
        overflow: Platform.OS == 'android' ? 'hidden' : 'visible'

    },
    buttonPressed: {
        opacity: 0.5
    },
    innerContainer: { //for iOS
        borderRadius: 8,
        overflow: 'hidden'
    },
    image: {
        width: '100%',
        height: 200
    },
    title: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 18,
        margin: 8
    },
    details: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 8
    },
    detailItem: {
        marginHorizontal: 4,
        fontSize: 12
    }
})