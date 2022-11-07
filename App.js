
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Main from './src/Screens/Main';
import Product from './src/Screens/Product';


const App = () => {

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer >
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name='Product'>{props => <Product {...props} />}</Stack.Screen>
        <Stack.Screen name='Main'>{props => <Main {...props} />}</Stack.Screen>

      </Stack.Navigator>
    </NavigationContainer>
  );
};


export default App;
