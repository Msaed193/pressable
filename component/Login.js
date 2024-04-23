import React, { useState } from "react";
import { TextInput, View, Text } from "react-native";
import { styles } from "../styles/Style";

export default function Login(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    return(
        <View >
            <Text> Login in app </Text>
            <TextInput style={styles.inputBox}
            value={email}
            onChangeText={setEmail}
            placeholder={"Email"}
            keyboardType={"email-address"}
            clearButtonMode={"always"}>

            </TextInput>
            <TextInput style={styles.inputBox}
            value={password}
            onChangeText={setPassword}
            placeholder={"password"}
            keyboardType={"default"}
            secureTextEntry={true}
            clearButtonMode={"always"}>


            </TextInput>
        </View>


    );
}