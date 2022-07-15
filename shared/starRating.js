import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import {View,StyleSheet} from "react-native";

export default function StarRating ({value=0}){
     return (
         <View style={styles.starBox}>
             {[...Array(value)].map((e,i)=>{
                     return <AntDesign name="star" key={i} size={24} color="#F1C40F" />
             })}
         </View>
     )
}
const styles = StyleSheet.create({
    starBox:{
        flexDirection:'row',
    }
})