import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { MainTabParamList } from '../types/navigation.types';
import { Header } from '../components/ui/Header';
import { Input } from '../components/ui/Input';
import { Card } from '../components/ui/Card';
import { theme } from '../config/theme';

type Props = NativeStackScreenProps<MainTabParamList, 'Search'>;

export const SearchScreen: React.FC<Props> = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <View style={styles.container}>
      <Header
        title="Search"
        onProfilePress={() => navigation.navigate('Profile' as any)}
      />
      <View style={styles.searchContainer}>
        <Input
          placeholder="Search..."
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>
      <ScrollView contentContainerStyle={styles.content}>
        {searchQuery ? (
          <>
            <Text style={styles.resultsText}>
              Showing results for "{searchQuery}"
            </Text>
            {[1, 2, 3].map((i) => (
              <Card key={i}>
                <Text style={styles.resultTitle}>Result {i}</Text>
                <Text style={styles.resultDescription}>
                  This is a search result matching your query
                </Text>
              </Card>
            ))}
          </>
        ) : (
          <Text style={styles.emptyText}>Start searching for content</Text>
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.surface,
  },
  searchContainer: {
    padding: theme.spacing.md,
  },
  content: {
    padding: theme.spacing.md,
    gap: theme.spacing.md,
  },
  resultsText: {
    ...theme.typography.body,
    color: theme.colors.text.secondary,
    marginBottom: theme.spacing.sm,
  },
  emptyText: {
    ...theme.typography.body,
    color: theme.colors.text.secondary,
    textAlign: 'center',
    marginTop: theme.spacing.xl,
  },
  resultTitle: {
    ...theme.typography.h3,
    color: theme.colors.text.primary,
    marginBottom: theme.spacing.xs,
  },
  resultDescription: {
    ...theme.typography.caption,
    color: theme.colors.text.secondary,
  },
});
