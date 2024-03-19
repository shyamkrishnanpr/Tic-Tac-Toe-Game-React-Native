import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

import type {PropsWithChildren} from 'react';

import Icon from 'react-native-vector-icons/FontAwesome';

type IconsProps = PropsWithChildren<{
  name: string;
}>;

const Icons = ({name}: IconsProps) => {
  switch (name) {
    case 'circle':
      return <Icon name="circle-thin" size={38} color="green" />;
      break;
    case 'cross':
      return <Icon name="times" size={38} color="red" />;
      break;

    default:
      return <Icon name="pencil" size={38} color="blue" />;
  }
};

const styles = StyleSheet.create({});

export default Icons;
