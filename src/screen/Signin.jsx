import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    Image,
    ScrollView,
    Alert,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
 

const Signin = () => {
    const navigation = useNavigation();
    const [loginData, setLoginData] = useState({
        email: '',
        password: '',
    });
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleBack = () => {
        navigation.navigate('HOME');
    };

    const handleSignup = () => {
        navigation.navigate('signup');
    };

    const handleInputChange = (name, value) => {
        setLoginData({
            ...loginData,
            [name]: value,
        });
    };

    const handleSubmit = async () => {
        if (!loginData.email || !loginData.password) {
            Alert.alert('Error', 'Please fill in all required fields.');
            return;
        }
    
        try {
            const response = await fetch('https://api.stylishhim.com/api/cust_login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(loginData),
            });
    
            const result = await response.json();
    
            if (result.Status === 'Success') {
                await AsyncStorage.setItem('userEmail', loginData.email); // Store user email
                Alert.alert('Success', 'Login Successful');
                navigation.navigate('HOME');
            } else {
                Alert.alert('Invalid credentials');
            }
        } catch (error) {
            console.error('Error during Sign In: ', error);
            Alert.alert('An error occurred during Sign In');
        }
    };
    
    return (
        <ScrollView>
            <View style={styles.header}>
                <TouchableOpacity onPress={handleBack}>
                    <Image
                        source={require('../assets/arrowback.png')}
                        style={styles.appBackIcon}
                    />
                </TouchableOpacity>
                <Text style={styles.titleText}>StylishHim</Text>
                <View>
                    <Image
                        source={require('../assets/favoriteFilled.png')}
                        style={styles.profileImage}
                    />
                </View>
            </View>
            <View style={styles.RegisterContainer}>
                <ScrollView
                    style={styles.RegisterBox}
                    showsVerticalScrollIndicator={false}
                >
                    <View style={styles.imgContainer}>
                        <Image
                            source={require('../assets/login.png')}
                            style={styles.logoImg}
                        />
                        <Text style={styles.heading}>Customer Login</Text>
                        <Text style={styles.paragraph}>
                            Please Enter Your Email & Password For Login
                        </Text>
                    </View>

                    <View style={styles.inputContainer}>
                        <TextInput
                            style={styles.input}
                            placeholder="Enter Email"
                            value={loginData.email}
                            onChangeText={(value) => handleInputChange('email', value)}
                        />

                        <TextInput
                            style={styles.input}
                            placeholder="Enter Password"
                            secureTextEntry={!showPassword}
                            value={loginData.password}
                            onChangeText={(value) => handleInputChange('password', value)}
                        />

                        <TouchableOpacity onPress={togglePasswordVisibility}>
                            <Text
                                style={{
                                    marginLeft: 10,
                                    marginBottom: 20,
                                    fontWeight: 'bold',
                                    color: '#111',
                                }}>
                                {showPassword ? 'Hide' : 'Show'} Password
                            </Text>
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                        <Text style={{ fontSize: 20, color: '#fff' }}>Login</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={handleSignup} style={{ marginBottom: 20, marginTop: 5 }}>
                        <Text style={{ color: "#111", fontWeight: 'bold' }}>Don't have an account?
                            <Text style={{ color: "blue", fontSize: 18, borderBottomWidth: 1 }}> SignUp</Text>
                        </Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>
        </ScrollView>
    );
};
export default Signin;
const styles = StyleSheet.create({
  appDrawerContainer: {
    backgroundColor: "#ffff",
    
    height: 44,
    width: 44,
    borderRadius: 22,
    alignItems: "center",
    justifyContent: "center",
  },
  applogo:{
    color:'#111',
    fontSize:24,
    fontWeight:'bold'
  },
  appDrawerIcon: {
    height: 30,
    width: 30,
  },
  appBackIcon: {
    height: 24,
    width: 24,
    marginLeft: 10,
    marginTop:8
  },
  profileImage: {
    height: 25,
    width: 25,
    marginTop:6
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding:10,
    backgroundColor:'#FCF7EE'
  },
  titleText: {
    fontSize: 28,
    color: "#000000",
    fontWeight:'bold'
  },
  RegisterContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#ffff',
      height: '100%',
  },
  RegisterBox: {
      marginTop: 20,
  },
  imgContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
  },
  logoImg: {
      height: 200,
      width: 250,
      borderRadius: 50,
      marginTop:14
  },
  heading: {
      marginTop: 15,
      fontSize: 25,
      color: '#111',
      fontWeight: 'bold',
  },
  paragraph: {
      fontSize: 14,
      fontWeight: 'bold',
      marginTop: 5,
  },
  input: {
      height: 50,
      borderBottomWidth: 0.5,
      borderColor: 'black',
      marginBottom: 20,
      marginTop: 20,
      paddingHorizontal: 10,
      borderRadius: 0,
      width: '100%',
      color: '#111',
      fontWeight: '600',
      fontSize: 16,
  },
  inputContainer: {
      marginTop: 20,
  },
  button: {
      height: 60,
      width: 340,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 20,
      backgroundColor: '#DCAC85',
      color: '#fff',
      borderRadius: 10,
      alignSelf: 'center', // Center the button horizontally
  },
  socialContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
  },
  socialButton: {
      marginRight: 25,
      justifyContent: 'center',
      alignItems: 'center',
  },
  SocialImg: {
      height: 80,
      width: 80,
      borderRadius: 10,
      marginTop: 20,
      justifyContent: 'center',
      alignItems: 'center',
  },
});