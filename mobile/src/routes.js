import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Main from './pages/Main';
import Listagem from './pages/Listagem';
import Delete from './pages/DeletaProduto';
import Atualiza from './pages/AtualizaProduto';
import Adicionar from './pages/NovoProduto';

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main" headerMode="none">
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="Listagem" component={Listagem} />
        <Stack.Screen name="Deletar" component={Delete} />
        <Stack.Screen name="Atualizar" component={Atualiza} />
        <Stack.Screen name="Adicionar" component={Adicionar} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
