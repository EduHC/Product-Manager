import styled from 'styled-components/native';

export const Container = styled.View`
  display: flex;
  flex: 1;
  background: #fbfbfb;
  position: relative;
`;

export const Text = styled.Text`
  font-size: 24px;
  align-self: center;
  color: #ebebeb;
  padding: 10px;
`;

export const Title = styled.Text`
  align-self: center;

  font-size: 36px;
  color: #480e76;
  margin-top: 80px;
`;

export const Form = styled.View`
  height: 290px;
  margin: 30px 24px 0 24px;
  justify-content: space-around;
`;

export const Field = styled.View`
  height: 60px;
  flex-direction: row;
  align-items: center;
  align-self: flex-end;
`;

export const InputName = styled.Text`
  font-size: 20px;
  color: #480e76;
`;

export const Input = styled.TextInput`
  width: 70%;
  height: 50px;
  border: 1px solid #480e76;
  border-radius: 20px;
  padding: 10px;
`;

export const FinishButton = styled.View`
  width: 239px;
  height: 58px;

  display: flex;
  align-self: center;
  justify-content: center;

  margin: 70px 0 100px 0;
  border-radius: 10px;
`;

export const Square = styled.View`
  width: 100%;
  height: 250px;
  position: absolute;
  top: -200px;
`;

export const Icon = styled.Image`
  height: 30px;
  width: 30px;
  padding: 10px;
`;
