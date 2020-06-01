import styled from 'styled-components/native';

export const Container = styled.View`
  display: flex;
  flex: 1;
  background: #fbfbfb;
  position: relative;
`;

export const Title = styled.Text`
  align-self: center;

  font-size: 36px;
  color: #480e76;
  margin-top: 80px;
`;

export const ContentField = styled.View`
  height: 310px;
  margin: 30px 24px 0 24px;
  justify-content: space-around;
`;

export const Field = styled.View`
  height: 60px;
  flex-direction: row;
  align-items: center;
  align-self: center;
`;

export const InputName = styled.Text`
  font-size: 20px;
  color: #480e76;
`;

export const Text = styled.Text`
  font-size: 24px;
  color: #480e76;
`;

export const TextButton = styled.Text`
  font-size: 24px;
  align-self: center;
  color: #ebebeb;
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
