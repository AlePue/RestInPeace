'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';

exports.defaultFontFamily = 'Helvetica Neue';
exports.chartTitleColor = '#545454';
exports.chartTitleFontSize = 16;
exports.statSubtextFontSize = 12.6;

exports.backgroundColor = '#F0F0F0'

exports.styles = StyleSheet.create({
  chartTitle: {
    fontSize: 16,
    color: '#545454',
    fontFamily: 'Helvetica Neue',
  },

  cellContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    height: 60,
  },
  cellTextContainer: {
    flex: 1,
  },

  sectionView: {
    height: 50,
    paddingLeft: 16,
    paddingRight: 16,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  sectionTitle: {
    fontSize: 15,
    color: '#868686',
    fontFamily: 'Helvetica Neue',
    fontWeight: '500'
  },

  title: {
    fontSize: 16,
    textAlign: 'left',
    fontFamily: 'Helvetica Neue',
    color: '#545454',
  },
  detail: {
    fontSize: 13,
    textAlign: 'left',
    fontFamily: 'Helvetica Neue',
    color: '#54545450',
  },
  time: {
    fontSize: 12,
    fontFamily: 'Helvetica Neue',
    color: '#00000060'
  },
  thumbnail: {
    width: 34,
    height: 34,
  },
});

exports.avgRadius = 3.5;
exports.smallRadius = 2;

// module.exports = styles, avgRadius;