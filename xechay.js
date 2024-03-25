import React, { useEffect, useRef } from 'react';
import { View, Text, Image, StyleSheet, Animated, Easing } from 'react-native';

const App = () => {
  const shipperPositionX = useRef(new Animated.Value(-150)).current;
  const textScale = useRef(new Animated.Value(1)).current;
  const textColor = useRef(new Animated.Value(0)).current;
  const foodScale = useRef(new Animated.Value(0.5)).current;

  useEffect(() => {
    // Animation for shipper
    Animated.loop(
      Animated.sequence([
        Animated.timing(shipperPositionX, {
          toValue: 400,
          duration: 2000,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
        Animated.timing(shipperPositionX, {
          toValue: -150,
          duration: 2000,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
      ])
    ).start();

    // Animation for text
    Animated.loop(
      Animated.sequence([
        Animated.timing(textScale, {
          toValue: 1.2,
          duration: 1000,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
        Animated.timing(textScale, {
          toValue: 1,
          duration: 1000,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
      ])
    ).start();

    Animated.loop(
      Animated.sequence([
        Animated.timing(textColor, {
          toValue: 1,
          duration: 2000,
          easing: Easing.linear,
          useNativeDriver: false,
        }),
        Animated.timing(textColor, {
          toValue: 0,
          duration: 2000,
          easing: Easing.linear,
          useNativeDriver: false,
        }),
      ])
    ).start();

    // Animation for food images
    Animated.loop(
      Animated.sequence([
        Animated.timing(foodScale, {
          toValue: 1,
          duration: 1000,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
        Animated.timing(foodScale, {
          toValue: 0.5,
          duration: 1000,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, []);

  const interpolateTextColor = textColor.interpolate({
    inputRange: [0, 1],
    outputRange: ['blue', 'red'],
  });

  return (
    <View style={styles.container}>
      <Animated.Image
        source={require('./shipper_image.png')}
        style={[styles.shipper, { transform: [{ translateX: shipperPositionX }] }]}
      />
      <Animated.Text style={[styles.text, { transform: [{ scale: textScale }], color: interpolateTextColor }]}>
        Shopee cái gì cũng có...
      </Animated.Text>
      <View style={styles.foodContainer}>
        <Animated.Image
          source={require('./noodle_image.png')}
          style={[styles.food, { transform: [{ scale: foodScale }] }]}
        />
        <Animated.Image
          source={require('./coke_image.png')}
          style={[styles.food, { transform: [{ scale: foodScale }] }]}
        />
        <Animated.Image
          source={require('./snack_image.png')}
          style={[styles.food, { transform: [{ scale: foodScale }] }]}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  shipper: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 20,
  },
  foodContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%',
  },
  food: {
    width: 80,
    height: 80,
  },
});

export default App;
