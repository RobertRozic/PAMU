import { StyleSheet } from 'react-native';

import { Collapsible } from '@/components/ui/collapsible';
import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { Fonts } from '@/constants/theme';

export default function TabTwoScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={
        <IconSymbol
          size={310}
          color="#808080"
          name="chevron.left.forwardslash.chevron.right"
          style={styles.headerImage}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText
          type="title"
          style={{
            fontFamily: Fonts.rounded,
          }}>
          Explore
        </ThemedText>
      </ThemedView>
      <ThemedText>
        Ova kartica služi kao pregled strukture aplikacije koju studenti koriste u vježbi.
      </ThemedText>
      <Collapsible title="Stack navigacija">
        <ThemedText>
          Root navigator se nalazi u <ThemedText type="defaultSemiBold">app/_layout.tsx</ThemedText>.
          Tamo je definiran <ThemedText type="defaultSemiBold">Stack</ThemedText> koji prikazuje
          grupu <ThemedText type="defaultSemiBold">(tabs)</ThemedText> i ekran{' '}
          <ThemedText type="defaultSemiBold">modal</ThemedText>.
        </ThemedText>
        <ThemedText>
          Stack je koristan kada želimo hijerarhiju ekrana i prijelaze poput modala, detalja ili
          auth flowa iznad ostatka aplikacije.
        </ThemedText>
      </Collapsible>
      <Collapsible title="Tab navigacija">
        <ThemedText>
          Tab navigator se nalazi u{' '}
          <ThemedText type="defaultSemiBold">app/(tabs)/_layout.tsx</ThemedText>.
          Trenutno sadrži tri rute:
        </ThemedText>
        <ThemedText>
          1. <ThemedText type="defaultSemiBold">index</ThemedText> za početni ekran
        </ThemedText>
        <ThemedText>
          2. <ThemedText type="defaultSemiBold">explore</ThemedText> za objašnjenje strukture
        </ThemedText>
        <ThemedText>
          3. <ThemedText type="defaultSemiBold">auth</ThemedText> za login i profil
        </ThemedText>
        <ThemedText>
          Tabs su dobar izbor kada korisnik često prelazi između nekoliko glavnih dijelova
          aplikacije.
        </ThemedText>
      </Collapsible>
      <Collapsible title="Drawer navigacija">
        <ThemedText>
          Drawer u ovom starteru nije implementiran, ali je važan za razumijevanje. On se obično
          koristi kada aplikacija ima veći broj sekcija i želimo bočni izbornik.
        </ThemedText>
        <ThemedText>
          U Expo Router projektu Drawer bismo dodali kao zaseban layout navigator ili kao zamjenu
          za tabs, ovisno o potrebama aplikacije.
        </ThemedText>
        <ThemedText>
          Za ovu vježbu cilj nije implementirati Drawer, nego prepoznati razliku između{' '}
          <ThemedText type="defaultSemiBold">Stack</ThemedText>,{' '}
          <ThemedText type="defaultSemiBold">Tabs</ThemedText> i{' '}
          <ThemedText type="defaultSemiBold">Drawer</ThemedText>.
        </ThemedText>
      </Collapsible>
      <Collapsible title="Početno stanje auth ekrana">
        <ThemedText>
          Ekran <ThemedText type="defaultSemiBold">app/(tabs)/auth.tsx</ThemedText> trenutno koristi
          lokalni <ThemedText type="defaultSemiBold">loggedIn</ThemedText> state.
        </ThemedText>
        <ThemedText>
          Zadatak studenata je uvesti{' '}
          <ThemedText type="defaultSemiBold">contexts/AuthContext.tsx</ThemedText>, povezati ga u{' '}
          <ThemedText type="defaultSemiBold">app/_layout.tsx</ThemedText> i refaktorirati auth ekran
          da koristi Context API umjesto lokalnog statea.
        </ThemedText>
      </Collapsible>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});
