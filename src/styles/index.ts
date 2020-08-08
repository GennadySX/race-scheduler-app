import {Dimensions, StyleSheet} from 'react-native';
const window = Dimensions.get('window')

export const styles = StyleSheet.create({
  background: {
    backgroundColor: '#2546b4',
    padding: 10,
    justifyContent: 'center',
    position: 'absolute',
  },
  container: {
    flex: 1,
    width: window.width,
    height: window.height,
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
  spinner: {
    color: '#f4ffef',
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
  pg_section: {
    padding: 15,
    paddingBottom: 0,
  },
  pg_header: {
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  pg_pageTouchable: {
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
  pg_headerTouchableText: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'white',
  },
  pg_arr: {
    fontSize: 20,
    position: 'relative',
    bottom: 5,
  },
});
