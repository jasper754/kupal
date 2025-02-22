import { StyleSheet, Platform } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { Collapsible } from '@/components/Collapsible';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function ServicesScreen() {
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
        <ThemedText type="title" style={styles.title}>🍗 Our Services 🚚</ThemedText>
      </ThemedView>
      <ThemedText style={styles.description}>
        From quick bites to catering, we’ve got you covered!
      </ThemedText>

      <Collapsible title="Delivery">
        <ThemedText>
          Order online and get fresh, crispy chicken delivered to your door!
        </ThemedText>
      </Collapsible>

      <Collapsible title="Dine-In">
        <ThemedText>
          Enjoy a cozy atmosphere while savoring our signature fried chicken.
        </ThemedText>
      </Collapsible>

      <Collapsible title="Catering">
        <ThemedText>
          Hosting a party? Let us handle the food with our catering services.
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
