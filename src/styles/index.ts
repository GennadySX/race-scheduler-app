import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  headerBlock: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  background: {
    backgroundColor: '#2546b4',
    padding: 10,
  },
  headerBackBtn: {},
  headerBack: {
    fontSize: 18,
    color: 'white',
  },
  container: {},
  headerTitle: {
    fontSize: 18,
    color: '#fafafa',
  },
  section: {
    padding: 15,
  },
  tableBlock: {
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: 'gray',
    borderWidth: 1,
  },
  cell: {
    justifyContent: 'center',
    padding: 10,
    borderLeftColor: 'gray',
    borderLeftWidth: 1,
  },
  tableHeadText: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 11,
  },
  cellTouchableText: {
    textAlign: 'center',
    fontSize: 11,
  },
  blockTitle: {
    padding: 5,
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
    width: '100%',
  },
});
