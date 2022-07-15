import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { globalStyles } from '../styles/global';
import Card from "../shared/card";
import StarRating from "../shared/starRating";

export default function ReviewDetails({ route }) {
    const stud = { title:"nan", rating:"nan", body:"nan" }
    const { title, rating, body } = route.params || stud;
    return (
        <View style={globalStyles.container}>
            <Card>
                <Text style={globalStyles.title}>{title}</Text>
                <Text>{body}</Text>
                <View style={styles.ratingBox}>
                    <Text style={styles.ratingText}>Game rating:</Text>
                    <StarRating value={rating}/>
                </View>
            </Card>
        </View>
    );
}
const styles = StyleSheet.create({
    ratingText:{
      marginRight:5
    },
    ratingBox:{
        flexDirection:'row'
    }
})