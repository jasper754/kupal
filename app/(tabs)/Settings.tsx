import { StyleSheet } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';

export default function SettingsScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#FFD700', dark: '#8B0000' }} 
      headerImage={
        <IconSymbol
          size={310}
          color="#FF4500" 
          name="gearshape.fill" 
          style={styles.headerImage}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title" style={styles.title}>⚙️ Chicken Shop Settings 🍗</ThemedText>
      </ThemedView>

      <Collapsible title="Notifications">
        <ThemedText>
          Manage your order alerts and promotional messages.
        </ThemedText>
      </Collapsible>

      <Collapsible title="Payment Methods">
        <ThemedText>
          Add or remove payment options for a smoother checkout experience.
        </ThemedText>
      </Collapsible>

      <Collapsible title="Privacy & Security">
        <ThemedText>
          Control your data, manage preferences, and secure your account.
        </ThemedText>
      </Collapsible>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#8B0000', 
  },
});
