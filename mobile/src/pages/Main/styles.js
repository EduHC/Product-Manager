import styled from 'styled-components/native';

export const Container = styled.View`
  display: flex;
  flex: 1;
  position: relative;
  align-items: center;
  background: #fbfbfb;
`;

export const Title = styled.Text`
  align-self: center;

  font-size: 34px;
  color: #480e76;

  margin: 114px 37px 0 37px;

  text-align: center;
  font-weight: bold;
`;

export const Icon = styled.Image`
  align-self: center;
  margin-top: 5px;
  height: 75px;
  width: 70px;
`;

export const Text = styled.Text`
  font-size: 24px;
  align-self: center;
  color: #ebebeb;
  padding: 10px;
`;

export const AddButton = styled.View`
  width: 239px;
  height: 58px;

  display: flex;
  align-self: center;
  justify-content: center;

  margin: 70px 0 10px 0;
  border-radius: 10px;
`;

export const ListButton = styled.View`
  width: 239px;
  height: 58px;

  display: flex;
  align-self: center;
  justify-content: center;

  margin: 37px 0 90px 0;
  border-radius: 10px;
`;

export const Bottom = styled.View`
  flex: 1;
`;

export const Top = styled.View`
  flex: 1;
`;

export const Circle1 = styled.View`
  width: 288px;
  height: 288px;
  border-radius: 144px;
  position: absolute;
  left: -146px;
  top: -139px;
`;

export const Circle2 = styled.View`
  width: 288px;
  height: 288px;
  border-radius: 144px;
  position: absolute;
  right: -189px;
  top: 160px;
  transform: rotate(60deg);
`;
