// import React, { useState } from 'react'; 
// import { View, Text, TextInput, Button, StyleSheet, Image } from 'react-native';
// import * as Animatable from 'react-native-animatable';

// const App = () => {
//   const [showInputs, setShowInputs] = useState(false);

//   return (
//     <View style={styles.container}>
//       <View style={styles.topRight}>
//         <Animatable.Image
//           source={require('./bell.png')} // Đường dẫn đến hình ảnh chuông
//           animation="swing" // Hiệu ứng lắc
//           iterationCount="infinite" // Lặp vô hạn
//           style={styles.bell}
//         />
//       </View>
      
//       <View style={styles.circleContainer}>
//         <Animatable.View
//           animation="rotate" // Hiệu ứng xoay
//           iterationCount="infinite" // Lặp vô hạn
//           style={styles.circle}
//         >
//           {/* Hình bát quái hoặc nội dung khác */}
//         </Animatable.View>
//       </View>

//       <Animatable.Text
//         animation={{
//           from: { color: 'green' },
//           to: { color: 'red' }
//         }}
//         iterationCount="infinite"
//         duration={3000} // Thời gian chuyển đổi màu
//         style={styles.text}
//       >
//         Dòng text đổi màu từ Green đến Red, lặp đi lặp lại liên tục.
//       </Animatable.Text>

//       {showInputs && (
//         <Animatable.View
//           animation="fadeIn" // Hiệu ứng hiển thị từ mờ mờ đến rõ
//           duration={3000} // Thời gian hiển thị
//           style={styles.inputsContainer}
//         >
//           <TextInput placeholder="Username" style={styles.input} />
//           <TextInput placeholder="Password" style={styles.input} secureTextEntry />
//           <Button title="Login" onPress={() => {}} />
//           <Button title="Cancel" onPress={() => setShowInputs(false)} />
//         </Animatable.View>
//       )}

//       <Button title="Show" onPress={() => setShowInputs(true)} />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   topRight: {
//     position: 'absolute',
//     top: 20,
//     right: 20,
//   },
//   bell: {
//     width: 50,
//     height: 50,
//   },
//   circleContainer: {
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   circle: {
//     width: 100,
//     height: 100,
//     borderRadius: 50,
//     backgroundColor: 'blue', // Màu nền hình tròn
//   },
//   text: {
//     marginTop: 20,
//   },
//   inputsContainer: {
//     marginTop: 20,
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: 'gray',
//     borderRadius: 5,
//     padding: 10,
//     marginBottom: 10,
//     width: 200,
//   },
// });

// export default App;
