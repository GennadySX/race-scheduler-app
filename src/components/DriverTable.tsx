import React from 'react';
import {styles} from '../styles/index';
import {
  View,
  Text
} from 'react-native';

export interface IDriverTable {
  driverId: number;
  givenName?: string;
  familyName?: string;
  nationality?: string;
  dateOfBirth?: string;
  permanentNumber?: string;
}


export function DriverTable({driverId, dateOfBirth, familyName, givenName, nationality, permanentNumber}: IDriverTable) {
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
          <Text style={styles.cellTouchableText}>{driverId}</Text>
        </View>
        <View style={[styles.cell, {width: 90}]}>
          <Text style={styles.cellTouchableText}>
            {familyName} {givenName}
          </Text>
        </View>
        <View style={[styles.cell, {width: 70}]}>
          <Text style={styles.cellTouchableText}>{nationality}</Text>
        </View>
        <View style={[styles.cell, {width: 70}]}>
          <Text style={styles.cellTouchableText}>{dateOfBirth}</Text>
        </View>
        <View style={[styles.cell, {width: 70}]}>
          <Text style={styles.cellTouchableText}>{permanentNumber}</Text>
        </View>
      </View>
    </View>
  );
}
