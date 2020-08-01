import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {styles} from '../styles/index';
export default class DataTable extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      isLoading: true,
    };
  }

  render() {
    const {result} = this.props;
    return (
      <View style={styles.section}>
        <Text style={styles.blockTitle}>{result.raceName}</Text>
        <View style={styles.tableBlock}>
          <View style={[styles.cell, {width: 40}]}>
            <Text style={styles.tableHeadText}>id</Text>
          </View>
          <View style={[styles.cell, {width: 90}]}>
            <Text style={styles.tableHeadText}>Constructor</Text>
          </View>
          <View style={[styles.cell, {width: 70}]}>
            <Text style={styles.tableHeadText}>Driver</Text>
          </View>
          <View style={[styles.cell, {width: 70}]}>
            <Text style={styles.tableHeadText}>Time</Text>
          </View>
          <View style={[styles.cell, {width: 70}]}>
            <Text style={styles.tableHeadText}>Average Speed</Text>
          </View>
        </View>
        {result.Results.map((race: any, index: number) => (
          <View
            key={index}
            style={[
              styles.tableBlock,
              index === result.length - 1 && {marginBottom: 50},
            ]}>
            <View style={[styles.cell, {width: 40}]}>
              <Text style={styles.cellTouchableText}>{race.position}</Text>
            </View>
            <View style={[styles.cell, {width: 90}]}>
              <Text style={styles.cellTouchableText}>
                {race.Constructor.name}
              </Text>
            </View>
            <View style={[styles.cell, {width: 70}]}>
              <TouchableOpacity
                onPress={() => this.props.onDriver(race.Driver.driverId)}>
                <Text
                  style={[
                    styles.cellTouchableText,
                    {color: 'blue', textDecorationLine: 'underline'},
                  ]}>
                  {race.Driver.familyName} {race.Driver.givenName}
                </Text>
              </TouchableOpacity>
            </View>
            <View style={[styles.cell, {width: 70}]}>
              <Text style={styles.cellTouchableText}>
                {race.FastestLap && race.FastestLap.Time.time}
              </Text>
            </View>
            <View style={[styles.cell, {width: 90}]}>
              {race.FastestLap && (
                <Text style={styles.cellTouchableText}>
                  {race.FastestLap.AverageSpeed.speed}{' '}
                  {race.FastestLap.AverageSpeed.units}
                </Text>
              )}
            </View>
          </View>
        ))}
      </View>
    );
  }
}
