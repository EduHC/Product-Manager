import React, { useState, useRef } from 'react';
import { TouchableOpacity } from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import api from '../../services/api';
import alert from '../../util/alert';
import arrow from '../../assets/back-arrow.png';

import {
  Container,
  Title,
  Form,
  Field,
  InputName,
  Input,
  Text,
  FinishButton,
  Square,
  Icon,
} from './styles';

function AtualizaProduto({ route, navigation }) {
  const item = route.params;
  const [newNome, setNome] = useState(item.nome);
  const [newCategoria, setCategoria] = useState(item.categoria);
  const [newPreco, setPreco] = useState(item.preco);
  const categoriaRef = useRef();
  const precoRef = useRef();

  function handleSubmit() {
    if (typeof newNome !== 'string' || newNome === '') {
      alert('Campo Inválido', 'Campo nome inválido');
      return;
    }

    if (typeof newCategoria !== 'string' || newCategoria === '') {
      alert('Campo Inválido', 'Campo categoria inválido');
      return;
    }

    if (typeof newPreco !== 'string' || newPreco === '') {
      alert('Campo Inválido', 'Campo preço inválido');
      return;
    }

    if (
      newNome === item.nome &&
      newCategoria === item.categoria &&
      newPreco === item.preco
    ) {
      alert(
        'Aviso',
        'Nenhuma informação alterada, favor, altere algo caso queira atualizar'
      );
      return;
    }

    try {
      api.put(`atualizar/${item.formatedId}`, {
        novoNome: newNome,
        novoPreco: newPreco,
        novaCategoria: newCategoria,
      });

      alert('Aviso', 'Item atulizado com sucesso');
    } catch (err) {
      alert('Falha na requisição', 'Falha ao conecatar com o servidor');
      throw new Error(err);
    }

    navigation.navigate('Main');
  }

  return (
    <Container>
      <TouchableOpacity
        style={{ position: 'absolute', top: 20, left: 10, zIndex: 1 }}
        onPress={() => {
          navigation.navigate('Main');
        }}
      >
        <Icon source={arrow} />
      </TouchableOpacity>
      <Title>Atualizar Produto</Title>
      <Form>
        <Field>
          <InputName>Nome: </InputName>
          <Input
            value={newNome}
            onChangeText={setNome}
            placeholder={item.nome}
            returnKeyType="next"
            onSubmitEditing={() => categoriaRef.current.focus()}
          />
        </Field>
        <Field>
          <InputName>Categoria: </InputName>
          <Input
            value={newCategoria}
            onChangeText={setCategoria}
            placeholder={item.categoria}
            ref={categoriaRef}
            returnKeyType="next"
            onSubmitEditing={() => precoRef.current.focus()}
          />
        </Field>
        <Field>
          <InputName>Preco: </InputName>
          <Input
            keyboardType="number-pad"
            value={newPreco}
            onChangeText={setPreco}
            placeholder={item.preco}
            ref={precoRef}
            returnKeyType="send"
            onSubmitEditing={handleSubmit}
          />
        </Field>
      </Form>
      <TouchableOpacity onPress={handleSubmit}>
        <FinishButton>
          <LinearGradient
            colors={['#723CCB', '#480E76']}
            style={{ borderRadius: 10, flex: 1 }}
          >
            <Text>Atualizar Produto</Text>
          </LinearGradient>
        </FinishButton>
      </TouchableOpacity>
      <Square>
        <LinearGradient colors={['#723CCB', '#fbfbfb']} style={{ flex: 1 }} />
      </Square>
    </Container>
  );
}

export default AtualizaProduto;
