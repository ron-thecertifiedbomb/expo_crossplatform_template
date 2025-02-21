import { ThemedView } from '@/components/ThemedView';
import { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const getManilaTime = () => {
  const formatter = new Intl.DateTimeFormat('en-US', {
    timeZone: 'Asia/Manila',
    hour12: false,
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  });

  const [hour, minute, second] = formatter.format(new Date()).split(':').map(Number);
  return { hour, minute, second };
};

const Clock = () => {
  const [manilaTime, setManilaTime] = useState(getManilaTime());

  useEffect(() => {
    const timerId = setInterval(() => {
      setManilaTime(getManilaTime());
    }, 1000);

    return () => clearInterval(timerId);
  }, []);

  const radius = 75;

  const getNumberPosition = (number: number) => {
    const angle = ((number - 3.2) / 12) * (2 * Math.PI); 
    const x = radius * Math.cos(angle) + 85;
    const y = radius * Math.sin(angle) + 80;
    return { left: x, top: y };
  };

  return (
    <ThemedView style={styles.clock}>
      <View style={styles.innerBackground}>
        {/* Hour, Minute, and Second Hands */}
        <View
          style={[styles.hand, styles.hourHand, { transform: [{ rotateZ: `${(manilaTime.hour % 12) * 30 + manilaTime.minute * 0.5}deg` }] }]}
        />
        <View
          style={[styles.hand, styles.minHand, { transform: [{ rotateZ: `${manilaTime.minute * 6}deg` }] }]}
        />
        <View
          style={[styles.hand, styles.secHand, { transform: [{ rotateZ: `${manilaTime.second * 6}deg` }] }]}
        />

        {/* Clock Numbers */}
        {[12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((number) => {
          const { left, top } = getNumberPosition(number);
          return (
            <Text key={number} style={[styles.number, { left, top }]}>
              {number}
            </Text>
          );
        })}
      </View>
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  clock: {
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  innerBackground: {
    width: 180,
    height: 180,
    borderRadius: 90,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  hand: {
    position: 'absolute',
    backgroundColor: 'black',
    transformOrigin: 'center bottom',
  },
  hourHand: {
    width: 4,
    height: 50,
    top: '50%',
    left: '50%',
    marginLeft: -2,
    marginTop: -50,
  },
  minHand: {
    width: 3,
    height: 70,
    top: '50%',
    left: '50%',
    marginLeft: -1.5,
    marginTop: -70,
  },
  secHand: {
    width: 2,
    height: 80,
    top: '50%',
    left: '50%',
    marginLeft: -1,
    marginTop: -80,
    backgroundColor: 'red',
  },
  number: {
    position: 'absolute',
    color: 'black',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default Clock;
