import React from 'react';
import {View, Text, Button} from 'react-native';
import { globalStyles } from '../styles/global';

export default function ReviewDetails({ route }) {
    const stud = {
        title:"nan", rating:"nan", body:"nan"
    }
    const { title, rating, body } = route.params||stud;
    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.title}>{title}</Text>
            <Text>{rating}</Text>
            <Text>{body}</Text>
        </View>
    );
}