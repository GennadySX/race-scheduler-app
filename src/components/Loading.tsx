import React from 'react';
import {ActivityIndicator, Text, View} from 'react-native';
import {styles} from "../styles";

export default function Loading(props: any) {
  return (
    <View style={[styles.container, styles.horizontal, styles.background]}>
      <View style={{alignSelf: 'center'}}>
        <ActivityIndicator size="large" color={styles.spinner.color} />
        <Text style={{color: '#fafafa', paddingTop: 10, fontSize: 17}}>
          Подождите ...
        </Text>
      </View>
    </View>
  );
}
