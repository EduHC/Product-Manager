import React from 'react';
import { TouchableOpacity } from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import api from '../../services/api';
import alert from '../../util/alert';
import arrow from '../../assets/back-arrow.png';

import {
  Container,
  Title,
  ContentField,
  InputName,
  Field,
  Text,
  FinishButton,
  TextButton,
  Square,
  Square2,
  Icon,
} from './styles';

function DeletaProduto({ route, navigation }) {
  const item = route.params;

  function handleSubmit() {
    api.delete(`deletar/${item.formatedId}`).then(function (response) {
      if (response.status === 200) {
        alert('Aviso', 'Item deletado com sucesso');
      } else {
        alert('Aviso', 'Falha ao tentar deletar...');
      }
    });

    navigation.navigate('Main');
  }

  return (
    <Container>
      <TouchableOpacity
        style={{ position: 'absolute', top: 20, left: 10, zIndex: 1 }}
        onPress={() => {
          navigation.pop();
        }}
      >
        <Icon source={arrow} />
      </TouchableOpacity>
      <Title>Deletar Produto</Title>
      <ContentField>
        <Field>
          <InputName>Nome: </InputName>
          <Text>{item.nome}</Text>
        </Field>
        <Field>
          <InputName>Categoria: </InputName>
          <Text>{item.categoria}</Text>
        </Field>
        <Field>
          <InputName>Preco: </InputName>
          <Text>{item.preco}</Text>
        </Field>
      </ContentField>
      <TouchableOpacity onPress={handleSubmit}>
        <FinishButton>
          <LinearGradient
            colors={['#723CCB', '#480E76']}
            style={{ borderRadius: 10, flex: 1 }}
          >
            <TextButton>Deletar</TextButton>
          </LinearGradient>
        </FinishButton>
      </TouchableOpacity>
      <Square>
        <LinearGradient colors={['#723CCB', '#fbfbfb']} style={{ flex: 1 }} />
      </Square>
      <Square2>
        <LinearGradient colors={['#723CCB', '#fbfbfb']} style={{ flex: 1 }} />
      </Square2>
    </Container>
  );
}

export default DeletaProduto;
