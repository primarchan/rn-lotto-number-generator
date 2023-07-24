import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { HomeScreen } from "../screens/HomeScreen";
import { TabIcon } from "../components/TabIcon";
import { HistoryListScreen } from "../screens/HistoryListScreen";

const Tab = createBottomTabNavigator();

export const BottomTabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => {
        return {
          headerShown: false,
          tabBarIcon: ({ color }) => {
            const getIconName = () => {
              if (route.name === "Home") return "home";
              if (route.name === "History") return "time";
            };
            const iconName = getIconName();
            return <TabIcon iconName={iconName} iconColor={color} />;
          },
        };
      }}
    >
      <Tab.Screen name="Home" component={HomeScreen}></Tab.Screen>
      <Tab.Screen name="History" component={HistoryListScreen}></Tab.Screen>
    </Tab.Navigator>
  );
};
