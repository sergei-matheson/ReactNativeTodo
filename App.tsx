/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {FC, useState} from 'react';
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Switch,
  Text,
  View,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {updateArray} from './src/utils';

declare var global: {HermesInternal: null | {}};

interface TodoItem {
  id: number;
  name: string;
  done: boolean;
}

type OnValueChange = (value: boolean) => void;

const ItemEntry: FC<{item: TodoItem; onValueChange: OnValueChange}> = ({
  item,
  onValueChange,
}) => (
  <View style={styles.itemEntry}>
    <Text>{item.name}</Text>
    <Switch value={item.done} onValueChange={onValueChange} />
  </View>
);

const Header: FC = ({children}) => (
  <Text accessibilityRole="header" style={styles.header}>
    {children}
  </Text>
);

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
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  itemEntry: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 5,
  },
  header: {
    marginBottom: 5,
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
