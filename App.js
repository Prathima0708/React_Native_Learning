// import { useState } from "react";
// import { Button, FlatList, StyleSheet, View } from "react-native";
// import { StatusBar } from "expo-status-bar";
// import GoalInput from "./AddingGoals/components/GoalInput";
// import GoalItem from "./AddingGoals/components/GoalItem";

// export default function App() {
//   const [courseGoals, setCourseGoals] = useState([]);
//   const [modalIsVisible, setModalIsVisible] = useState(false);

//   function startAddGoalHandler() {
//     setModalIsVisible(true);
//   }
//   function endAddGoalHandler() {
//     setModalIsVisible(false);
//   }

//   function addGoalHandler(enteredGoalText) {
//     setCourseGoals((currentCourseGoals) => [
//       ...currentCourseGoals,
//       { text: enteredGoalText, id: Math.random().toString() },
//     ]);
//     endAddGoalHandler();
//   }
//   function deleteGoalHandler(id) {
//     setCourseGoals((currentCourseGoals) => {
//       return currentCourseGoals.filter((goal) => goal.id !== id);
//     });
//   }
//   return (
//     <>
//       <StatusBar style="light" />
//       <View style={styles.appContainer}>
//         <Button
//           title="Add new Goal"
//           color="#a065ea"
//           onPress={startAddGoalHandler}
//         />
//         <GoalInput
//           visible={modalIsVisible}
//           onAddGoal={addGoalHandler}
//           onCancel={endAddGoalHandler}
//         />
//         <View style={styles.goalsContainer}>
//           <FlatList
//             data={courseGoals}
//             renderItem={(itemData) => {
//               return (
//                 <GoalItem
//                   id={itemData.item.id}
//                   text={itemData.item.text}
//                   onDeleteItem={deleteGoalHandler}
//                 />
//               );
//             }}
//             keyExtractor={(item, index) => {
//               return item.id;
//             }}
//             alwaysBounceVertical={false}
//           />
//         </View>
//       </View>
//     </>
//   );
// }

// const styles = StyleSheet.create({
//   appContainer: {
//     flex: 1,
//     paddingTop: 90,
//     paddingHorizontal: 16,
//     backgroundColor: "#1e085a",
//   },

//   goalsContainer: {
//     flex: 5,
//   },
// });

import { ImageBackground, SafeAreaView, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import StartGameScreen from "./UdemyCourse/NumberGuessing/components/screens/StartGameScreen";
import GameScreen from "./UdemyCourse/NumberGuessing/components/screens/GameScreen";
import Colors from "./UdemyCourse/NumberGuessing/components/constants/colors";
import GameOverScreen from "./UdemyCourse/NumberGuessing/components/screens/GameOverScreen";

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [gameOver, setGameOver] = useState(true);
  function pickedNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber);
    setGameOver(false);
  }
  function gameOverHandler() {
    setGameOver(true);
  }
  let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />;
  if (userNumber) {
    screen = (
      <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />
    );
  }
  if (gameOver && userNumber) {
    screen = <GameOverScreen />;
  }

  return (
    <LinearGradient
      colors={[Colors.primary700, Colors.accent500]}
      style={styles.rootScreen}
    >
      <ImageBackground
        source={require("./assets/background.png")}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15,
  },
});
