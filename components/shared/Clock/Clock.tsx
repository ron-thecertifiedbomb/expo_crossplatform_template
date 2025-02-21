import { ThemedView } from '@/components/ThemedView';
import { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timerId);
    };
  }, []);

  return (
    <ThemedView style={styles.clock}>
      <View style={styles.innerBackground}>
        <View
          style={[
            styles.hand,
            styles.hourHand,
            { transform: [{ rotateZ: `${time.getHours() * 30 + time.getMinutes() * 0.5}deg` }] }
          ]}
        />
        <View
          style={[
            styles.hand,
            styles.minHand,
            { transform: [{ rotateZ: `${time.getMinutes() * 6}deg` }] }
          ]}
        />
        <View
          style={[
            styles.hand,
            styles.secHand,
            { transform: [{ rotateZ: `${time.getSeconds() * 6}deg` }] }
          ]}
        />
        {/* Uncomment and use Text components if you want to display numbers
        <Text style={[styles.number, styles.twelve]}>12</Text>
        <Text style={[styles.number, styles.one]}>1</Text>
        <Text style={[styles.number, styles.two]}>2</Text>
        <Text style={[styles.number, styles.three]}>3</Text>
        <Text style={[styles.number, styles.four]}>4</Text>
        <Text style={[styles.number, styles.five]}>5</Text>
        <Text style={[styles.number, styles.six]}>6</Text>
        <Text style={[styles.number, styles.seven]}>7</Text>
        <Text style={[styles.number, styles.eight]}>8</Text>
        <Text style={[styles.number, styles.nine]}>9</Text>
        <Text style={[styles.number, styles.ten]}>10</Text>
        <Text style={[styles.number, styles.eleven]}>11</Text>
        */}
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
    transformOrigin: 'center bottom', // Ensure rotation happens around the center bottom
  },
  hourHand: {
    width: 4,
    height: 50,
    top: '50%',
    left: '50%',
    marginLeft: -2, // Half of the width to center it
    marginTop: -50, // Negative half of the height to center it
  },
  minHand: {
    width: 3,
    height: 70,
    top: '50%',
    left: '50%',
    marginLeft: -1.5, // Half of the width to center it
    marginTop: -70, // Negative half of the height to center it
  },
  secHand: {
    width: 2,
    height: 80,
    top: '50%',
    left: '50%',
    marginLeft: -1, // Half of the width to center it
    marginTop: -80, // Negative half of the height to center it
    backgroundColor: 'red',
  },
  number: {
    position: 'absolute',
    color: 'black',
    fontSize: 16,
  },
  // Add more styles for positioning numbers if needed
});

export default Clock;