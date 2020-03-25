/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useState} from 'react';
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {AddItem} from './src/components/AddItem';
import {Header} from './src/components/Header';
import {ItemEntry} from './src/components/ItemEntry';
import {updateArray} from './src/lib/updateArray';
import {NewItem} from './src/types/NewItem';
import {TodoItem} from './src/types/TodoItem';

declare var global: {HermesInternal: null | {}};

const App = () => {
  const [items, setItems] = useState<TodoItem[]>([]);

  const updateItem = (item: TodoItem) =>
    setItems(updateArray(items, item, ({id}) => id === item.id));

  const addItem = (item: NewItem) =>
    setItems(items.concat([{...item, id: items.length + 1}]));

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View style={styles.body}>
          {items.length > 0 && (
            <FlatList
              ListHeaderComponent={<Header>Todo</Header>}
              data={items}
              renderItem={({item}) => (
                <ItemEntry
                  item={item}
                  onValueChange={value => {
                    updateItem({...item, done: value});
                  }}
                />
              )}
              keyExtractor={item => `${item.id}`}
            />
          )}
          <AddItem onAdd={addItem} />
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: Colors.white,
  },
});

export default App;
