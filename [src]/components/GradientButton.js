import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const DEFAULT_COLORS = ['#FF9400', '#FAD51D'];
const DISABLED_COLORS = ['#444', '#444'];

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
  const gradientColors = disabled ? DISABLED_COLORS : colors ?? DEFAULT_COLORS;

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      activeOpacity={activeOpacity}
      style={containerStyle}
    >
      <LinearGradient
        colors={gradientColors}
        style={[
          styles.gradient,
          {
            height,
            borderRadius,
            ...style,
          },
        ]}
      >
        <Text style={[styles.text, { fontSize }]}>{label}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  gradient: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#FFFFFF',
    fontWeight: '600',
  },
});
