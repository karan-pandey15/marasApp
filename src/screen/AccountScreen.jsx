 

import React, { useEffect, useState } from "react";
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation,useFocusEffect  } from "@react-navigation/native";
import { fonts } from "../utils/fonts";

const AccountScreen = ({ isCart }) => {
  const navigation = useNavigation();
  const [formData, setFormData] = useState(null);
  const [auth, setAuth] = useState(false);
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone,setPhone] = useState("")
 

  useEffect(() => {
      const fetchCustomerData = async () => {
          try {
              const response = await fetch('https://api.stylishhim.com/api/get_customer_data', {
                  method: 'GET',
                  credentials: 'include',
              });

              const res = await response.json();

              if (res.Status === 'Success') {
                  setAuth(true);
                  setName(res.name);
                  setEmail(res.email);
                  setPhone(res.phone)
              } else {
                  setAuth(false);
                  setMessage(res.Error);
                  // navigation.navigate('signin');
              }
          } catch (err) {
              console.log(err);
              // navigation.navigate('signin');
          }
      };

      fetchCustomerData();
  }, []);

  const handleLogout = async () => {
      try {
          const response = await fetch('https://api.stylishhim.com/api/cust_logout', {
              method: 'GET',
              credentials: 'include',
          });

          const res = await response.json();

          if (res.Status === 'Success') {
              await AsyncStorage.clear();
              setAuth('false')
              navigation.navigate('signup');
          }
      } catch (err) {
          console.log(err);
      }
  };
  
 
  const handleBack = () => {
    navigation.navigate("HOME");
  };
  

  const handleFav = () => {
    navigation.navigate("isfav");
  };

  const handleshare = () => {
    navigation.navigate("ReferShare");
  };

  const handleorder = () => {
    navigation.navigate("CART");
  };


  const handleLogin = ()=>{
    navigation.navigate("signup");
  }
  return (
    <ScrollView style={{ backgroundColor: "#ffff" }}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handleBack}>
          <Image
            source={require("../assets/arrowback.png")}
            style={styles.appBackIcon}
          />
        </TouchableOpacity>
        <Text style={styles.titleText}>StylishHim</Text>
        <View>
          <Image
            source={require("../assets/account.png")}
            style={styles.profileImage}
          />
        </View>
      </View>

      <View style={styles.profilecontainer}>
        <View>
          <Image
            source={require("../assets/account.png")}
            style={styles.userImg}
          />
        </View>
        <View style={styles.txtcontainer}>
          <Text style={styles.textheading}>
            {auth ? name : "Undefined"}
          </Text>
        </View>
      </View>

      <View style={styles.details}>
        <Text style={styles.detailstxt}>
          {auth ? phone : "Undefined"}
        </Text>
        <Text style={styles.detailstxt}>
          {auth ? email : "Undefined"}
        </Text>
      </View>

      <View>
        <TouchableOpacity onPress={handleshare}>
          <View style={styles.screendrawer}>
            <Image
              source={require("../assets/favoriteFilled.png")}
              style={styles.drawericon}
            />
            <Text style={styles.drawertxt}>Share Your Friend</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleFav}>
          <View style={styles.screendrawer}>
            <Image
              source={require("../assets/favorite.png")}
              style={styles.drawericon}
            />
            <Text style={styles.drawertxt}>Your Favorite Item</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleorder}>
          <View style={styles.screendrawer}>
            <Image
              source={require("../assets/shopping_cart.png")}
              style={styles.drawericon}
            />
            <Text style={styles.drawertxt}>Your Orders Detail</Text>
          </View>
        </TouchableOpacity>

        
    <TouchableOpacity  >
      <View  style={styles.screendrawer}>
    <Image
          source={require("../assets/apps.png")}
          style={styles.drawericon}
      
        />
        <Text  style={styles.drawertxt} >Edit Your Profile</Text>
    </View>
    </TouchableOpacity>
    <TouchableOpacity  >
      <View  style={styles.screendrawer}>
    <Image
          source={require("../assets/settincicoon.png")}
          style={styles.drawericon}
      
        />
        <Text  style={styles.drawertxt} >Setting</Text>
        
    </View>
    </TouchableOpacity>


        {auth ? (
          <TouchableOpacity  onPress={handleLogout}>
            <View style={styles.logutContainer} >
              <Image
                source={require("../assets/loguticon.png")}
                style={styles.drawericon}
              />
              <Text style={styles.logutTxt}>Logout</Text>
            </View>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={handleLogin}>
            <View style={styles.loginContainer}>
              <Image
                source={require("../assets/loguticon.png")}
                style={styles.drawericon}
              />
              <Text style={styles.loginTxt}>Login</Text>
            </View>
          </TouchableOpacity>
        )}
      </View>
    </ScrollView>
  );
};

export default AccountScreen;

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
    marginTop:10,
    padding:10
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
  userImg:{
    height:100,
    width:100,
  },
  textheading:{
    color:'#111',
    fontSize:26,
    fontWeight:'bold'

  },
  details:{
    marginTop:30, 
    borderBottomWidth:1,
    borderBottomColor:'gray'
  },
  detailstxt:{
    fontSize:20,
    fontWeight:"400",
    marginTop:5,
    marginLeft:40,
    marginBottom:10
  },
  screendrawer:{
    flexDirection: "row",
    justifyContent: "space-between", 
    width:200,
    marginTop:30,
    marginLeft:50
  },
  drawericon:{
    height:25,
    width:25,
    marginTop:4,
    color:'red'
  },
  drawertxt:{
    fontSize:15,
    fontWeight:'bold'
  },
  logutContainer:{  
    flexDirection: "row",
    justifyContent: "space-between", 
    borderWidth:2,
    borderColor:"red",
    borderRadius:10,
    width:200,
    marginTop:40,
    marginLeft:80,
    height:50,
    alignItems:'center',
    paddingLeft:20,
    paddingRight:30
  },
  loginContainer:{
    flexDirection: "row",
    justifyContent: "space-between", 
    borderWidth:2,
    borderColor:"green",
    borderRadius:10,
    width:200,
    marginTop:40,
    marginLeft:80,
    height:50,
    alignItems:'center',
    paddingLeft:20,
    paddingRight:30
  },
  logutTxt:{
    fontWeight:'bold',
    color:'red',
    fontSize:24
  },
  loginTxt:{
    fontWeight:'bold',
    color:'green',
    fontSize:24
  }
  
});
