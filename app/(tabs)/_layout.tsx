import { Tabs } from 'expo-router';
import React from 'react';
import { useColorScheme } from '@/hooks/useColorScheme';  
import { IconSymbol } from '@/components/ui/IconSymbol';  
import { Colors } from '@/constants/Colors';  
import { MaterialIcons } from '@expo/vector-icons';  

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint, 
        tabBarInactiveTintColor: isDark ? '#888' : '#666', 
        tabBarShowLabel: true, 
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '600',
          letterSpacing: 0.5,
        },
        headerShown: false, 
        tabBarStyle: {
          position: 'absolute',
          backgroundColor: isDark ? 'rgba(0, 0, 0, 0.9)' : 'rgba(255, 255, 255, 0.9)', 
          borderTopWidth: 0,
          height: 70,
          elevation: 5, 
          shadowColor: '#000',
          shadowOpacity: 0.1,
          shadowRadius: 10,
          shadowOffset: { width: 0, height: 5 },
        },
      }}
    >
      
      <Tabs.Screen
        name="index" 
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <MaterialIcons size={focused ? 32 : 28} name="home" color={color} />
          ),
        }}
      />

     
      <Tabs.Screen
        name="Services" 
        options={{
          title: 'Services',
          tabBarIcon: ({ color, focused }) => (
            <MaterialIcons size={focused ? 32 : 28} name="work" color={color} />
          ),
        }}
      />

      
      <Tabs.Screen
        name="About" 
        options={{
          title: 'About',
          tabBarIcon: ({ color, focused }) => (
            <MaterialIcons size={focused ? 32 : 28} name="info" color={color} />
          ),
        }}
      />

      
      <Tabs.Screen
        name="Settings" 
        options={{
          title: 'Settings',
          tabBarIcon: ({ color, focused }) => (
            <MaterialIcons size={focused ? 32 : 28} name="settings" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}