import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { Card, Title, Paragraph, Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from '../theme/ThemeContext';

const HomeScreen = () => {
  const navigation = useNavigation();
  const { theme, toggleTheme, isDarkMode } = useTheme();

  const demos = [
    {
      title: 'Components',
      description: 'Explore Material Design 3 components',
      screen: 'Components'
    },
    {
      title: 'Theme System',
      description: 'Dynamic themes and color system',
      screen: 'Theme'
    },
    {
      title: 'Typography',
      description: 'Type scale and text styles',
      screen: 'Typography'
    },
    {
      title: 'Motion',
      description: 'Animations and transitions',
      screen: 'Motion'
    }
  ];

  return (
    <ScrollView style={[styles.container, { backgroundColor: theme.colors.background }]}>
      {demos.map((demo, index) => (
        <Card key={index} style={styles.card}>
          <Card.Content>
            <Title>{demo.title}</Title>
            <Paragraph>{demo.description}</Paragraph>
          </Card.Content>
          <Card.Actions>
            <Button
              mode="contained"
              onPress={() => navigation.navigate(demo.screen as never)}
            >
              Explore
            </Button>
          </Card.Actions>
        </Card>
      ))}
      <Button
        mode="outlined"
        onPress={toggleTheme}
        style={styles.themeButton}
      >
        Switch to {isDarkMode ? 'Light' : 'Dark'} Mode
      </Button>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  card: {
    marginBottom: 16,
  },
  themeButton: {
    marginVertical: 16,
  },
});

export default HomeScreen;
