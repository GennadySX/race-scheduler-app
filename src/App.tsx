import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Routes} from './routes';
import {Provider} from 'react-redux';
import {store} from './store/store';

//import {PersistGate} from 'redux-persist/es/integration/react';

const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName={Routes[0].name}>
          {Routes.map((screen: any, index: number) => (
            <Stack.Screen
              key={index}
              name={screen.name}
              component={screen.component}
              options={{
                title: screen.title,
                headerStyle: {
                  backgroundColor: '#2546b4',
                },
                headerTintColor: '#fff',
              }}
            />
          ))}
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
