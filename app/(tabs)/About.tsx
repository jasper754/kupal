import { StyleSheet, Platform } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

import { Collapsible } from '@/components/Collapsible';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function AboutScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#FFD700', dark: '#8B0000' }} 
      headerImage={
        <MaterialCommunityIcons
          size={310}
          color="#FF4500" 
          name="food-drumstick" 
          style={styles.headerImage}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title" style={styles.title}>🐔 About Our Chicken Shop 🍗</ThemedText>
      </ThemedView>
      <ThemedText style={styles.description}>
        Welcome to Cluck'N'Crunch! We serve the crispiest, juiciest fried chicken in town.
      </ThemedText>

      <Collapsible title="Our Story">
        <ThemedText>
          Started from a small kitchen, we have grown into a local favorite for chicken lovers!
        </ThemedText>
      </Collapsible>

      <Collapsible title="Secret Recipe">
        <ThemedText>
          Our chicken is marinated with a secret blend of spices and cooked to crispy perfection.
        </ThemedText>
      </Collapsible>

      <Collapsible title="Our Promise">
        <ThemedText>
          We use only the freshest ingredients and 100% farm-raised chicken.
        </ThemedText>
      </Collapsible>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    bottom: -70, 
    left: -20,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
    marginTop: 20, 
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#8B0000', 
  },
  description: {
    fontSize: 16,
    marginTop: 10,
    color: '#FF4500', 
    textAlign: 'center',
  },
});
