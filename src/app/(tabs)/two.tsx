import { Link } from 'expo-router';

import { linkStyle, Page } from '@/components/page';

export default function TabTwo() {
  return (
    <Page title="Tab Two">
      <Link href="/details/2" style={linkStyle}>
        Open details
      </Link>
    </Page>
  );
}
