import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { MainTabParamList } from '../types/navigation.types';
import { Header } from '../components/ui/Header';
import { Card } from '../components/ui/Card';
import { theme } from '../config/theme';

type Props = NativeStackScreenProps<MainTabParamList, 'Notifications'>;

export const NotificationsScreen: React.FC<Props> = ({ navigation }) => {
  const notifications = [
    { id: 1, title: 'New Message', description: 'You have a new message from John', time: '2h ago' },
    { id: 2, title: 'Update Available', description: 'A new version is available', time: '5h ago' },
    { id: 3, title: 'Reminder', description: 'Don\'t forget your meeting at 3 PM', time: '1d ago' },
    { id: 4, title: 'Achievement', description: 'You earned a new badge!', time: '2d ago' },
  ];

  return (
    <View style={styles.container}>
      <Header
        title="Notifications"
        onProfilePress={() => navigation.navigate('Profile' as any)}
      />
      <ScrollView contentContainerStyle={styles.content}>
        {notifications.map((notification) => (
          <Card key={notification.id}>
            <View style={styles.notificationCard}>
              <View style={styles.iconContainer}>
                <Text style={styles.icon}>🔔</Text>
              </View>
              <View style={styles.notificationContent}>
                <Text style={styles.notificationTitle}>
                  {notification.title}
                </Text>
                <Text style={styles.notificationDescription}>
                  {notification.description}
                </Text>
                <Text style={styles.notificationTime}>
                  {notification.time}
                </Text>
              </View>
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
  notificationCard: {
    flexDirection: 'row',
    gap: theme.spacing.md,
  },
  iconContainer: {
    width: 48,
    height: 48,
    backgroundColor: theme.colors.primary,
    borderRadius: theme.borderRadius.full,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    fontSize: 24,
  },
  notificationContent: {
    flex: 1,
  },
  notificationTitle: {
    ...theme.typography.body,
    fontWeight: '600',
    color: theme.colors.text.primary,
  },
  notificationDescription: {
    ...theme.typography.caption,
    color: theme.colors.text.secondary,
    marginTop: theme.spacing.xs,
  },
  notificationTime: {
    ...theme.typography.small,
    color: theme.colors.text.tertiary,
    marginTop: theme.spacing.xs,
  },
});
