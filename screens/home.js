import React,{useState}from 'react';
import { View, Text,FlatList,TouchableOpacity,StyleSheet,
         Modal,TouchableWithoutFeedback,Keyboard } from 'react-native';
import {globalStyles} from "../styles/global"
import Card from "../shared/card";
import { Octicons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import ReviewForm from "./reviewForm";

export default function Home({ navigation }) {
    const [modalVisible,setModalVisible] = useState(false)
    const [reviews,setReviews] = useState([
        { title: 'Zelda, Breath of Fresh Air', rating: 5, body: 'lorem ipsum', key: '1' },
        { title: 'Gotta Catch Them All (again)', rating: 4, body: 'lorem ipsum', key: '2' },
        { title: 'Not So "Final" Fantasy', rating: 3, body: 'lorem ipsum', key: '3' },
    ]);

    const addReview = (review) => {
        review.key = Math.random().toString();
        setReviews((currentReviews) => {
            return [review, ...currentReviews];
        });
        setModalVisible(false);
    };

    return (
        <View style={globalStyles.container}>
            <View style={styles.iconWrapper}>
                <TouchableOpacity  onPress={()=>setModalVisible(true)}>
                    <Octicons name="diff-added" size={34} color="black"
                              style={styles.icon}
                    />
                </TouchableOpacity>
            </View>
            <FlatList
                data={reviews}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => navigation.navigate('ReviewDetails', item)}>
                        <Card>
                            <Text style={globalStyles.titleText}>{ item.title }</Text>
                        </Card>
                    </TouchableOpacity>
            )} />

            <Modal
                animationType="slide"
                transparent={false}
                visible={modalVisible}
            >
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View>
                        <TouchableOpacity  onPress={()=>setModalVisible(false)}>
                            <Fontisto name="close" size={34} color="black" style={styles.closeIcon}/>
                        </TouchableOpacity>
                        <View>
                            <ReviewForm addReview={addReview}/>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </Modal>
        </View>
    );
}
const styles = StyleSheet.create({
    iconWrapper:{
        flexDirection:'row',
        justifyContent:'center',
        paddingBottom:9,
    },
    icon:{
        backgroundColor:'white',
        padding:10,
        borderRadius:10
    },
    closeIcon:{
        alignSelf:'center',
        marginTop:20,
        marginBottom:20
    }
})
