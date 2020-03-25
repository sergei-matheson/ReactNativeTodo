import React, {FC} from 'react';
import {Text, StyleSheet} from 'react-native';

export const Header: FC = ({children}) => (
  <Text accessibilityRole="header" style={styles.header}>
    {children}
  </Text>
);

const styles = StyleSheet.create({
  header: {
    marginBottom: 5,
    fontSize: 24,
    fontWeight: '600',
    color: 'black',
  },
});
