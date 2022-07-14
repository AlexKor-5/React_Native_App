import React from 'react';
import { View, Text,Button } from 'react-native';
import {globalStyles} from "../styles/global"

export default function Home({ navigation }) {
    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.title}>Home Screen</Text>
            <Button
                title="Go to ReviewDetails"
                onPress={() => navigation.navigate('ReviewDetails')}
            />
        </View>
    );
}
