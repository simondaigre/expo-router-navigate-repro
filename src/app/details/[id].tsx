import { Link, useLocalSearchParams } from 'expo-router';

import { linkStyle, Page } from '@/components/page';

export default function Details() {
  const { id } = useLocalSearchParams<{ id: string }>();
  return (
    <Page title={`Details ${id}`}>
      {/* A plain link: `navigate`, like `router.navigate('/two')`. */}
      <Link href="/two" style={linkStyle} testID="go-to-tab-two">
        Go to tab Two
      </Link>
      <Link href="/" style={linkStyle} testID="go-to-tab-one">
        Go to tab One
      </Link>
    </Page>
  );
}
