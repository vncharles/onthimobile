// import React, { useState, useEffect, useRef } from 'react';
// import { StyleSheet, Text, View, Animated, Button } from 'react-native';

// const App = () => {
//   const [isStart, setIsStart] = useState(false);
//   const [position] = useState(new Animated.ValueXY({ x: 0, y: 0 }));
//   const animationRef = useRef(null);

//   console.log(isStart);
//   useEffect(() => {
//     if (isStart) {
//       animationRef.current = Animated.timing(position, {
//         toValue: { x: 0, y: -200 }, // Vị trí đích
//         duration: 1000, // Thời gian di chuyển
//       });
//       animationRef.current.start();
//     } else {
//       animationRef.current?.stop();
//     }
//   }, [isStart]);

//   const handleStart = () => {
//     setIsStart(true);
//   };

//   const handleStop = () => {
//     setIsStart(false);
//   };

//   const handleRestart = () => {
//     setIsStart(false);
//     animationRef.current?.stop();
//     animationRef.current = null;
//     position.setValue({ x: 0, y: 0 });
//     setIsStart(false);
//   };

//   return (
//     <View style={styles.container}>
//       <Animated.View style={[styles.shape, position.getLayout()]}>
//         <Text>Hình vuông</Text>
//       </Animated.View>
//       <View style={styles.buttons}>
//         <Button title="Start" onPress={handleStart} />
//         <Button title="Stop" onPress={handleStop} />
//         <Button title="Restart" onPress={handleRestart} />
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   shape: {
//     width: 100,
//     height: 100,
//     backgroundColor: 'red',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   buttons: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     width: '80%',
//     marginTop: 20,
//   },
// });

// export default App;