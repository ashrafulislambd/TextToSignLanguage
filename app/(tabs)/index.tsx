import { Image, StyleSheet, Platform, TextInput, useColorScheme } from 'react-native';
import { useState } from 'react';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

const signImages = {
  a: require('../../assets/sign-language/alphabet/a.jpg'),
  b: require('../../assets/sign-language/alphabet/b.jpg'),
  c: require('../../assets/sign-language/alphabet/c.jpg'),
  d: require('../../assets/sign-language/alphabet/d.jpg'),
  e: require('../../assets/sign-language/alphabet/e.jpg'),
  f: require('../../assets/sign-language/alphabet/f.jpg'),
  g: require('../../assets/sign-language/alphabet/g.jpg'),
  h: require('../../assets/sign-language/alphabet/h.jpg'),
  i: require('../../assets/sign-language/alphabet/i.jpg'),
  j: require('../../assets/sign-language/alphabet/j.jpg'),
  k: require('../../assets/sign-language/alphabet/k.jpg'),
  l: require('../../assets/sign-language/alphabet/l.jpg'),
  m: require('../../assets/sign-language/alphabet/m.jpg'),
  n: require('../../assets/sign-language/alphabet/n.jpg'),
  o: require('../../assets/sign-language/alphabet/o.jpg'),
  p: require('../../assets/sign-language/alphabet/p.jpg'),
  q: require('../../assets/sign-language/alphabet/q.jpg'),
  r: require('../../assets/sign-language/alphabet/r.jpg'),
  s: require('../../assets/sign-language/alphabet/s.jpg'),
  t: require('../../assets/sign-language/alphabet/t.jpg'),
  u: require('../../assets/sign-language/alphabet/u.jpg'),
  v: require('../../assets/sign-language/alphabet/v.jpg'),
  w: require('../../assets/sign-language/alphabet/w.jpg'),
  x: require('../../assets/sign-language/alphabet/x.jpg'),
  y: require('../../assets/sign-language/alphabet/y.jpg'),
  z: require('../../assets/sign-language/alphabet/z.jpg'),
};

export default function HomeScreen() {
  const [text, setText] = useState('');
  const colorScheme = useColorScheme();

  const renderSignLanguage = (input: string) => {
    return input
      .toLowerCase()
      .split('')
      .map((char, index) => {
        if (char >= 'a' && char <= 'z' && signImages[char]) {
          return (
            <Image
              key={index}
              source={signImages[char]}
              style={styles.signImage}
              accessibilityLabel={`Sign for letter ${char}`}
            />
          );
        }
        return (
          <ThemedView key={index} style={styles.spacer} />
        );
      });
  };

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Sign Language Converter</ThemedText>
      </ThemedView>

      <ThemedView style={styles.inputContainer}>
        <TextInput
          style={[
            styles.textInput,
            { color: colorScheme === 'dark' ? '#fff' : '#000' }
          ]}
          value={text}
          onChangeText={setText}
          placeholder="Type something..."
          placeholderTextColor={colorScheme === 'dark' ? '#999' : '#666'}
          multiline
        />
      </ThemedView>

      <ThemedView style={styles.signContainer}>
        {renderSignLanguage(text)}
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  signImage: {
    height: 80,
    width: 80,
    resizeMode: 'contain',
  },
  signContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    padding: 16,
    justifyContent: 'center',
  },
  spacer: {
    width: 40,
    height: 80,
  },
  inputContainer: {
    padding: 16,
    marginBottom: 8,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    minHeight: 100,
    textAlignVertical: 'top',
    backgroundColor: 'transparent',
  },
});
