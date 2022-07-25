//Adding Goals //

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

//Number Guessing//
// import { ImageBackground, SafeAreaView, StyleSheet } from "react-native";
// import { LinearGradient } from "expo-linear-gradient";
// import { useState } from "react";
// import { useFonts } from "expo-font";
// import StartGameScreen from "./UdemyCourse/NumberGuessing/components/screens/StartGameScreen";
// import GameScreen from "./UdemyCourse/NumberGuessing/components/screens/GameScreen";
// import Colors from "./UdemyCourse/NumberGuessing/components/constants/colors";
// import GameOverScreen from "./UdemyCourse/NumberGuessing/components/screens/GameOverScreen";
// import AppLoading from "expo-app-loading";

// export default function App() {
//   const [userNumber, setUserNumber] = useState();
//   const [gameOver, setGameOver] = useState(true);
//   const [guessRounds, setGuessRounds] = useState(0);
//   const [fontsloaded] = useFonts({
//     "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
//     "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
//   });
//   if (!fontsloaded) {
//     return <AppLoading />;
//   }
//   function pickedNumberHandler(pickedNumber) {
//     setUserNumber(pickedNumber);
//     setGameOver(false);
//   }
//   function gameOverHandler(numberOfRounds) {
//     setGameOver(true);
//     setGuessRounds(numberOfRounds);
//   }
//   function startNewGameHandler() {
//     setUserNumber(null);
//     setGuessRounds(0);
//   }
//   let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />;
//   if (userNumber) {
//     screen = (
//       <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />
//     );
//   }
//   if (gameOver && userNumber) {
//     screen = (
//       <GameOverScreen
//         userNumber={userNumber}
//         roundsNumber={guessRounds}
//         onStartNewGame={startNewGameHandler}
//       />
//     );
//   }

//   return (
//     <LinearGradient
//       colors={[Colors.primary700, Colors.accent500]}
//       style={styles.rootScreen}
//     >
//       <ImageBackground
//         source={require("./assets/background.png")}
//         resizeMode="cover"
//         style={styles.rootScreen}
//         imageStyle={styles.backgroundImage}
//       >
//         <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
//       </ImageBackground>
//     </LinearGradient>
//   );
// }

// const styles = StyleSheet.create({
//   rootScreen: {
//     flex: 1,
//   },
//   backgroundImage: {
//     opacity: 0.15,
//   },
// });

//Drawer Example//

// import { StatusBar, StyleSheet, Text } from "react-native";
// import CategoriesScreen from "./UdemyCourse/Meals/screens/CategoriesScreen";
// import { NavigationContainer } from "@react-navigation/native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import MealsOverviewScreen from "./UdemyCourse/Meals/screens/MealsOverviewScreen";
// import MealDetailScreen from "./UdemyCourse/Meals/screens/MealDetailScreen";
// import { createDrawerNavigator } from "@react-navigation/drawer";
// import FavoritesScreen from "./UdemyCourse/Meals/screens/FavoritesScreen";
// import { Ionicons } from "@expo/vector-icons";
// import FavoritesContextProvider from "./UdemyCourse/Meals/store/context/favorites-context";
// import { Provider } from "react-redux";
// import { store } from "./UdemyCourse/Meals/store/redux/store";

// const Stack = createNativeStackNavigator();
// const Drawer = createDrawerNavigator();

// function DrawerNavigator() {
//   return (
//     <Drawer.Navigator
//       screenOptions={{
//         headerStyle: { backgroundColor: "#351401" },
//         headerTintColor: "white",
//         sceneContainerStyle: {
//           backgroundColor: "#3f2f25",
//         },
//         drawerContentStyle: {
//           backgroundColor: "#351401",
//         },
//         drawerInactiveTintColor: "white",
//         drawerActiveTintColor: "#351401",
//         drawerActiveBackgroundColor: "#e4baa1",
//       }}
//     >
//       <Drawer.Screen
//         name="Categories"
//         component={CategoriesScreen}
//         options={{
//           title: "All Categories",
//           drawerIcon: ({ color, size }) => (
//             <Ionicons name="list" color={color} size={size} />
//           ),
//         }}
//       />
//       <Drawer.Screen
//         name="Favorites"
//         component={FavoritesScreen}
//         options={{
//           title: "Favorites",
//           drawerIcon: ({ color, size }) => (
//             <Ionicons name="star" color={color} size={size} />
//           ),
//         }}
//       />
//     </Drawer.Navigator>
//   );
// }
// export default function App() {
//   return (
//     <>
//       <StatusBar style="light" />
//       <FavoritesContextProvider>
//         <NavigationContainer>
//           <Stack.Navigator
//             screenOptions={{
//               headerStyle: { backgroundColor: "#351401" },
//               headerTintColor: "white",
//               contentStyle: {
//                 backgroundColor: "#3f2f25",
//               },
//             }}
//           >
//             <Stack.Screen
//               name="Drawer"
//               component={DrawerNavigator}
//               options={{
//                 headerShown: false,
//               }}
//             />
//             <Stack.Screen
//               name="MealsOverview"
//               component={MealsOverviewScreen}
//             />
//             <Stack.Screen
//               name="MealDetail"
//               component={MealDetailScreen}
//               options={{
//                 title: "About the Meal",
//               }}
//             />
//           </Stack.Navigator>
//         </NavigationContainer>
//       </FavoritesContextProvider>
//     </>
//   );
// }

// const styles = StyleSheet.create({});

