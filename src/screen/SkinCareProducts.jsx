 


// import React, { useState, useEffect } from "react";
// import { FlatList, Image, StyleSheet, TextInput, View } from "react-native";
// import LinearGradient from "react-native-linear-gradient";
// import Header from "../components/Header";
// import Tags from "../components/Tags";
// import ProductCard from "../components/ProductCard";
// import data from "../data/data.json";
// import { useNavigation } from "@react-navigation/native";
// import AsyncStorage from "@react-native-async-storage/async-storage";

// const SkinCareProducts = () => {
//   const [products, setProducts] = useState(data.products);
//   const [isFavorite, setIsFavorite] = useState([]);

//   useEffect(() => {
//     // Load isFavorite state from local storage when component mounts
//     loadIsFavorite();
//   }, []);

//   const loadIsFavorite = async () => {
//     try {
//       const storedFavorites = await AsyncStorage.getItem("isFavorite");
//       if (storedFavorites !== null) {
//         setIsFavorite(JSON.parse(storedFavorites));
//       }
//     } catch (error) {
//       console.error("Error loading favorites from AsyncStorage:", error);
//     }
//   };

//   const saveIsFavorite = async () => {
//     try {
//       await AsyncStorage.setItem("isFavorite", JSON.stringify(isFavorite));
//     } catch (error) {
//       console.error("Error saving favorites to AsyncStorage:", error);
//     }
//   };

//   const navigation = useNavigation();

//   const handleProductDetails = (item) => {
//     navigation.navigate("PRODUCT_DETAILS", { item });
//   };

//   const toggleFavorite = (item) => {
//     const updatedProducts = products.map((prod) => {
//       if (prod.id === item.id) {
//         return {
//           ...prod,
//           isFavorite: !prod.isFavorite,
//         };
//       }
//       return prod;
//     });
//     setProducts(updatedProducts);
//     const updatedFavorites = updatedProducts.filter((prod) => prod.isFavorite);
//     setIsFavorite(updatedFavorites);
//   };

//   // Save isFavorite state to local storage whenever it changes
//   useEffect(() => {
//     saveIsFavorite();
//   }, [isFavorite]);

//   return (
//     <LinearGradient colors={["#ffff", "#ffff"]} style={styles.container}>
//       <FlatList
//         ListHeaderComponent={
//           <>
//             <Header />
//             {/* <View style={styles.inputContainer}>
//               <Image
//                 source={require("../assets/search.png")}
//                 style={styles.searchIcon}
//               />
//               <TextInput placeholder="Search" style={styles.textInput} />
//             </View>  */}
//           </>
//         }
//         data={products}
//         numColumns={2}
//         renderItem={({ item }) => (
//           <ProductCard
//             item={item}
//             handleProductClick={handleProductDetails}
//             toggleFavorite={toggleFavorite}
//           />
//         )}
//         showsVerticalScrollIndicator={false}
//       />
//     </LinearGradient>
//   );
// };

// export default SkinCareProducts;

// const styles = StyleSheet.create({
//   container: {
//     padding: 20,
//     backgroundColor: "#ffff",
//   },
//   inputContainer: {
//     width: "100%",
//     backgroundColor: "#FFFFFF",
//     height: 48,
//     borderRadius: 12,
//     alignItems: "center",
//     flexDirection: "row",
//     marginTop: 15,
//   },
//   searchIcon: {
//     height: 26,
//     width: 26,
//     marginHorizontal: 12,
//   },
//   textInput: {
//     fontSize: 18,
//   },
// });

// import React, { useState } from 'react';
// import { View, Text, StyleSheet, Image, FlatList, TextInput,TouchableOpacity } from 'react-native';
// import { useNavigation } from '@react-navigation/native';

