import React, { useState, useRef } from 'react';
import { TouchableOpacity, KeyboardAvoidingView } from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import api from '../../services/api';
import alert from '../../util/alert';
import arrow from '../../assets/back-arrow.png';

import {
  Container,
  Title,
  Form,
  Field,
  Square,
  AddButton,
  Text,
  InputName,
  Input,
  Icon,
} from './styles';

function NovoProduto({ navigation }) {
  const [newNome, setNome] = useState('');
  const [newCategoria, setCategoria] = useState('');
  const [newPreco, setPreco] = useState('');
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

    try {
      api
        .post('cadastro', {
          nome: newNome,
          preco: newPreco,
          categoria: newCategoria,
        })
        .then(function (response) {
          if (response.status === 200) {
            alert('Aviso', 'Item adicionado com sucesso');
          } else {
            alert('Aviso', 'Falha ao tentar adicionar...');
          }
        });
    } catch (err) {
      alert('Falha na requisição', 'Falha ao conecatar com o servidor');
      throw new Error(err);
    }

    setNome('');
    setCategoria('');
    setPreco('');
  }

  function handleEvent(event) {
    event.preventDefault();
    if (event.charCode >= 48 && event.charCode <= 57) return event;
    return false;
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
      <KeyboardAvoidingView behavior="position">
        <Title>Novo Produto</Title>
        <Form>
          <Field>
            <InputName>Nome: </InputName>
            <Input
              placeholder="Insira nome do produto"
              value={newNome}
              onChangeText={setNome}
              returnKeyType="next"
              onSubmitEditing={() => categoriaRef.current.focus()}
            />
          </Field>
          <Field>
            <InputName>Categoria: </InputName>
            <Input
              placeholder="Insira categoria do produto"
              value={newCategoria}
              onChangeText={setCategoria}
              ref={categoriaRef}
              returnKeyType="next"
              onSubmitEditing={() => precoRef.current.focus()}
            />
          </Field>
          <Field>
            <InputName>Preço: </InputName>
            <Input
              placeholder="Insira preço do produto"
              keyboardType="number-pad"
              onKeyPress={(event) => handleEvent(event)}
              value={newPreco}
              onChangeText={setPreco}
              ref={precoRef}
              returnKeyType="send"
              onSubmitEditing={handleSubmit}
            />
          </Field>
        </Form>
      </KeyboardAvoidingView>

      <TouchableOpacity onPress={handleSubmit}>
        <AddButton>
          <LinearGradient
            colors={['#723CCB', '#480E76']}
            style={{ borderRadius: 10, flex: 1 }}
          >
            <Text>Adicionar Produto</Text>
          </LinearGradient>
        </AddButton>
      </TouchableOpacity>
      <Square>
        <LinearGradient colors={['#723CCB', '#fbfbfb']} style={{ flex: 1 }} />
      </Square>
    </Container>
  );
}

export default NovoProduto;
