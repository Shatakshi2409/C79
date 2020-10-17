import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, KeyboardAvoidingView } from 'react-native';
import db from '../config';
import firebase from 'firebase';
import MyHeader from '../components/myHeader';

export default class BookRequestScreen extends React.Component{
    constructor(){
        super();
        this.state={
            userId:firebase.auth().currentUser.email,
            bookName:'',
            reasonToRequest:''

        }
    }
    render(){
        return(
            <View>
                <MyHeader title='requestBook'></MyHeader>
                <KeyboardAvoidingView>
                    <TextInput
                    placeholder='enterBookName'
                    onChangeText={(text)=>{
                        this.setState({
                            bookName:text
                        })
                    }}
                    ></TextInput>
                </KeyboardAvoidingView>
                </View>


        )
    }
}