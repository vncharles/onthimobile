// import React, { useEffect, useRef } from 'react';
// import { View, StyleSheet, Animated, Easing } from 'react-native';

// const NUM_BALLS = 10; // Số lượng quả bóng

// const Ball = ({ index }) => {
//   const positionY = useRef(new Animated.Value(600)).current;

//   useEffect(() => {
//     Animated.timing(positionY, {
//       toValue: -50,
//       duration: 3000,
//       delay: index * 500, // Cài đặt delay cho mỗi quả bóng
//       easing: Easing.linear,
//       useNativeDriver: true,
//     }).start();
//   }, []);

//   return <Animated.View style={[styles.ball, { bottom: positionY }]} />;
// };

// const App = () => {
//   const balls = [];

//   // Tạo mảng các quả bóng
//   for (let i = 0; i < NUM_BALLS; i++) {
//     balls.push(<Ball key={i} index={i} />);
//   }

//   return <View style={styles.container}>{balls}</View>;
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'flex-end',
//     alignItems: 'center',
//     backgroundColor: '#fff',
//   },
//   ball: {
//     position: 'absolute',
//     width: 50,
//     height: 50,
//     borderRadius: 25,
//     backgroundColor: 'blue',
//   },
// });

// export default App;
