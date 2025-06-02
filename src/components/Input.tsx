import React, {useState} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import ClearIcon from '../assets/Cerrar.png';

export const Input = () => {
  const [value, setValue] = useState('');
  const [isFocus, setIsFocus] = useState(false);
  return (
    <View style={isFocus ? styles.container : {}}>
      {(isFocus || value != '') && (
        <View style={styles.labelContainer}>
          <Text style={styles.label}>Correo electrónico</Text>
        </View>
      )}

      <TextInput
        style={[
          styles.input,
          isFocus && styles.inputFoucus,
          value && {paddingTop: 8},
        ]}
        placeholderTextColor={'#7876B1'}
        placeholder={!isFocus ? 'Escribe tu correo electrónico' : ''}
        onChangeText={setValue}
        value={value}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
      />
      {isFocus && (
        <TouchableOpacity
          style={styles.buttonClear}
          onPress={() => setValue('')}>
          <Image source={ClearIcon} style={styles.icon} />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 3,
    backgroundColor: '#7D77FF33',
    borderRadius: 15,
    boxSizing: 'content-box',
  },
  input: {
    width: 360,
    height: 60,
    backgroundColor: '#141534',
    borderRadius: 15,
    borderWidth: 2,
    borderColor: '#1D1C47',
    paddingHorizontal: 20,
    fontSize: 18,
    color: 'white',
    fontWeight: '500',
  },
  inputFoucus: {
    paddingTop: 8,
    borderColor: '#7D77FF',
  },
  buttonClear: {
    position: 'absolute',
    width: 60,
    height: '100%',
    paddingRight: 25,
    right: 0,
    top: 2.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: 25,
    height: 25,
  },
  labelContainer: {
    position: 'absolute',
    zIndex: 2,
    paddingTop: 10,
    paddingLeft: 20,
  },
  label: {
    fontSize: 10,
    color: '#7D77FF',
  },
});
