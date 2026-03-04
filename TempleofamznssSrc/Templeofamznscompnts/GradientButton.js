// Gradient Button

import LinearGradient from 'react-native-linear-gradient';
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const LegendforgeTempleDefaultColors = ['#FF9400', '#FAD51D'];
const LegendforgeTempleDisabledColors = ['#444', '#444'];

/**

 * @param {string} label 
 * @param {function} onPress
 * @param {number} height 
 * @param {number} borderRadius
 * @param {number} fontSize
 * @param {boolean} disabled 
 * @param {string[]} colors 
 * @param {object} style 
 * @param {object} containerStyle
 * @param {number} activeOpacity
 */
export default function GradientButton({
  label,
  onPress,
  height = 52,
  borderRadius = 16,
  fontSize = 16,
  disabled = false,
  colors,
  style,
  containerStyle,
  activeOpacity = 0.8,
}) {
  const LegendforgeTempleGradientColors = disabled
    ? LegendforgeTempleDisabledColors
    : colors ?? LegendforgeTempleDefaultColors;

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      activeOpacity={activeOpacity}
      style={containerStyle}
    >
      <LinearGradient
        colors={LegendforgeTempleGradientColors}
        style={[
          styles.templeLegendGradient,
          {
            height,
            borderRadius,
            ...style,
          },
        ]}
      >
        <Text style={[styles.templeLegendText, { fontSize }]}>{label}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  templeLegendGradient: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  templeLegendText: {
    color: '#FFFFFF',
    fontWeight: '600',
  },
});
