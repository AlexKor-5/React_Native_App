import React from 'react';
import {View, Text, Button} from 'react-native';
import { globalStyles } from '../styles/global';

export default function ReviewDetails({navigation}) {
    return (
        <View style={globalStyles.container}>
            <Text>ReviewDetails Screen</Text>
            <Button
                title="Go Back to Home"
                onPress={() => navigation.goBack()}
            />
        </View>
    );
}