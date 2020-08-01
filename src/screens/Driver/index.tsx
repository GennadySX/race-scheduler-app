import React from 'react';
import {View} from 'react-native';
import {styles} from '../../styles';
import Header from '../../components/Header';
import {connect} from 'react-redux';
import {DriverTable} from '../../components/DriverTable';

function DriverScreen(props: any) {
  console.log('props state ', props.driver);
  return (
    <View style={[styles.container]}>
      <Header title={'Гонщик'} goBack={props.navigation.goBack} />
      <DriverTable driver={props.driver} />
    </View>
  );
}

export default connect((state: any) => {
  return {
    driver: state.driver.driver,
  };
})(DriverScreen);
