 

import React, { useState, useEffect } from "react";
import { FlatList, Image, StyleSheet, TextInput, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import Header from "../components/Header";
import Tags from "../components/Tags";
import ProductCard from "../components/ProductCard";
import data from "../data/data.json";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import RoundTags from "../components/RoundTags";
import BannerSlider from "../components/BannerImg";

const HomeScreen = () => {
  const [products, setProducts] = useState(data.products);
  const [isFavorite, setIsFavorite] = useState([]);

  useEffect(() => {
    // Load isFavorite state from local storage when component mounts
    loadIsFavorite();
  }, []);

  const loadIsFavorite = async () => {
    try {
      const storedFavorites = await AsyncStorage.getItem("isFavorite");
      if (storedFavorites !== null) {
        setIsFavorite(JSON.parse(storedFavorites));
      }
    } catch (error) {
      console.error("Error loading favorites from AsyncStorage:", error);
    }
  };

  const saveIsFavorite = async () => {
    try {
      await AsyncStorage.setItem("isFavorite", JSON.stringify(isFavorite));
    } catch (error) {
      console.error("Error saving favorites to AsyncStorage:", error);
    }
  };

  const navigation = useNavigation();

  const handleProductDetails = (item) => {
    navigation.navigate("PRODUCT_DETAILS", { item });
  };

  const toggleFavorite = (item) => {
    const updatedProducts = products.map((prod) => {
      if (prod.id === item.id) {
        return {
          ...prod,
          isFavorite: !prod.isFavorite,
        };
      }
      return prod;
    });
    setProducts(updatedProducts);
    const updatedFavorites = updatedProducts.filter((prod) => prod.isFavorite);
    setIsFavorite(updatedFavorites);
  };

  // Save isFavorite state to local storage whenever it changes
  useEffect(() => {
    saveIsFavorite();
  }, [isFavorite]);

  return (
    <LinearGradient colors={["#ffff", "#ffff"]} style={styles.container}>
      <FlatList
        ListHeaderComponent={
          <>
            <Header />
            {/* <View style={styles.inputContainer}>
              <Image
                source={require("../assets/search.png")}
                style={styles.searchIcon}
              />
              <TextInput placeholder="Search" style={styles.textInput} />
            </View> */}
            {/* <Tags /> */}
            <RoundTags />
            <BannerSlider />
            <RoundTags />
          </>
        }
        data={products}
        numColumns={2} 
        showsVerticalScrollIndicator={false}
        
      />


 
    </LinearGradient>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#fff",
  },
  inputContainer: {
    width: "100%",
    backgroundColor: "#FFFFFF",
    height: 48,
    borderRadius: 12,
    alignItems: "center",
    flexDirection: "row",
    marginTop: 15,
  },
  searchIcon: {
    height: 26,
    width: 26,
    marginHorizontal: 12,
  },
  textInput: {
    fontSize: 18,
  },
});
