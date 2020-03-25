import React, {FC} from 'react';
import {StyleSheet, Switch, Text, View} from 'react-native';
import {TodoItem} from '../types/TodoItem';

type OnValueChange = (value: boolean) => void;

export const ItemEntry: FC<{
  item: TodoItem;
  onValueChange: OnValueChange;
}> = ({item, onValueChange}) => (
  <View style={styles.itemEntry}>
    <Text>{item.name}</Text>
    <Switch value={item.done} onValueChange={onValueChange} />
  </View>
);

const styles = StyleSheet.create({
  itemEntry: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 5,
  },
});
