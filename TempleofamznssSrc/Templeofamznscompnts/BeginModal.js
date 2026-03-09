// Begin Modal --->

import { BlurView } from '@react-native-community/blur';
import React from 'react';
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  Image,
  StyleSheet,
  Pressable,
  Platform,
} from 'react-native';

const LegendforgeTempleTitleColor = '#FFB907';

export default function BeginModal({
  visible,
  onClose,
  onBeginSaga,
  onBeginForging,
}) {
  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={onClose}
      statusBarTranslucent={Platform.OS === 'android'}
    >
      {Platform.OS === 'ios' && (
        <BlurView
          blurAmount={1}
          blurType="dark"
          style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}
        />
      )}
      <Pressable style={styles.templeLegendOverlay} onPress={onClose}>
        <Pressable
          style={styles.templeLegendModalCard}
          onPress={LegendforgeTempleEvent =>
            LegendforgeTempleEvent.stopPropagation()
          }
        >
          <View style={styles.templeLegendHeader}>
            <Image
              source={require('../assets/images/begintx.png')}
              style={styles.templeLegendTitle}
            />
            <TouchableOpacity
              onPress={onClose}
              style={styles.templeLegendCloseBtn}
              hitSlop={{ top: 12, bottom: 12, left: 12, right: 12 }}
            >
              <Image
                source={require('../assets/images/clss.png')}
                style={styles.templeLegendCloseIcon}
              />
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            style={styles.templeLegendOptionBtn}
            onPress={onBeginSaga}
            activeOpacity={0.8}
          >
            <Text style={styles.templeLegendOptionText}>Begin a New Saga</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.templeLegendOptionBtn}
            onPress={onBeginForging}
            activeOpacity={0.8}
          >
            <Text style={styles.templeLegendOptionText}>Begin Forging</Text>
          </TouchableOpacity>
        </Pressable>
      </Pressable>
    </Modal>
  );
}

const styles = StyleSheet.create({
  templeLegendOverlay: {
    flex: 1,
    backgroundColor: Platform.OS === 'ios' ? null : 'rgba(0, 0, 0, 0.44)',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  templeLegendModalCard: {
    width: '100%',
    backgroundColor: '#2B2B2B',
    borderRadius: 16,
    padding: 20,
    paddingTop: 16,
    paddingBottom: 10,
    alignSelf: 'center',
  },
  templeLegendHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  templeLegendTitle: {
    color: LegendforgeTempleTitleColor,
    fontSize: 22,
    fontWeight: '700',
  },
  templeLegendCloseBtn: {
    width: 56,
    height: 56,
    borderRadius: 16,
    backgroundColor: '#251F21',
    justifyContent: 'center',
    alignItems: 'center',
  },
  templeLegendCloseIcon: {
    width: 20,
    height: 20,
  },
  templeLegendOptionBtn: {
    backgroundColor: '#251F21',
    borderRadius: 16,
    paddingVertical: 16,
    paddingHorizontal: 20,
    marginBottom: 12,
  },
  templeLegendOptionText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'center',
  },
});
