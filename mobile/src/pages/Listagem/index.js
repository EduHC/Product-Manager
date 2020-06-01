import React, { useState, useEffect } from 'react';
import { TouchableOpacity } from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import api from '../../services/api';
import alert from '../../util/alert';
import trash from '../../assets/trash.png';
import edit from '../../assets/edit.png';
import arrow from '../../assets/back-arrow.png';

import {
  Container,
  Title,
  Lista,
  Square,
  Square2,
  Item,
  Name,
  Text,
  ButtonContainer,
  SeparationContainer,
  SeparationContainer2,
  FiledContainer,
  EmptyArray,
  Icon,
} from './styles';

function AtualizaProduto({ navigation }) {
  const [products, setProducts] = useState([]);

  async function loadProducts() {
    let response = [];

    try {
      response = await api.get('pesquisa');
    } catch (err) {
      alert('Falha na requisição', 'Falha ao conecatar com o servidor');
      return;
    }

    if (response.data.message) {
      return;
    }
    setProducts(response.data);
  }

  useEffect(() => {
    loadProducts();
  }, []);

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
      <Title>Produtos</Title>

      {products.length === 0 ? (
        <EmptyArray>Estoque está vazio</EmptyArray>
      ) : (
        <Lista
          data={products}
          keyExtractor={(product) => product.formatedId}
          renderItem={({ item }) => (
            <>
              <Item>
                <FiledContainer>
                  <Name>Produto: {item.nome}</Name>
                  <Text>Categoria: {item.categoria}</Text>
                  <Text>Preço: {item.preco}</Text>
                </FiledContainer>
                <ButtonContainer>
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate('Atualizar', item);
                    }}
                  >
                    <Icon source={edit} />
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate('Deletar', item);
                    }}
                  >
                    <Icon source={trash} />
                  </TouchableOpacity>
                </ButtonContainer>
              </Item>
              <SeparationContainer />
              <SeparationContainer2 />
            </>
          )}
        />
      )}

      <Square>
        <LinearGradient colors={['#723CCB', '#fbfbfb']} style={{ flex: 1 }} />
      </Square>
      <Square2>
        <LinearGradient colors={['#723CCB', '#fbfbfb']} style={{ flex: 1 }} />
      </Square2>
    </Container>
  );
}

export default AtualizaProduto;
