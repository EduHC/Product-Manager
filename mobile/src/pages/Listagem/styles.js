import styled from 'styled-components/native';

export const Container = styled.View`
  display: flex;
  flex: 1;
  background: #fbfbfb;
  position: relative;
`;

export const Title = styled.Text`
  align-self: center;

  font-size: 34px;
  color: #480e76;

  margin: 80px 0 40px 0;
`;

export const EmptyArray = styled.Text`
  align-self: center;

  font-size: 24px;
  color: #b6b6b6;

  margin: 80px 0 40px 0;
`;

export const Lista = styled.FlatList.attrs({
  showVerticalScrollIndicator: false,
})`
  max-height: 450px;
  width: 80%;
  align-self: center;
  border-radius: 10px;
`;

export const Item = styled.View`
  height: 100px;
  width: 100%;
  margin: 5px 0 10px 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const FiledContainer = styled.View`
  width: 180px;
`;

export const Name = styled.Text`
  font-size: 20px;
  color: #480e76;
`;

export const Text = styled.Text`
  font-size: 16px;
  color: #480e76;
`;

export const ButtonContainer = styled.View`
  width: 100%;
  height: 100%;
  max-width: 100px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  align-self: flex-start;
`;

export const SeparationContainer = styled.View`
  width: 100%;
  height: 2px;
  background: #723ccb;
  margin-bottom: 3px;
  border-radius: 2px;
`;
export const SeparationContainer2 = styled.View`
  width: 100%;
  height: 3px;
  background: #723ccb;
  border-radius: 2px;
`;

export const Square = styled.View`
  width: 100%;
  height: 250px;
  position: absolute;
  top: -200px;
`;
export const Square2 = styled.View`
  width: 100%;
  height: 250px;
  position: absolute;

  transform: rotate(180deg);
  bottom: -200px;
`;

export const Icon = styled.Image`
  height: 30px;
  width: 30px;
  padding: 10px;
`;
