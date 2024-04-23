import React, { useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import { styles } from '../styles/Style';
import Login from './Login';

export default function PressableButton() {
    const [show, setShow] = useState(true);

    return (
        <View>
            <Pressable onPress={() => setShow(prevState => !prevState)}>
                <Text style={styles.buttontext}>
                    {show ? 'Open' : 'Close'}
                </Text>
            </Pressable>
            {!show && <Login />}
        </View>
    );
};
