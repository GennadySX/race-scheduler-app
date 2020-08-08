import React, {Component} from 'react';
import {connect} from 'react-redux';
import {ScrollView, View, Text} from 'react-native';
import DataTable from '../../components/DataTable';
import Loading from '../../components/Loading';
import {Pagination} from '../../components/Pagination';
import {driverAction, driverGet} from '../../store/actions/Driver';
import {Dispatch} from 'redux';
import {raceGet, racePager} from '../../store/actions/Races';

export interface IHomeScreen {}

class HomeScreen extends Component<any, any> {
  constructor(props: IHomeScreen) {
    super(props);
    this.state = {
      isLoading: true,
      data: null,
      current: 1,
      max: 0,
    };
  }

  componentDidMount(): void {
    this.props.getRace();
  }

  getDriver = (driverId: string) => {
    const {navigation, getDriver} = this.props;
    Promise.resolve(getDriver(driverId)).then(() =>
      navigation.navigate('DriverInfo'),
    );
  };

  render() {
    const {racePager} = this.props;
    const {loading, races, max, current} = this.props.races;
    return loading ? (
      <Loading />
    ) : (
      <View>
        <ScrollView>
          <Pagination
            min={1}
            max={max}
            current={current}
            onClick={(n: number) => racePager(n)}
          />
          {
            // тут идет итерации, потому что иногда данные приходят несколько разделя по блокам. Если вы обратите внимание на title DataTable
            races.map((result: any, i: number) => (
              <DataTable result={result} key={i} onDriver={this.getDriver} />
            ))
          }
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    races: state.races,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    getDriver: (driver: string) => dispatch(driverGet(driver)),
    getRace: () => dispatch(raceGet()),
    racePager: (page: number) => dispatch(racePager(page)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
