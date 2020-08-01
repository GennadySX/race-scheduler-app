import React from 'react';
import {ActivityIndicator, Dimensions, StyleSheet, Text, View} from 'react-native';
const window = Dimensions.get('window')

export default function Loading(props: any) {
  return (
    <View style={[s.container, s.horizontal]}>
      <View style={{alignSelf: 'center'}}>
        <ActivityIndicator size="large" color={s.spinner.color} />
        <Text style={{color: '#fafafa', paddingTop: 10, fontSize: 17}}>
          Подождите ...
        </Text>
      </View>
    </View>
  );
}

const s = StyleSheet.create({
  container: {
    flex: 1,
    position: 'absolute',
    backgroundColor: 'rgb(219,113,35)',
    justifyContent: 'center',
    width: window.width,
    height: window.height,
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
  spinner: {
    color: '#f4ffef',
  },
});
