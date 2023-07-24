import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { BottomTabNavigation } from "./src/navigation/BottomTabNavigation";
import { Provider } from "react-redux";
import { store, persisor } from "./src/store/store";
import { PersistGate } from "redux-persist/es/integration/react";

export default function App() {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <PersistGate persistor={persisor}>
          <NavigationContainer>
            <BottomTabNavigation />
          </NavigationContainer>
        </PersistGate>
      </Provider>
    </SafeAreaProvider>
  );
}
