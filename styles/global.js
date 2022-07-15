import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
    },
    paragraph: {
        marginVertical: 8,
        lineHeight: 20,
    },
    container: {
        flex: 1,
        padding: 20,
    },
    input:{
        borderWidth:2,
        borderColor:'lightgrey',
        padding:15,
        marginRight:20,
        marginLeft:20,
        marginBottom:20,
    },
    submitButton:{
        marginLeft:13,
        marginRight:13,
        padding:10,
    }
});