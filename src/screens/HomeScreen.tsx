import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { MainTabParamList } from '../types/navigation.types';
import { Header } from '../components/ui/Header';
import { theme } from '../config/theme';
import { Card } from '../components/ui/Card';

type Props = NativeStackScreenProps<MainTabParamList, 'Home'>;

export const HomeScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Header
        title="Home"
        onProfilePress={() => navigation.navigate('Profile' as any)}
      />
      <ScrollView contentContainerStyle={styles.content}>
        <Card>
          <Text style={styles.cardTitle}>Welcome!</Text>
          <Text style={styles.cardText}>
            This is your home dashboard. Navigate using the bottom tabs.
          </Text>
        </Card>

        {[1, 2, 3].map((i) => (
          <Card key={i}>
            <View style={styles.featureCard}>
              <View style={styles.featureContent}>
                <Text style={styles.featureTitle}>Feature Card {i}</Text>
                <Text style={styles.featureText}>
                  Description of feature {i}
                </Text>
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
  cardTitle: {
    ...theme.typography.h2,
    color: theme.colors.text.primary,
    marginBottom: theme.spacing.sm,
  },
  cardText: {
    ...theme.typography.body,
    color: theme.colors.text.secondary,
  },
  featureCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  featureContent: {
    flex: 1,
  },
  featureTitle: {
    ...theme.typography.h3,
    color: theme.colors.text.primary,
  },
  featureText: {
    ...theme.typography.caption,
    color: theme.colors.text.secondary,
    marginTop: theme.spacing.xs,
  },
  arrow: {
    fontSize: 24,
    color: theme.colors.text.tertiary,
  },
});