// // Sample data; replace this with an import if your data is in a separate file
// const data = [
//   {
//     "id": 1,
//     "image": "https://tse3.explicit.bing.net/th?id=OIP.XprgHSCfPgHBpfQBBfAWqwHaFb&pid=Api&P=0&h=220",
//     "title": "Apple",
//     "price": 499
//   },
//   {
//     "id": 2,
//     "image": "https://tse4.mm.bing.net/th?id=OIP.nbEw_CbJuIQxfMNkc0hxfAHaFw&pid=Api&P=0&h=220",
//     "title": "Banana",
//     "price": 399.99
//   },
//   {
//     "id": 3,
//     "image": "https://tse2.mm.bing.net/th?id=OIP.qL-HErFkUTvb43i9cmZvFQHaGP&pid=Api&P=0&h=220",
//     "title": "water melon",
//     "price": 499.99
//   },
//   {
//     "id": 4,
//     "image": "https://tse3.mm.bing.net/th?id=OIP.C2yRvmtMBxguk0l6W6bTTgHaGI&pid=Api&P=0&h=220",
//     "title": "peanut",
//     "price": 929
//   },
//   {
//     "id": 5,
//     "image": "https://tse3.mm.bing.net/th?id=OIP.KNHJ3Zj5fMpWo1Hhs97uDwHaF7&pid=Api&P=0&h=220",
//     "title": "grapes",
//     "price": 590.99
//   },
//    {
//     "id": 6,
//     "image": "https://tse3.explicit.bing.net/th?id=OIP.XprgHSCfPgHBpfQBBfAWqwHaFb&pid=Api&P=0&h=220",
//     "title": "Apple",
//     "price": 499
//   },
//   {
//     "id": 7,
//     "image": "https://tse4.mm.bing.net/th?id=OIP.nbEw_CbJuIQxfMNkc0hxfAHaFw&pid=Api&P=0&h=220",
//     "title": "Banana",
//     "price": 399.99
//   },
//   {
//     "id": 8,
//     "image": "https://tse2.mm.bing.net/th?id=OIP.qL-HErFkUTvb43i9cmZvFQHaGP&pid=Api&P=0&h=220",
//     "title": "water melon",
//     "price": 499.99
//   },
//   {
//     "id": 9,
//     "image": "https://tse3.mm.bing.net/th?id=OIP.C2yRvmtMBxguk0l6W6bTTgHaGI&pid=Api&P=0&h=220",
//     "title": "peanut",
//     "price": 929
//   },
//   {
//     "id": 10,
//     "image": "https://tse3.mm.bing.net/th?id=OIP.KNHJ3Zj5fMpWo1Hhs97uDwHaF7&pid=Api&P=0&h=220",
//     "title": "grapedfdf",
//     "price": 590.99
//   }
// ];

// const SkinCareProducts = () => {
//   const navigation = useNavigation();
//   const [searchQuery, setSearchQuery] = useState('');
//   const [filteredData, setFilteredData] = useState(data);

//   const handleImagePress = (item) => {
//     // Navigate to other screen when image is clicked
//     navigation.navigate('skincare', { item });
//   };

//   const handleSearch = (text) => {
//     setSearchQuery(text);
//     const filtered = data.filter(item => 
//       item.title.toLowerCase().includes(text.toLowerCase())
//     );
//     setFilteredData(filtered);
//   };

//   return (
//     <View style={{ backgroundColor: "#fff" }}>

//       <View style={styles.inputContainer}>
//         <Image
//           source={require("../assets/search.png")}
//           style={styles.searchIcon}
//         />
//         <TextInput 
//           placeholder="Search" 
//           style={styles.textInput}
//           value={searchQuery}
//           onChangeText={handleSearch}
//         />
//       </View>

//       <FlatList
//         data={filteredData}
//         keyExtractor={(item) => item.id.toString()}
//         numColumns={2}
//         contentContainerStyle={styles.container}
//         renderItem={({ item }) => (
//           <ImageContainer
//             name={item.title}
//             imageSource={{ uri: item.image }}
//             price={item.price}
//             onPress={() => handleImagePress(item)}
//           />
//         )}
//       />
       
//     </View>
//   );
// };

// const ImageContainer = ({ name, imageSource, price, onPress }) => {
//   return ( 

