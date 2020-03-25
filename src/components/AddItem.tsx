import React, {FC, useState} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {Header} from './Header';
import {NewItem} from '../types/NewItem';

type OnAdd = (value: NewItem) => void;

const LabelledInput: FC<{label: string; error?: string}> = ({
  label,
  error,
  children,
}) => (
  <View style={styles.labelledInput}>
    <Text style={styles.error}>{error}</Text>
    <Text style={styles.label}>{label}</Text>
    {children}
  </View>
);

const initialItem = {name: '', done: false};

export const AddItem: FC<{
  onAdd: OnAdd;
}> = ({onAdd}) => {
  const [item, setItem] = useState<NewItem>(initialItem);
  const [error, setError] = useState('');

  const handleSubmit = (newItem: NewItem) => {
    if (newItem.name) {
      onAdd(newItem);
      setError('');
      setItem(initialItem);
    } else {
      setError('Name must be specified');
    }
  };

  return (
    <View style={styles.itemEntry}>
      <Header>Add new item:</Header>
      <LabelledInput label="Name" error={error}>
        <TextInput
          onChangeText={(name: string) => setItem({...item, name})}
          value={item.name}
          onSubmitEditing={() => handleSubmit(item)}
          style={styles.textInput}
        />
      </LabelledInput>
    </View>
  );
};

const styles = StyleSheet.create({
  itemEntry: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    padding: 5,
  },
  itemInputs: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: 5,
  },
  labelledInput: {
    flexDirection: 'column',
    padding: 5,
  },
  label: {
    color: 'black',
    opacity: 0.5,
  },
  error: {
    color: 'red',
  },
  textInput: {
    borderBottomWidth: 1,
  },
});
