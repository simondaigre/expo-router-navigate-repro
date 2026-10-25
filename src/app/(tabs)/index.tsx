import { Link } from 'expo-router';

import { linkStyle, Page } from '@/components/page';

export default function TabOne() {
  return (
    <Page title="Tab One">
      <Link href="/details/1" style={linkStyle} testID="open-details">
        Open details
      </Link>
    </Page>
  );
}
