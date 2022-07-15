import React from 'react';
import { Formik, Field, Form } from 'formik';
import {Text, View,TextInput,Button} from "react-native";
import {globalStyles} from "../styles/global";

export default function ReviewForm(){
    return(
        <View>
            <Formik
                initialValues={{
                    title: '',
                    body: '',
                    rating: '',
                }}
                onSubmit={async (values) => {
                    console.log(await values);
                }}
            >
                    {(props)=>
                    <View>
                        <TextInput
                        placeholder={"Title"}
                        onChangeText={()=>props.handleChange('title')}
                        value={props.values.title}
                        style={globalStyles.input}
                        />

                        <TextInput
                            placeholder={"Body"}
                            onChangeText={()=>props.handleChange('body')}
                            value={props.values.title}
                            style={globalStyles.input}
                        />

                        <TextInput
                            placeholder={"Rating"}
                            onChangeText={()=>props.handleChange('rating')}
                            value={props.values.title}
                            style={globalStyles.input}
                            keyboardType={"numeric"}
                        />

                        <View style={globalStyles.submitButton}>
                            <Button title={"Submit"}
                                    onPress={()=>props.handleSubmit()}
                            />
                        </View>
                    </View>
                    }
            </Formik>
        </View>
    )
}