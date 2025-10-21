import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { MainTabParamList } from '../types/navigation.types';
import { Header } from '../components/ui/Header';
import { Card } from '../components/ui/Card';
import { theme } from '../config/theme';

type Props = NativeStackScreenProps<MainTabParamList, 'Settings'>;

export const SettingsScreen: React.FC<Props> = ({ navigation }) => {
  const settingsOptions = [
    { id: 1, title: 'Account', icon: '👤' },
    { id: 2, title: 'Privacy', icon: '🔒' },
    { id: 3, title: 'Notifications', icon: '🔔' },
    { id: 4, title: 'Appearance', icon: '🎨' },
    { id: 5, title: 'Help & Support', icon: '❓' },
  ];

  return (
    <View style={styles.container}>
      <Header
        title="Settings"
        onProfilePress={() => navigation.navigate('Profile' as any)}
      />
      <ScrollView contentContainerStyle={styles.content}>
        {settingsOptions.map((option) => (
          <Card key={option.id} onPress={() => {}}>
            <View style={styles.settingRow}>
              <View style={styles.settingLeft}>
                <Text style={styles.settingIcon}>{option.icon}</Text>
                <Text style={styles.settingText}>{option.title}</Text>
              </View>
              <Text style={styles.arrow}>›</Text>
            </View>
          </Card>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.surface,
  },
  content: {
    padding: theme.spacing.md,
    gap: theme.spacing.md,
  },
  settingRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  settingLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: theme.spacing.md,
  },
  settingIcon: {
    fontSize: 24,
  },
  settingText: {
    ...theme.typography.body,
    color: theme.colors.text.primary,
  },
  arrow: {
    fontSize: 24,
    color: theme.colors.text.tertiary,
  },
});
