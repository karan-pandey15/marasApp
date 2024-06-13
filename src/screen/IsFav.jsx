 

// import React, { useState, useEffect } from "react";
// import { FlatList, Image, StyleSheet, Text, View ,TouchableOpacity, ScrollView} from "react-native";
// import LinearGradient from "react-native-linear-gradient"; 
// import ProductCard from "../components/ProductCard"; 
// import { useNavigation } from "@react-navigation/native";
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import { fonts } from "../utils/fonts";  

// const HomeScreen = () => {
//   const [favorites, setFavorites] = useState([]);
//   const navigation = useNavigation();
//   const handleBack = () => {
//     navigation.navigate("HOME");
//   };

//   useEffect(() => {
//     loadFavorites(); 
//   }, []);

//   const loadFavorites = async () => {
//     try {
//       const storedFavorites = await AsyncStorage.getItem("isFavorite");
//       if (storedFavorites !== null) {
//         setFavorites(JSON.parse(storedFavorites));
//       }
//     } catch (error) {
//       console.error("Error loading favorites from AsyncStorage:", error);
//     }
//   };

//   const handleProductDetails = (item) => {
//     navigation.navigate("PRODUCT_DETAILS", { item });
//   };

//   const toggleFavorite = (item) => {
//     const updatedProducts = favorites.map((prod) => {
//       if (prod.id === item.id) {
//         return {
//           ...prod,
//           favorites: !prod.favorites,
//         };
//       }
//       return prod;
//     });
//     setFavorites(updatedProducts);
//   };

//   return (
    
//       <ScrollView colors={["#FDF0F3", "#FFFBFC"]} style={styles.container}>
//          <View style={styles.header}> 
//             <TouchableOpacity onPress={handleBack}> 
//               <Image
//                 source={require("../assets/arrowback.png")}
//                 style={styles.appBackIcon}
//               />
//             </TouchableOpacity> 
//            <Text style={styles.titleText}>StylishHim</Text> 
//            <View>
//              <Image
//                source={require("../assets/favorite.png")}
//                style={styles.profileImage}
//              />
//            </View> 
//          </View>
//         {favorites.length === 0 ? (
//           <Text style={styles.noFavoritesText}>Oops, your favorite list is empty</Text>
//         ) : (
//           <FlatList
//             style={{marginBottom:15}}
//             data={favorites}
//             numColumns={2}
//             renderItem={({ item }) => (
//               <ProductCard
//                 item={item}
//                 handleProductClick={handleProductDetails}
//                 toggleFavorite={toggleFavorite}
//               />
//             )}
//             showsVerticalScrollIndicator={false}
//           />
//         )}
//       </ScrollView> 
//   );
// };

// export default HomeScreen;

// const styles = StyleSheet.create({
//   container: {
//     padding: 20,
//     backgroundColor: "#FCF2DC",
//   },
//   header: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     marginTop: 10,
//     padding: 10,
//   },
//   titleText: {
//     fontSize: 28,
//     fontFamily: fonts.regular,
//     color: "#000000",
//     fontWeight: "bold",
//   },
//   appBackIcon: {
//     height: 24,
//     width: 24,
//     marginLeft: 10,
//     marginTop: 8,
//   },
//   profileImage: {
//     height: 25,
//     width: 25,
//     marginTop: 6,
//   },
//   noFavoritesText: {
//     fontSize: 20,
//     textAlign: "center",
//     marginTop: 20,
//     color:'red'
//   },
// });



import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList, ScrollView, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Header from '../components/Header';

const HomeScreen = () => {
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

export default HomeScreen;
