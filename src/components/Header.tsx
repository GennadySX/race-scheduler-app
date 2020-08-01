import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {styles} from '../styles';

export interface IHeader {
  goBack?: any;
  title: string;
}

export default function Header(props: IHeader) {
  return (
    <View style={[styles.headerBlock, styles.background]}>
      <View style={[styles.container, {width: '15%'}]}>
        {props.goBack && (
          <TouchableOpacity
            style={styles.headerBackBtn}
            onPress={() => props.goBack()}>
            <Text style={styles.headerTitle}>Назад</Text>
          </TouchableOpacity>
        )}
      </View>
      <View style={[styles.container]}>
        <Text style={styles.headerTitle}>{props.title}</Text>
      </View>
      <View  style={{width: "15%"}}/>
    </View>
  );
}
