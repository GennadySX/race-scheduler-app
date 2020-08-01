import React from 'react';
import {styles} from '../styles/index';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

export function DriverTable({driver}: any) {
  return (
    <View style={styles.section}>
      <View style={styles.tableBlock}>
        <View style={[styles.cell, {width: 40}]}>
          <Text style={styles.tableHeadText}>id</Text>
        </View>
        <View style={[styles.cell, {width: 90}]}>
          <Text style={styles.tableHeadText}>Full Name</Text>
        </View>
        <View style={[styles.cell, {width: 70}]}>
          <Text style={styles.tableHeadText}>Nationality</Text>
        </View>
        <View style={[styles.cell, {width: 70}]}>
          <Text style={styles.tableHeadText}>Date birth</Text>
        </View>
        <View style={[styles.cell, {width: 70}]}>
          <Text style={styles.tableHeadText}>Permanent Number</Text>
        </View>
      </View>
      <View style={styles.tableBlock}>
        <View style={[styles.cell, {width: 40}]}>
          <Text style={styles.cellTouchableText}>{driver.driverId}</Text>
        </View>
        <View style={[styles.cell, {width: 90}]}>
          <Text style={styles.cellTouchableText}>
            {driver.familyName} {driver.givenName}
          </Text>
        </View>
        <View style={[styles.cell, {width: 70}]}>
          <Text style={styles.cellTouchableText}>{driver.nationality}</Text>
        </View>
        <View style={[styles.cell, {width: 70}]}>
          <Text style={styles.cellTouchableText}>{driver.dateOfBirth}</Text>
        </View>
        <View style={[styles.cell, {width: 70}]}>
          <Text style={styles.cellTouchableText}>{driver.permanentNumber}</Text>
        </View>
      </View>
    </View>
  );
}
