import {View, Text, TouchableOpacity, Image, StyleSheet, ScrollView} from 'react-native';
import React from 'react';
import Share from 'react-native-share';
import { useNavigation } from '@react-navigation/native';

import { fonts } from "../utils/fonts";  

export default function ReferShare() {
    const navigation = useNavigation();
  const share = async () => {
    const options = {
      message:
        '',
      url: 'https://stylishhim.com/',
      email: 'support@stylishhim.com',
      subject: 'stylishhim (Your Skin Care Solutions',
      recipient: '+91 9569125048',
    };

    try {
      const res = await Share.open(options);
      console.log(res);
    } catch (err) {
      console.log(err);
    }

    // Share.open(options)
    //   .then(res => console.log(res))
    //   .catch(err => console.log(err));
  };

  const handleBack = () => {
    navigation.navigate("HOME");
  };


  return (
    <ScrollView style={{backgroundColor:'#ffff'}} >
                <View style={styles.header}> 
      <TouchableOpacity  onPress={handleBack}  > 
        <Image
          source={require("../assets/arrowback.png")}
          style={styles.appBackIcon}
      
        />
      </TouchableOpacity> 
     <Text style={styles.titleText}>StylishHim</Text> 
    <View>
      <Image
        source={require("../assets/favoriteFilled.png")}
        style={styles.profileImage}
      />
    </View> 
  </View>
    <View style={styles.referContainer}>
   
      <Text
        style={{
          fontSize: 30,
          color: '#B5776D',
          fontWeight: 'bold',
          marginBottom: 10,
          marginTop:20
        }}>
        Share With Friends
      </Text>
      <Text
        style={{
          color: '#111',
          fontWeight: '600',
        }}>
        "Get 10% off In Every Products
      </Text>
      <Text
        style={{
          marginBottom: 10,
          color: '#111',
          fontWeight: '600',
        }}>
        Share Now"
      </Text>
      <Image style={{width: 400}} source={require('../assets/shareimg.png')} />
      <View style={{marginHorizontal: 40}}>
        <TouchableOpacity style={styles.button} title="Share" onPress={share}>
          <Text style={{fontSize: 24, color: '#FFF',fontWeight:'bold'}}>Share Now</Text>
        </TouchableOpacity>
      </View>
    </View>
    </ScrollView>
  );
}

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
        fontFamily: fonts.regular,
        color: "#000000",
        fontWeight:'bold'
      },
      profilecontainer:{
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems:'center',
        marginTop:20
      },
  referContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20, // Adjust the padding as needed
    backgroundColor: '#f8edeb', // Set the background color if needed
  },
  button: {
    height: 60,
    width: 340,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
    backgroundColor: '#DCAC85',
    color: '#fff',
    borderRadius: 10,
  },
});