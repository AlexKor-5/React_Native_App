import React from 'react';
import {View, Text, Button} from 'react-native';
import { globalStyles } from '../styles/global';
import Card from "../shared/card";

export default function ReviewDetails({ route }) {
    const stud = {
        title:"nan", rating:"nan", body:"nan"
    }
    const { title, rating, body } = route.params||stud;
    return (
        <View style={globalStyles.container}>
            <Card>
                <Text style={globalStyles.title}>{title}</Text>
                <Text>{body}</Text>
                <Text>{rating}</Text>
            </Card>
        </View>
    );
}