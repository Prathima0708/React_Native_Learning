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

import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import StartGameScreen from "./UdemyCourse/NumberGuessing/screens/StartGameScreen";

export default function App() {
  return <StartGameScreen />;
}

const styles = StyleSheet.create({});
