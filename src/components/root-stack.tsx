import { useRootNavigationState } from 'expo-router';
import { StyleSheet, Text } from 'react-native';

type State = { routes: { name: string; state?: State }[] };

/** The routes of the root layout's Stack, e.g. `(tabs) > details/[id]`. */
export function RootStack() {
  const rootState = useRootNavigationState() as State | undefined;
  // Expo Router wraps the root layout's navigator in a `__root` route.
  const stack = rootState?.routes[0]?.name === '__root' ? rootState.routes[0].state : rootState;
  const names = stack?.routes.map((route) => route.name).join(' > ') ?? '…';
  return (
    <Text testID="root-stack" style={styles.stack}>
      Root stack: {names}
    </Text>
  );
}

const styles = StyleSheet.create({
  stack: { fontFamily: 'monospace', marginTop: 24 },
});
