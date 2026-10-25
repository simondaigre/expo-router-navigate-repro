import type { ReactNode } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { RootStack } from './root-stack';

export function Page({ title, children }: { title: string; children: ReactNode }) {
  return (
    <View style={styles.page}>
      <Text style={styles.title}>{title}</Text>
      {children}
      <RootStack />
    </View>
  );
}

export const linkStyle = { color: '#2563eb', fontSize: 18, paddingVertical: 8 } as const;

const styles = StyleSheet.create({
  page: { flex: 1, padding: 24, gap: 8, backgroundColor: '#fff' },
  title: { fontSize: 24, fontWeight: '600', marginBottom: 8 },
});
