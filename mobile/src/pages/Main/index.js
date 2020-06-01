import React from 'react';
import { TouchableOpacity } from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

import {
  Container,
  Title,
  Circle1,
  Circle2,
  AddButton,
  ListButton,
  Icon,
  Text,
  Bottom,
  Top,
} from './styles';

import icon from '../../assets/box-icon.png';

const Main = ({ navigation }) => {
  return (
    <Container>
      <Top>
        <Title>Bem vindo ao Product Manager!</Title>
        <Icon source={icon} />
      </Top>
      <Circle1>
        <LinearGradient
          colors={['#723CCB', '#FBFBFB']}
          style={{ flex: 1, borderRadius: 144 }}
        />
      </Circle1>
      <Circle2>
        <LinearGradient
          colors={['#723CCB', '#FBFBFB']}
          style={{ flex: 1, borderRadius: 144 }}
        />
      </Circle2>
      <Bottom>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Adicionar');
          }}
        >
          <AddButton>
            <LinearGradient
              colors={['#723CCB', '#480E76']}
              style={{ borderRadius: 10, flex: 1 }}
            >
              <Text>Adicionar Produto</Text>
            </LinearGradient>
          </AddButton>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Listagem');
          }}
        >
          <ListButton>
            <LinearGradient
              colors={['#723CCB', '#480E76']}
              style={{ borderRadius: 10, flex: 1 }}
            >
              <Text>Itens Cadastrados</Text>
            </LinearGradient>
          </ListButton>
        </TouchableOpacity>
      </Bottom>
    </Container>
  );
};

export default Main;
