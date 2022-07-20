import React from 'react';
import { Formik } from 'formik';
import {Text, View,TextInput,Button} from "react-native";
import {globalStyles} from "../styles/global";
import {object,string,number} from 'yup';

export default function ReviewForm({addReview}){
    return(
        <View>
            <Formik
                initialValues={{
                    title: '',
                    body: '',
                    rating: '',
                }}

                validationSchema={object({
                    title: string()
                            .min(2, 'Must be at least 2 characters or more')
                            .required('Required'),
                    body: string()
                            .min(2, 'Must be at least 2 characters or more')
                            .required('Required'),
                    rating: number()
                        .required('Required')
                        .test('is-num-1-5', 'Rating must be a number 1 - 5', (val) => {
                            return +val < 6 && +val > 0;
                        })
                    })
                }

                onSubmit={async (values,actions) => {
                    actions.resetForm()
                    addReview(values)
                }}
            >
                    {(props)=>
                    <View style={globalStyles.formContainer}>
                        <TextInput
                            placeholder={"Title"}
                            onChangeText={props.handleChange('title')}
                            onBlur={props.handleBlur('title')}
                            value={props.values.title}
                            style={globalStyles.input}
                        />
                        <Text style={globalStyles.errorText}>{props.touched.title && props.errors.title}</Text>

                        <TextInput
                            placeholder={"Body"}
                            onChangeText={props.handleChange('body')}
                            onBlur={props.handleBlur('body')}
                            value={props.values.body}
                            style={globalStyles.input}
                        />
                        <Text style={globalStyles.errorText}>{props.touched.body && props.errors.body}</Text>

                        <TextInput
                            placeholder={"Rating 1-5"}
                            onChangeText={props.handleChange('rating')}
                            onBlur={props.handleChange('rating')}
                            value={props.values.rating}
                            style={globalStyles.input}
                            keyboardType={"numeric"}
                        />
                        <Text style={globalStyles.errorText}>{props.touched.rating && props.errors.rating}</Text>

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