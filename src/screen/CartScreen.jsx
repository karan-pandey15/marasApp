 
// import React, { useContext } from "react";
// import { Alert, FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
// import LinearGradient from "react-native-linear-gradient";
// import Header from "../components/Header";
// import CartCard from "../components/CartCard";
// import { fonts } from "../utils/fonts";
// import { CartContext } from "../context/CartContext";
// import { useNavigation } from "@react-navigation/native";

// const CartScreen = () => {
//   const { cartItems, deleteCartItem } = useContext(CartContext);
//   const navigation = useNavigation(); 
//   const totalPrice = cartItems.reduce((acc, curr) => acc + curr.price, 0); 
//   const gstPercentage = 0.18; 
//   const gstAmount = totalPrice * gstPercentage; 
//   const totalAmount = totalPrice + gstAmount;

//   const handleDeleteItem = async (id) => {
//     await deleteCartItem(id);
//   };

//   const checkoutbtn = () => {
//     Alert.alert("Login with and account first...")
//     navigation.navigate("signup");
//   };


//   const gotoShop = () => {
//     navigation.navigate("HOME");
//   };

//   return (
//     <LinearGradient colors={["#FCF2DC", "#FCF2DC"]} style={styles.container}>
//       <View style={styles.header}>
//         <Header isCart={true} />
//       </View> 
//       {cartItems.length === 0 ? (
//         <View>
//           <View style={{display:'flex',justifyContent:'center',alignItems:'center'}} >
//             <Text style={styles.emptyCartText}>Oops! Your Cart is Empty</Text>
//             <TouchableOpacity style={styles.cartbutton} onPress={gotoShop} >
//               <Text style={{color:'#111',fontSize:20,fontWeight:'bold'}} >Goto Shop</Text>
//             </TouchableOpacity>
//           </View>
//           <View style={styles.bottomContentContainer}>
//             <View style={styles.flexRowContainer}>
//               <Text style={styles.titleText}>Total:</Text>
//               <Text style={styles.priceText}>₹{totalPrice.toFixed(2)}</Text>
//             </View>
//             <View style={styles.flexRowContainer}>
//               <Text style={styles.titleText}>GST:</Text>
//               <Text style={styles.priceText}>₹{gstAmount.toFixed(2)}</Text>
//             </View>
//             <View style={styles.divider} />
//             <View style={styles.flexRowContainer}>
//               <Text style={styles.titleText}>Grand Total:</Text>
//               <Text style={[styles.priceText, styles.grandPriceText]}>₹{totalAmount.toFixed(2)}</Text>
//             </View>
//           </View>
//         </View>
//       ) : (
//         <FlatList
//           data={cartItems}
//           renderItem={({ item }) => (
//             <CartCard item={item} handleDelete={handleDeleteItem} />
//           )}
//           showsVerticalScrollIndicator={false}
//           contentContainerStyle={{ marginTop: 40, paddingBottom: 200 }}
//           ListFooterComponent={
//             <>
//               <View style={styles.bottomContentContainer}>
//                 <View style={styles.flexRowContainer}>
//                   <Text style={styles.titleText}>Total:</Text>
//                   <Text style={styles.priceText}>₹{totalPrice.toFixed(2)}</Text>
//                 </View>
//                 <View style={styles.flexRowContainer}>
//                   <Text style={styles.titleText}>GST:</Text>
//                   <Text style={styles.priceText}>₹{gstAmount.toFixed(2)}</Text>
//                 </View>
//                 <View style={styles.divider} />
//                 <View style={styles.flexRowContainer}>
//                   <Text style={styles.titleText}>Grand Total:</Text>
//                   <Text style={[styles.priceText, styles.grandPriceText]}>₹{totalAmount.toFixed(2)}</Text>
//                 </View>
//               </View>
//               <TouchableOpacity style={styles.button} onPress={checkoutbtn}>
//                 <Text style={styles.buttonText}>Checkout</Text>
//               </TouchableOpacity>
//             </>
//           }
//         />
//       )}
//     </LinearGradient>
//   );
// };

// export default CartScreen;

// const styles = StyleSheet.create({ 
//   container: {
//     padding: 15,
//   },
//   header: {},
//   flexRowContainer: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     marginVertical: 5,
//   },
//   bottomContentContainer: {
//     marginHorizontal: 10,
//     marginTop: 30,
//   },
//   titleText: {
//     fontSize: 18,
//     color: "#757575",
//     fontWeight: "500",
//   },
//   priceText: {
//     fontSize: 18,
//     color: "#757575",
//     fontWeight: "600",
//   },
//   cartbutton:{
//    borderWidth:2,
//    width:140,
//    height:60,
//    display:'flex',
//    justifyContent:'center',
//    alignItems:'center',
//    marginTop:10,
//    backgroundColor:'#fff',
//    borderRadius:5,
//    marginTop:20
//   },
//   divider: {
//     borderWidth: 1,
//     borderColor: "#C0C0C0",
//     marginTop: 10,
//     marginBottom: 5,
//   },
//   grandPriceText: {
//     color: "#3C3C3C",
//     fontWeight: "700",
//   },
//   button: {
//     backgroundColor: "#E96E6E",
//     height: 60,
//     alignItems: "center",
//     justifyContent: "center",
//     borderRadius: 20,
//     marginTop: 30,
//   },
//   buttonText: {
//     fontSize: 24,
//     color: "#FFFFFF",
//     fontWeight: "700",
//     fontFamily: fonts.regular,
//   },
//   emptyCartText: {
//     fontSize: 24,
//     textAlign: "center",
//     marginTop: 50,
//     color:'red',
//     fontWeight:'500'
//   },
// });




import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList, ScrollView, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Header from '../components/Header';

const CartScreen = () => {
  const [favorites, setFavorites] = useState([]);

  const alertFun = ()=>{
    Alert.alert('database not connected');
  }

  useEffect(() => {
    loadFavorites();
  }, []);

  const loadFavorites = async () => {
    try {
      const storedFavorites = await AsyncStorage.getItem('favorites');
      if (storedFavorites !== null) {
        setFavorites(JSON.parse(storedFavorites));
      }
    } catch (error) {
      console.error("Error loading favorites from AsyncStorage:", error);
    }
  };

  const renderFavoriteItem = ({ item }) => (
    <>
    <View style={styles.itemContainer}>
      <Image
        source={{ uri: item.image }}
        style={styles.image}
        resizeMode="cover"
      />
      <View style={styles.textContainer}>
        <Text style={styles.text}>{item.title}</Text>
        <Text style={styles.price}>₹{item.price}</Text>
      </View> 
    </View>
    </>
    
  );

  return (
    <ScrollView style={styles.container}>
      <Header />

      <FlatList
        data={favorites}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderFavoriteItem}
      />
      <TouchableOpacity onPress={alertFun} style={styles.favButton} >
        <Text style={styles.favText}  >
          Order
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent:'space-around', 
    alignItems: 'center',
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 10,
  },
  image: {
    width: 140,
    height: 100,
    borderRadius: 8,
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
    marginLeft:100
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  price: {
    fontSize: 14,
    color: 'gray',
  },
  favButton:{
    width:'100%',
    padding:10, 
    marginTop:20,
    marginBottom:50,textAlign:'center',justifyContent:'center',
    
    backgroundColor:'#0077b6',
    borderRadius:10
  },
  favText:{
    fontWeight:'bold',
    textAlign:'center',
    fontSize:24,
    color:'white' 
  }
});

export default CartScreen;
