import { StatusBar } from "expo-status-bar";
import { Pressable, StyleSheet, Text, View } from "react-native";
import Animated, {
  Easing,
  interpolate,
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withRepeat,
  withSequence,
  withTiming,
} from "react-native-reanimated";

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

export default function App() {
  const index = useSharedValue(0);

  const animate = () => {
    index.value = withRepeat(
      withSequence(
        withTiming(1, { duration: 500, easing: Easing.linear }),
        withTiming(0, { duration: 500, easing: Easing.linear })
      ),
      -1,
      true
    );
  };

  const ShakesStyles = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: interpolate(index.value, [0, 0.5, 1], [-20, 0, 20]) },
      ],
    };
  });

  const FlippingStyles = useAnimatedStyle(() => {
    return {
      transform: [
        {
          rotateY: `${interpolate(index.value, [0, 1], [0, 180])}deg`,
        },
      ],
    };
  });

  const PulsingStyles = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale: interpolate(index.value, [0, 1], [1, 1.5]),
        },
      ],
    };
  });

  const GlitchStyles = useAnimatedStyle(() => {
    return {
      transform: [
        {
          skewX: `${interpolate(index.value, [0, 1], [0, 240])}deg`,
        },
      ],
    };
  });

  const GLOWINGStyles = useAnimatedStyle(() => {
    return {
      shadowColor: interpolateColor(index.value, [0, 1], ["white", "blue"]),
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: interpolate(index.value, [0, 1], [0, 1]),
      shadowRadius: interpolate(index.value, [0, 1], [0, 1]),
      elevation: 20,
    };
  });

  const HawkStyles = useAnimatedStyle(() => {
    return {
      transform: [
        {
          rotate: `${interpolate(index.value, [0, 0.5, 1], [0, 900, 900])}deg`,
        },
      ],
    };
  });

  return (
    <View style={styles.container}>
      <Text>Shakes</Text>
      <AnimatedPressable
        style={[styles.button, ShakesStyles]}
        onPress={animate}
      >
        <Text>CLICK ME</Text>
      </AnimatedPressable>

      <Text>Flipping</Text>
      <AnimatedPressable
        style={[styles.button, FlippingStyles]}
        onPress={animate}
      >
        <Text>CLICK ME</Text>
      </AnimatedPressable>

      <Text>Pulse</Text>
      <AnimatedPressable
        style={[styles.button, PulsingStyles]}
        onPress={animate}
      >
        <Text>CLICK ME</Text>
      </AnimatedPressable>

      <Text>Glitch</Text>
      <AnimatedPressable
        style={[styles.button, GlitchStyles]}
        onPress={animate}
      >
        <Text>CLICK ME</Text>
      </AnimatedPressable>

      <Text>Glowing</Text>
      <AnimatedPressable
        style={[styles.button, GLOWINGStyles]}
        onPress={animate}
      >
        <Text>CLICK ME</Text>
      </AnimatedPressable>

      <Text>Hawk</Text>
      <AnimatedPressable style={[styles.button, HawkStyles]} onPress={animate}>
        <Text>CLICK ME</Text>
      </AnimatedPressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "blue",
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginBottom: 20,
  },
});
