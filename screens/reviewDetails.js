import React from 'react';
import {View, Text, Button} from 'react-native';
import { globalStyles } from '../styles/global';

export default function ReviewDetails({ route }) {
    const { title, rating, body } = route.params;
    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.title}>{title}</Text>
            <Text>{rating}</Text>
            <Text>{body}</Text>
        </View>
    );
}