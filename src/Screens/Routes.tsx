import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Details from './Details';
import Home from './Home';
import Results from './Results';

const Stack = createNativeStackNavigator();

export enum Screen {
    Home = "Home",
    Results = "Results",
    Details = "Details",
}


export function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={Screen.Home} component={Home} options={{headerShown:false}} />
        <Stack.Screen name={Screen.Results} component={Results}  options={{headerShown:false}}/>
        <Stack.Screen name={Screen.Details} component={Details} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}