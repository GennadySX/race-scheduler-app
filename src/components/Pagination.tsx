import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {styles} from '../styles';

export interface IPagination {
  min: number;
  max: number;
  current: number;
  onClick: (n: number) => void;
}

export function Pagination({min, max, current, onClick}: IPagination) {
  const firstBtn =
    max - current === 3
      ? max - current < 2 && max - current === 2
        ? current
        : max - 3
      : max - current <= 2
      ? max <= 4
        ? min
        : max - 3
      : current;

  const secondBtn =
    max - current === 2 ? current : max - current <= 1 ? max - 2 : current + 1;

  const isActive = (is: number | undefined) =>
    is === current && {backgroundColor: 'gray', borderColor: 'gray'};

  const setPage = (n: number) => n <= max && n >= min && onClick(n);

  return (
    <View style={styles.pg_section}>
      <View key={'header'} style={styles.pg_header}>
        <TouchableOpacity
          style={[styles.pg_pageTouchable, isActive(min)]}
          onPress={() => setPage(current - 1)}>
          <Text style={[styles.pg_headerTouchableText, styles.pg_arr]}>
            {' '}
            &larr;{' '}
          </Text>
        </TouchableOpacity>
        {max >= 4 && (
          <TouchableOpacity
            style={[styles.pg_pageTouchable, isActive(firstBtn)]}
            onPress={() => setPage(firstBtn)}>
            <Text style={styles.pg_headerTouchableText}>{firstBtn}</Text>
          </TouchableOpacity>
        )}
        {max >= 3 && (
          <TouchableOpacity
            style={[styles.pg_pageTouchable, isActive(secondBtn)]}
            onPress={() => setPage(secondBtn)}>
            <Text style={styles.pg_headerTouchableText}> {secondBtn} </Text>
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
            style={[styles.pg_pageTouchable, isActive(max - 1)]}
            onPress={() => setPage(max - 1)}>
            <Text style={styles.pg_headerTouchableText}> {max - 1} </Text>
          </TouchableOpacity>
        ) : null}

        <TouchableOpacity
          style={[styles.pg_pageTouchable, isActive(max)]}
          onPress={() => setPage(max)}>
          <Text style={styles.pg_headerTouchableText}>{max}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.pg_pageTouchable, {marginRight: 0}, isActive(max)]}
          onPress={() => setPage(current + 1)}>
          <Text style={[styles.pg_headerTouchableText, styles.pg_arr]}>
            {' '}
            &rarr;{' '}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
