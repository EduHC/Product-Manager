import { Alert } from 'react-native';

export default function (title, body) {
  return Alert.alert(title, body, [
    {
      text: 'Ok',
      onPress: () => console.log('Ok pressed'),
    },
  ]);
}
