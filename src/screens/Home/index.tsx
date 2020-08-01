import React, {Component} from 'react';
import {connect} from 'react-redux';
import {ScrollView, View} from 'react-native';
import Header from '../../components/Header';
import DataTable from '../../components/DataTable';
import Loading from '../../components/Loading';
import {httpGet} from '../../helpers/HTTP';
import {API} from '../../constants/API';
import {Pagination} from '../../components/Pagination';
import {driverAction} from '../../store/actions/Driver';

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
    this.getIt();
  }

  getIt = async (pageId: string = '', n: number = 1) => {
    return await httpGet(API.seasons(pageId)).then(
      (res: any) =>
        res &&
        this.setState({
          isLoading: false,
          data: res.MRData.RaceTable.Races,
          current: n,
          max: res.MRData.total / 10,
        }),
    );
  };

  getDriver = (driverId: string) => {
    this.setState({isLoading: true}, () =>
      Promise.resolve(
        httpGet(API.driver(driverId)).then((res: any) => {
          this.props.setDriver(res.MRData.DriverTable.Drivers[0]);
          this.setState({isLoading: false});
        }),
      ).then(() => this.props.navigation.navigate('DriverInfo')),
    );
  };

  nextPage(n: number) {
    this.getIt(API.seasonPager((n - 1) * 10), n);
  }

  render() {
    const {data, max} = this.state;
    return this.state.isLoading ? (
      <Loading />
    ) : (
      <View>
        <Header title={'Гонки и расписание'} />
        <ScrollView>
          <Pagination
            min={1}
            max={max}
            current={this.state.current}
            onClick={(n: number) => this.nextPage(n)}
          />
          {data.map((result: any, i: number) => (
            <DataTable result={result} key={i} onDriver={this.getDriver} />
          ))}
        </ScrollView>
      </View>
    );
  }
}

const mappingStateToProps = (state: any) => {
  return {
    state: state,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    setDriver: (driver: any) => dispatch(driverAction(driver)),
  };
};

export default connect(mappingStateToProps, mapDispatchToProps)(HomeScreen);
