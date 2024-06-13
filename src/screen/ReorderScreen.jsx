// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'

// const ReorderScreen = () => {
//   return (
//     <View>
//       <Text>Coming soon</Text>
//     </View>
//   )
// }

// export default ReorderScreen

// const styles = StyleSheet.create({})

import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, Image, StyleSheet, ScrollView ,TouchableOpacity} from "react-native";
 
// Importing images
 
const shoppingCartIcon = require("../assets/shopping_cart.png");
const ReorderScreen = () => {

  const navigation = useNavigation();

  const handleBack = () => {
    navigation.navigate("HOME");
  };
  return (
    <ScrollView style={styles.container}>

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
            source={require("../assets/reorder.png")}
            style={styles.profileImage}
          />
        </View>
      </View>
 
      {/* First container  */}
      <View style={styles.mainContainer}>
        <View style={styles.contentContainer}>
          <Text style={styles.title}>Why Skin Care is Important!</Text>
          <Text style={styles.paragraph}>
            Quickly pursue granular synergy after just-in-time niche markets.
            Phosfluorescently syndicate sticky content whereas robust resources.
            Uniquely target integrated meta-services and inexpensive process
            meta-services and inexpensive processmeta-services and inexpensive
            process improvements. Distinctively matrix robust ideas through
            customer-directed leadership skills. Efficiently evolve.
          </Text>
          <View style={styles.border}></View>
        </View>
        <View style={styles.imageContainer}>
          <Image source={require('../assets/blog-3.webp')} style={styles.image} />
        </View>
      </View>

      {/* Second Container  */}
      <View style={styles.mainContainer}> 
        <View style={styles.contentContainer}>
          <Text style={styles.title}>Why Moisture Cream used Before Facing!</Text>
          <Text style={styles.paragraph}>
            Quickly pursue granular synergy after just-in-time niche markets.
            Phosfluorescently syndicate sticky content whereas robust resources.
            Uniquely target integrated meta-services and inexpensive process
            meta-services and inexpensive processmeta-services and inexpensive
            process improvements. Distinctively matrix robust ideas through
            customer-directed leadership skills. Efficiently evolve.
          </Text>
          <View style={styles.border}></View>
        </View>
      </View>

      {/* Third container  */}
      <View style={styles.mainContainer}>
        <View style={styles.contentContainer}>
          <Text style={styles.title}>Best Care Of Your Skin!</Text>
          <Text style={styles.paragraph}>
            Quickly pursue granular synergy after just-in-time niche markets.
            Phosfluorescently syndicate sticky content whereas robust resources.
            Uniquely target integrated meta-services and inexpensive process
            meta-services and inexpensive processmeta-services and inexpensive
            process improvements. Distinctively matrix robust ideas through
            customer-directed leadership skills. Efficiently evolve.
          </Text>
          <View style={styles.border}></View>
        </View>
        <View style={styles.imageContainer}>
          <Image source={require('../assets/blog-2.webp')} style={styles.image} />
        </View>
      </View> 

      <View style={{height:30}} ></View>
     
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FCF7EE',
  },
  appDrawerContainer: {
    backgroundColor: "#ffff",

    height: 44,
    width: 44,
    borderRadius: 22,
    alignItems: "center",
    justifyContent: "center",
  },
  applogo: {
    color: "#111",
    fontSize: 24,
    fontWeight: "bold",
  },
  appDrawerIcon: {
    height: 30,
    width: 30,
  },
  appBackIcon: {
    height: 24,
    width: 24,
    marginLeft: 10,
    marginTop: 8,
  },
  profileImage: {
    height: 25,
    width: 25,
    marginTop: 6,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    backgroundColor: "#FCF7EE",
  },
  titleText: {
    fontSize: 28,
 
    color: "#000000",
    fontWeight: "bold",
  },
  mainContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginTop: 20,
  },
  contentContainer: {
    flex: 1,
    marginRight: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  paragraph: {
    fontSize: 16,
    marginTop: 10,
  },
  border: {
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    marginTop: 10,
  },
  imageContainer: {
    width: '90%',
    height: 150,
    borderRadius: 10,
    overflow: 'hidden',
    marginTop:20
  },
  image: {
    flex: 1,
    width: undefined,
    height: undefined,
  },
});

export default ReorderScreen;
