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
import {Header} from './src/components/Header';
import {ItemEntry} from './src/components/ItemEntry';
import {updateArray} from './src/utils';
import {TodoItem} from './src/TodoItem';

declare var global: {HermesInternal: null | {}};

const App = () => {
  const [items, setItems] = useState([
    {id: 1, name: 'The thing', done: false},
    {id: 2, name: 'The other thing', done: true},
    {id: 3, name: 'The third thing', done: true},
  ]);

  const updateItem = (item: TodoItem) =>
    setItems(updateArray(items, item, ({id}) => id === item.id));

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View style={styles.body}>
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
            keyExtractor={item => item.name}
          />
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
