import React, { useState } from 'react';
import { View, Text, ScrollView, Pressable } from 'react-native';
import Input from './components/Input';
import Button from './components/Button';
import { styles } from './styles';

export default function AuthenticationPage({ navigation }) {

    const [values, setValues] = useState({});

    const onChange = (key, value) => {
        setValues({ ...values, [key]: value });
    };

    const onSignIn = () => {
        // Ici, vous pouvez implémenter la logique de connexion
        console.log('Email:', values.email);
        console.log('Password:', values.password);
    };

    return (
        <ScrollView>
            <View style={styles.container}>
                <Input
                    value={values.email}
                    label="Email"
                    placeholder="example@gmail.com"
                    onChangeText={(text) => onChange('email', text)}
                />
                <Input
                    value={values.password}
                    label="Password"
                    placeholder="**********"
                    secureTextEntry={true}
                    onChangeText={(text) => onChange('password', text)}
                />
                <Button
                    title="Sign In"
                    onPress={onSignIn}
                />
                <View style={styles.signUpContainer}>
                    <Text style={styles.signUpText}> Vous avez pas un compte? </Text>
                    <Pressable onPress={() => navigation.navigate('SignUp')}>
                        <Text style={styles.signUpLink}>Sign Up</Text>
                    </Pressable>
                </View>
            </View>
        </ScrollView>
    );
}
