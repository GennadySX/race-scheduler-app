import React from 'react';
import {View} from 'react-native';
import {styles} from '../../styles';
import {connect, useSelector} from 'react-redux';
import {DriverTable} from '../../components/DriverTable';
import Loading from '../../components/Loading';

function DriverScreen() {
  //Это хуки редакса, а хуки реакта не использовал в проекте так как не видел нужды когда создал классы.
  const driver = useSelector((state: any) => state.driver.driver);
  const driverErr = useSelector((state: any) => state.driver.err);

  return driverErr ? (
    <Loading />
  ) : (
    <View style={[styles.container]}>
      <DriverTable {...driver} />
    </View>
  );
}

export default DriverScreen;
