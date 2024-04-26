import { memo } from 'react';
import { StyleProp, TextStyle } from 'react-native';
import { TextInput } from 'react-native-paper';

interface Props {
  mode?: 'outlined' | 'flat' | undefined;
  label: string;
  style?: StyleProp<TextStyle>;
  secure?: boolean;
  onChangeText?: ((text: string) => void) & Function;
}

function $Input(props: Props) {
  return (
    <TextInput
      mode={props.mode}
      label={props.label}
      style={[
        {
          width: '100%',
          backgroundColor: '#49454FFF',
          borderColor: '#49454FFF',
        },
        props.style,
      ]}
      outlineStyle={{
        borderRadius: 10,
      }}
      secureTextEntry={props.secure}
      outlineColor='#49454FFF'
      activeOutlineColor='#D0BCFFFF'
      onChangeText={props.onChangeText}
    />
  );
}

export const Input = memo($Input);