// <View style={styles.itemContainer}>
//       <Image
//         source={imageSource}
//         style={styles.image}
//         resizeMode="cover"
//       />
//       <View style={styles.textContainer}>
//         <Text style={styles.text}>{name}</Text>
//         <Text style={styles.price}>₹{price}</Text>
//         <TouchableOpacity style={styles.button} onPress={() => toggleFavorite(item)}>
//               <Text style={styles.buttonText}>+</Text>
//             </TouchableOpacity>
//       </View>
//     </View>

   

//   );
// };

// const styles = StyleSheet.create({
//   inputContainer: {
//     width: "100%",
//     backgroundColor: "#FFFFFF",
//     height: 48,
//     borderRadius: 12,
//     alignItems: "center",
//     flexDirection: "row", 
//     marginTop: 10,
//     borderBottomWidth: 1,
//     borderColor: 'gray'
//   },
//   searchIcon: {
//     height: 26,
//     width: 26,
//     marginHorizontal: 12,
//   },
//   textInput: {
//     flex: 1,
//     height: '100%',
//     fontSize: 16,
//   },
//   container: {
//     paddingHorizontal: 10,
//     paddingTop: 16,
//     backgroundColor: '#fff'
//   },
//   itemContainer: {
//     flex: 1,
//     alignItems: 'center',
//     margin: 8,
//     padding: 10,
//     borderWidth: 1,
//     borderColor: '#ddd',
//     borderRadius: 8,
//   },
//   image: {
//     width: 140,
//     height: 100,
//     marginBottom: 10
//   },
//   textContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     width: '100%',
//   },
//   text: {
//     color: 'gray',
//     fontSize: 14,
//     fontWeight: 'bold',
//   },
//   price: {
//     color: 'gray',
//     fontSize: 14,
//     fontWeight: 'bold',
//   },
//   buttonText:{
//     fontWeight:'bold',
//     fontSize:20,
//     color:'blue'
//   }
  
// });

// export default SkinCareProducts;


import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, FlatList, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Sample data; replace this with an import if your data is in a separate file
const data = [
  {
    "id": 1,
    "image": "https://tse3.explicit.bing.net/th?id=OIP.XprgHSCfPgHBpfQBBfAWqwHaFb&pid=Api&P=0&h=220",
    "title": "Apple",
    "price": 99
  },
  {
    "id": 2,
    "image": "https://tse4.mm.bing.net/th?id=OIP.nbEw_CbJuIQxfMNkc0hxfAHaFw&pid=Api&P=0&h=220",
    "title": "Banana",
    "price": 100
  },
  {
    "id": 3,
    "image": "https://tse2.mm.bing.net/th?id=OIP.qL-HErFkUTvb43i9cmZvFQHaGP&pid=Api&P=0&h=220",
    "title": "watermelon",
    "price": 59
  },
  {
    "id": 4,
    "image": "https://tse3.mm.bing.net/th?id=OIP.C2yRvmtMBxguk0l6W6bTTgHaGI&pid=Api&P=0&h=220",
    "title": "peanut",
    "price": 129
  },
  {
    "id": 5,
    "image": "https://tse3.mm.bing.net/th?id=OIP.KNHJ3Zj5fMpWo1Hhs97uDwHaF7&pid=Api&P=0&h=220",
    "title": "grapes",
    "price": 90
  },
  {
    "id": 6,
    "image": "https://tse3.explicit.bing.net/th?id=OIP.XprgHSCfPgHBpfQBBfAWqwHaFb&pid=Api&P=0&h=220",
    "title": "Apple",
    "price": 49
  },
  {
    "id": 7,
    "image": "https://tse4.mm.bing.net/th?id=OIP.nbEw_CbJuIQxfMNkc0hxfAHaFw&pid=Api&P=0&h=220",
    "title": "Banana",
    "price": 199
  },
  {
    "id": 8,
    "image": "https://tse2.mm.bing.net/th?id=OIP.qL-HErFkUTvb43i9cmZvFQHaGP&pid=Api&P=0&h=220",
    "title": "water melon",
    "price": 499
  },
  {
    "id": 9,
    "image": "https://tse3.mm.bing.net/th?id=OIP.C2yRvmtMBxguk0l6W6bTTgHaGI&pid=Api&P=0&h=220",
    "title": "peanut",
    "price": 929
  },
  {
    "id": 10,
    "image": "https://tse3.mm.bing.net/th?id=OIP.KNHJ3Zj5fMpWo1Hhs97uDwHaF7&pid=Api&P=0&h=220",
    "title": "grapedfdf",
    "price": 590
  }
];

