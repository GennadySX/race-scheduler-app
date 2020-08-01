import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export interface IPagination {
  min: number;
  max: number;
  current: number;
  onClick: (n: number) => void;
}

export function Pagination({min, max, current, onClick}: IPagination) {
  const f =
    max - current === 3
      ? max - current < 2 && max - current === 2
        ? current
        : max - 3
      : max - current <= 2
      ? max <= 4
        ? min
        : max - 3
      : current;

  const d =
    max - current === 2 ? current : max - current <= 1 ? max - 2 : current + 1;

  const isActive = (is: number | undefined) =>
    is === current && {backgroundColor: 'gray', borderColor: 'gray'};

  const setPage = (n: number) => n <= max && n >= min && onClick(n);

  return (
    <View style={s.section}>
      <View key={'header'} style={s.header}>
        <TouchableOpacity
          style={[s.pageTouchable, isActive(min)]}
          onPress={() => setPage(current - 1)}>
          <Text style={[s.headerTouchableText, s.arr]}> &larr; </Text>
        </TouchableOpacity>
        {max >= 4 && (
          <TouchableOpacity
            style={[s.pageTouchable, isActive(f)]}
            onPress={() => setPage(f)}>
            <Text style={s.headerTouchableText}>{f}</Text>
          </TouchableOpacity>
        )}
        {max >= 3 && (
          <TouchableOpacity
            style={[s.pageTouchable, isActive(d)]}
            onPress={() => setPage(d)}>
            <Text style={s.headerTouchableText}> {d} </Text>
          </TouchableOpacity>
        )}
        {max - current > 3 ? (
          <TouchableOpacity style={{marginRight: 15}} onPress={() => {}}>
            <Text style={{fontSize: 20, fontWeight: 'bold', color: 'black'}}>
              {' '}
              ...{' '}
            </Text>
          </TouchableOpacity>
        ) : max >= 2 ? (
          <TouchableOpacity
            style={[s.pageTouchable, isActive(max - 1)]}
            onPress={() => setPage(max - 1)}>
            <Text style={s.headerTouchableText}> {max - 1} </Text>
          </TouchableOpacity>
        ) : null}

        <TouchableOpacity
          style={[s.pageTouchable, isActive(max)]}
          onPress={() => setPage(max)}>
          <Text style={s.headerTouchableText}>{max}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[s.pageTouchable, {marginRight: 0}, isActive(max)]}
          onPress={() => setPage(current + 1)}>
          <Text style={[s.headerTouchableText, s.arr]}> &rarr; </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const s = StyleSheet.create({
  section: {
    padding: 15,
    paddingBottom: 0,
  },
  header: {
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  pageTouchable: {
    justifyContent: 'center',
    padding: 7,
    width: 35,
    height: 35,
    borderColor: '#617eff',
    borderWidth: 2,
    borderRadius: 50,
    backgroundColor: '#617eff',
    marginRight: 15,
  },
  headerTouchableText: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'white',
  },
  arr: {
    fontSize: 20,
    position: 'relative',
    bottom: 5,
  },
});
