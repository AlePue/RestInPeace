'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';

exports.defaultFontFamily = 'Roboto';
exports.chartTitleColor = '#6D6D6D';
exports.chartTitleFontSize = 16;
exports.statSubtextFontSize = 13.7;

exports.backgroundColor = '#F2F2F2'

exports.styles = StyleSheet.create({
  chartTitle: {
    fontSize: 16,
    color: '#6D6D6D',
    fontFamily: 'Roboto',
  },

  cellContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    height: 56,
  },
  cellTextContainer: {
    flex: 1,
  },

  sectionView: {
    height: 48,
    paddingLeft: 16,
    paddingRight: 16,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  sectionTitle: {
    fontSize: 14,
    color: '#868686',
    fontFamily: 'Roboto',
    fontWeight: '500'
  },

  title: {
    fontSize: 16,
    textAlign: 'left',
    fontFamily: 'Roboto',
    color: '#545454',
  },
  detail: {
    fontSize: 13,
    textAlign: 'left',
    fontFamily: 'Roboto',
    color: '#54545450',
  },
  time: {
    fontSize: 11,
    fontFamily: 'Roboto',
    color: '#757575'
  },
  thumbnail: {
    width: 32,
    height: 32,
  },

});

exports.avgRadius = 3.5;
exports.smallRadius = 1.5;

// module.exports = styles, avgRadius;