const SkinCareProducts = () => {
  const navigation = useNavigation();
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredData, setFilteredData] = useState(data);
  const [favorites, setFavorites] = useState([]);

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

  const saveFavorites = async (newFavorites) => {
    try {
      await AsyncStorage.setItem('favorites', JSON.stringify(newFavorites));
      setFavorites(newFavorites);
    } catch (error) {
      console.error("Error saving favorites to AsyncStorage:", error);
    }
  };

  const handleSearch = (text) => {
    setSearchQuery(text);
    const filtered = data.filter(item =>
      item.title.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredData(filtered);
  };

  const toggleFavorite = (item) => {
    const isFavorited = favorites.some(fav => fav.id === item.id);
    let updatedFavorites;

    if (isFavorited) {
      updatedFavorites = favorites.filter(fav => fav.id !== item.id);
    } else {
      updatedFavorites = [...favorites, item]; 
      
    }

    saveFavorites(updatedFavorites);
  };

  const handleImagePress = (item) => {
    navigation.navigate('skincare', { item });
  };

  return (
    <View style={{ backgroundColor: "#fff" }}>
      <View style={styles.inputContainer}>
        <Image
          source={require("../assets/search.png")}
          style={styles.searchIcon}
        />
        <TextInput 
          placeholder="Search" 
          style={styles.textInput}
          value={searchQuery}
          onChangeText={handleSearch}
        />
      </View>

 

      <FlatList
        data={filteredData}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        contentContainerStyle={styles.container}
        renderItem={({ item }) => (
          <ImageContainer
            name={item.title}
            imageSource={{ uri: item.image }}
            price={item.price}
            onPress={() => handleImagePress(item)}
            onAdd={() => toggleFavorite(item)}
          />
        )}
      />
    </View>
  );
};

const ImageContainer = ({ name, imageSource, price, onPress, onAdd }) => {
  return (
    <View style={styles.itemContainer}>
      <Image
        source={imageSource}
        style={styles.image}
        resizeMode="cover"
      />
      <View style={styles.textContainer}>
        <Text style={styles.text}>{name}</Text>
        <Text style={styles.price}>₹{price}</Text>
        <TouchableOpacity style={styles.button} onPress={onAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    width: "100%",
    backgroundColor: "#FFFFFF",
    height: 48,
    borderRadius: 12,
    alignItems: "center",
    flexDirection: "row", 
    marginTop: 10,
    borderBottomWidth: 1,
    borderColor: 'gray'
  },
  searchIcon: {
    height: 26,
    width: 26,
    marginHorizontal: 12,
  },
  textInput: {
    flex: 1,
    height: '100%',
    fontSize: 16,
  },
  container: {
    paddingHorizontal: 10,
    paddingTop: 16,
    backgroundColor: '#fff'
  },
  itemContainer: {
    flex: 1,
    alignItems: 'center',
    margin: 8,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
  },
  image: {
    width: 140,
    height: 100,
    marginBottom: 10
  },
  textContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  text: {
    color: 'gray',
    fontSize: 12,
    fontWeight: 'bold',
  },
  price: {
    color: 'gray',
    fontSize: 14,
    fontWeight: 'bold',
  },
  button: {
    // marginTop: 10,
    padding: 5,
    backgroundColor: '#007BFF',
    borderRadius: 5,
    width:30,
    marginBottom:10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign:'center'
  },
 
});

export default SkinCareProducts;



