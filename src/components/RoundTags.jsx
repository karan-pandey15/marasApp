import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const RoundTags = () => {
  const navigation = useNavigation();

  const handleImagePress = () => {
    // Navigate to other screen when image is clicked
    navigation.navigate('skincare');
  };

  return (
    <>
    <View style={styles.container}>
      <View style={styles.row}>
        <ImageContainer name="Hot Deals" imageSource={require('../assets/images/featuredBrands/Colgate-1.jpg')} onPress={handleImagePress} />
        <ImageContainer name="Vegetable" imageSource={require('../assets/images/featuredBrands/Daawat.jpg')} onPress={handleImagePress} />
        <ImageContainer name="Hot Deals" imageSource={require('../assets/images/featuredBrands/dove.jpg')} onPress={handleImagePress} />
        <ImageContainer name="Hot Deals" imageSource={require('../assets/images/featuredBrands/Kwality_walls.jpg')} onPress={handleImagePress} />
      </View>
      <View style={styles.row}>
        <ImageContainer name="Vegetable" imageSource={require('../assets/images/fruits-vegetables/All_fruits.jpg')} onPress={handleImagePress} />
        <ImageContainer name="Vegetable" imageSource={require('../assets/images/fruits-vegetables/All_fruits.jpg')} onPress={handleImagePress} />
        <ImageContainer name="Fruits" imageSource={require('../assets/images/fruits-vegetables/SeasonSpecial.jpg')} onPress={handleImagePress} />
        <ImageContainer name="Fruits" imageSource={require('../assets/images/fruits-vegetables/SeasonSpecial.jpg')} onPress={handleImagePress} />
 
      </View>
    </View>
    </>
  );
};

const ImageContainer = ({ name, imageSource, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            source={imageSource}
            style={styles.image}
            resizeMode="cover"
          />
        </View>
        <Text style={styles.text}>{name}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    margin: 6
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
    marginTop:10
  },
  imageContainer: {
    width: 80,
    height: 80,
    borderRadius: 50, // Rounded corners
    overflow: 'hidden', // Clip the content to the rounded border
  },
  image: {
    width: '100%',
    height: '100%',
  },
  text: {
    marginTop: 5,
    color: 'gray',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default RoundTags;