// import { NavigationContainer } from "@react-navigation/native";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import WelcomeScreen from "./UdemyCourse/DrawerExample/screens/WelcomeScreen";
// import UserScreen from "./UdemyCourse/DrawerExample/screens/UserScreen";
// import { Ionicons } from "@expo/vector-icons";

// const BottomTab = createBottomTabNavigator();
// export default function App() {
//   return (
//     <NavigationContainer>
//       <BottomTab.Navigator
//         screenOptions={{
//           headerStyle: { backgroundColor: "#3c0a6b" },
//           headerTintColor: "white",
//           tabBarActiveTintColor: "#3c0a6b",
//         }}
//       >
//         <BottomTab.Screen
//           name="Welcome"
//           component={WelcomeScreen}
//           options={{
//             tabBarIcon: ({ color, size }) => (
//               <Ionicons name="home" color={color} size={size} />
//             ),
//           }}
//         />
//         <BottomTab.Screen
//           name="User"
//           component={UserScreen}
//           options={{
//             tabBarIcon: ({ color, size }) => (
//               <Ionicons name="person" color={color} size={size} />
//             ),
//           }}
//         />
//       </BottomTab.Navigator>
//     </NavigationContainer>
//   );
// }

//Expense Tracker Example
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { NavigationContainer } from "@react-navigation/native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import { StatusBar, StyleSheet } from "react-native";
// import { GlobalStyles } from "./UdemyCourse/ExpenseTrackerApp/constants/styles";
// import AllExpenses from "./UdemyCourse/ExpenseTrackerApp/screens/AllExpenses";
// import ManageExpenses from "./UdemyCourse/ExpenseTrackerApp/screens/ManageExpenses";
// import RecentExpenses from "./UdemyCourse/ExpenseTrackerApp/screens/RecentExpenses";
// import { Ionicons } from "@expo/vector-icons";
// import IconButton from "./UdemyCourse/ExpenseTrackerApp/components/UI/IconButton";
// import ExpensesContextProvider from "./UdemyCourse/ExpenseTrackerApp/store/expenses-context";
// const Stack = createNativeStackNavigator();
// const BottomTabs = createBottomTabNavigator();

// function ExpensesOverview() {
//   return (
//     <BottomTabs.Navigator
//       screenOptions={({ navigation }) => ({
//         headerStyle: { backgroundColor: GlobalStyles.colors.primary500 },
//         headerTintColor: "white",
//         tabBarStyle: { backgroundColor: GlobalStyles.colors.primary500 },
//         tabBarActiveTintColor: GlobalStyles.colors.accent500,
//         headerRight: ({ tintColor }) => (
//           <IconButton
//             icon="add"
//             color={tintColor}
//             size={24}
//             onPress={() => {
//               navigation.navigate("ManageExpense");
//             }}
//           />
//         ),
//       })}
//     >
//       <BottomTabs.Screen
//         name="RecentExpenses"
//         component={RecentExpenses}
//         options={{
//           title: "Recent Expenses",
//           tabBarLabel: "Recent",
//           tabBarIcon: ({ color, size }) => (
//             <Ionicons name="hourglass" color={color} size={size} />
//           ),
//         }}
//       />
//       <BottomTabs.Screen
//         name="AllExpenses"
//         component={AllExpenses}
//         options={{
//           title: "All Expenses",
//           tabBarLabel: "All Expenses",
//           tabBarIcon: ({ color, size }) => (
//             <Ionicons
//               name="calendar"
//               color={color}
//               size={size}
//               onPress={() => {}}
//             />
//           ),
//         }}
//       />
//     </BottomTabs.Navigator>
//   );
// }
// export default function App() {
//   return (
//     <>
//       <StatusBar style="light" />
//       <ExpensesContextProvider>
//         <NavigationContainer>
//           <Stack.Navigator
//             screenOptions={{
//               headerStyle: { backgroundColor: GlobalStyles.colors.primary500 },
//               headerTintColor: "white",
//             }}
//           >
//             <Stack.Screen
//               name="ExpensesOverview"
//               component={ExpensesOverview}
//               options={{
//                 headerShown: false,
//               }}
//             />
//             <Stack.Screen
//               name="ManageExpense"
//               component={ManageExpenses}
//               options={{
//                 presentation: "modal",
//               }}
//             />
//           </Stack.Navigator>
//         </NavigationContainer>
//       </ExpensesContextProvider>
//     </>
//   );
// }

// const styles = StyleSheet.create({});

//User Authentication

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { useContext } from "react";
import { Colors } from "./UdemyCourse/UserAuthentication/constants/styles";

import LoginScreen from "./UdemyCourse/UserAuthentication/screens/LoginScreen";
import SignupScreen from "./UdemyCourse/UserAuthentication/screens/SignupScreen";
import AuthContextProvider, {
  AuthContext,
} from "./UdemyCourse/UserAuthentication/store/auth-context";

const Stack = createNativeStackNavigator();

function AuthStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: Colors.primary500 },
        headerTintColor: "white",
        contentStyle: { backgroundColor: Colors.primary100 },
      }}
    >
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
    </Stack.Navigator>
  );
}

function AuthenticatedStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: Colors.primary500 },
        headerTintColor: "white",
        contentStyle: { backgroundColor: Colors.primary100 },
      }}
    >
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
    </Stack.Navigator>
  );
}

function Navigation() {
  const authCtx = useContext(AuthContext);

  return (
    <NavigationContainer>
      {!authCtx.isAuthenticated && <AuthStack />}
      {authCtx.isAuthenticated && <AuthenticatedStack />}
    </NavigationContainer>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <AuthContextProvider>
        <Navigation />
      </AuthContextProvider>
    </>
  );
}
