import React, { useState } from 'react';
import { View, StyleSheet, Pressable, Text, TextInput} from 'react-native';

import {
  AnimatePresence,
  Button,
  H5,
  SizableText,
  Tabs,
  XStack,
  YStack,
  styled,
} from 'tamagui';

// Demos array
const demos = ['underline'];

// Demo titles mapping
const demosTitle = {
  background: 'Background Indicator',
};

function profileScreen () {
  const [demoIndex, setDemoIndex] = useState(0);
  const demo = demos[demoIndex];

  return (
    <>
      {demo === 'underline' ? <TabsAdvancedUnderline /> : <TabsAdvancedBackground />}

      <XStack
        alignItems="center"
        gap="$4"
        position="absolute"
        bottom="$3"
        left="$4"
        $xxs={{ display: 'none' }}
      >
        <Button size="$2" onPress={() => setDemoIndex((x) => (x + 1) % demos.length)}>
          {demosTitle[demo]}
        </Button>
      </XStack>
    </>
  );
};

const TabsAdvancedBackground = () => {
  const [tabState, setTabState] = useState({
    currentTab: 'tab1',
    intentAt: null,
    activeAt: null,
    prevActiveAt: null,
  });

  const { activeAt, intentAt, prevActiveAt, currentTab } = tabState;

  const setCurrentTab = (currentTab) => setTabState({ ...tabState, currentTab });
  const setIntentIndicator = (intentAt) => setTabState({ ...tabState, intentAt });
  const setActiveIndicator = (activeAt) =>
    setTabState({ ...tabState, prevActiveAt: tabState.activeAt, activeAt });

  const direction = (() => {
    if (!activeAt || !prevActiveAt || activeAt.x === prevActiveAt.x) {
      return 0;
    }
    return activeAt.x > prevActiveAt.x ? -1 : 1;
  })();

  const handleOnInteraction = (type, layout) => {
    if (type === 'select') {
      setActiveIndicator(layout);
    } else {
      setIntentIndicator(layout);
    }
  };

  return (
    <Tabs
      value={currentTab}
      onValueChange={setCurrentTab}
      orientation="horizontal"
      size="$4"
      padding="$2"
      height={150}
      flexDirection="column"
      activationMode="manual"
      backgroundColor="$background"
      borderRadius="$4"
      position="relative"
    >
      <YStack>
        <AnimatePresence>
          {intentAt && (
            <TabsRovingIndicator
              borderRadius="$4"
              width={intentAt.width}
              height={intentAt.height}
              x={intentAt.x}
              y={intentAt.y}
            />
          )}
        </AnimatePresence>

        <AnimatePresence>
          {activeAt && (
            <TabsRovingIndicator
              borderRadius="$4"
              theme="active"
              width={activeAt.width}
              height={activeAt.height}
              x={activeAt.x}
              y={activeAt.y}
            />
          )}
        </AnimatePresence>

        <Tabs.List
          disablePassBorderRadius
          loop={false}
          aria-label="Manage your account"
          gap="$2"
          backgroundColor="transparent"
        >
          {['tab1', 'tab2',].map((tab) => (
            <Tabs.Tab
              key={tab}
              unstyled
              paddingVertical="$2"
              paddingHorizontal="$3"
              value={tab}
              onInteraction={handleOnInteraction}
            >
              <SizableText>{tab.charAt(0).toUpperCase() + tab.slice(1)}</SizableText>
            </Tabs.Tab>
          ))}
        </Tabs.List>
      </YStack>

      <AnimatePresence exitBeforeEnter custom={{ direction }} initial={false}>
        <AnimatedYStack key={currentTab}>
          <Tabs.Content value={currentTab} forceMount flex={1} justifyContent="center">
            <H5 textAlign="center">{currentTab}</H5>
          </Tabs.Content>
        </AnimatedYStack>
      </AnimatePresence>
    </Tabs>
  );
};

const TabsAdvancedUnderline = () => {
  const [tabState, setTabState] = useState({
    currentTab: 'Login',
    intentAt: null,
    activeAt: null,
    prevActiveAt: null,
  });
    const[username, setUsername] = useState('');

  const { activeAt, intentAt, prevActiveAt, currentTab } = tabState;

  const setCurrentTab = (currentTab) => setTabState({ ...tabState, currentTab });
  const setIntentIndicator = (intentAt) => setTabState({ ...tabState, intentAt });
  const setActiveIndicator = (activeAt) =>
    setTabState({ ...tabState, prevActiveAt: tabState.activeAt, activeAt });

  const direction = (() => {
    if (!activeAt || !prevActiveAt || activeAt.x === prevActiveAt.x) {
      return 0;
    }
    return activeAt.x > prevActiveAt.x ? -1 : 1;
  })();

  const handleOnInteraction = (type, layout) => {
    if (type === 'select') {
      setActiveIndicator(layout);
    } else {
      setIntentIndicator(layout);
    }
  };

  // ✅ Update indicator position on layout changes
 
  return (
    <Tabs
      value={currentTab}
      onValueChange={setCurrentTab}
      orientation="horizontal"
      size="$4"
      height={150}
      flexDirection="column"
      activationMode="manual"
      backgroundColor="$background"
      borderRadius="$4"
      
    >
      <YStack>
        <AnimatePresence>
          {intentAt && (
            <TabsRovingIndicator
              width={intentAt.width}
              height="$0.5"
              x={intentAt.x}
              bottom={0}
            />
          )}
        </AnimatePresence>

        <AnimatePresence>
          {activeAt && (
            <TabsRovingIndicator
              theme="active"
              active
              width={activeAt.width}
              height="$0.5"
              x={activeAt.x}
              bottom={0}
            />
          )}
        </AnimatePresence>

        <Tabs.List
          disablePassBorderRadius
          loop={false}
          borderBottomLeftRadius={0}
          borderBottomRightRadius={0}
          paddingBottom="$1.5"
          borderColor="$gray4"
          borderBottomWidth="$0.5"
          backgroundColor="transparent"
         
        >
          {['Login', 'Sign Up'].map((tab) => (
            <Tabs.Tab
              key={tab}
              unstyled
              paddingHorizontal="$3"
              paddingVertical="$2"
              value={tab}
              onInteraction={handleOnInteraction}
            >
              <SizableText>{tab.charAt(0).toUpperCase() + tab.slice(1)}</SizableText>
            </Tabs.Tab>
          ))}
        </Tabs.List>
      </YStack>
<Tabs.Content value="Sign In" forceMount flex={1} justifyContent="center">
  <TextInput
  style={styles.input}
            placeholder="Username or Email"
            value={username}
            onChangeText={setUsername}
            placeholderTextColor="#888"
  />
</Tabs.Content>
      <AnimatePresence exitBeforeEnter custom={{ direction }} initial={false}>
        <AnimatedYStack key={currentTab}>
          <Tabs.Content value={currentTab} forceMount flex={1} justifyContent="center">
            <H5 textAlign="center">{currentTab}</H5>
          </Tabs.Content>
        </AnimatedYStack>
      </AnimatePresence>
    </Tabs>
  );
};

const TabsRovingIndicator = ({ active, ...props }) => {
  return (
    <YStack
      position="absolute"
      backgroundColor={active ? '#515cbd' : '$grey5'}
      opacity={active ? 0.6 : 0.7}
      animation="100ms"
      enterStyle={{ opacity: 0 }}
      exitStyle={{ opacity: 0 }}
      {...props}
    />
  );
};

const AnimatedYStack = styled(YStack, {
  flex: 1,
  x: 0,
  opacity: 1,
  animation: '100ms',
  variants: {
    direction: {
      ':number': (direction) => ({
        enterStyle: { x: direction > 0 ? -25 : 25, opacity: 0 },
        exitStyle: { x: direction < 0 ? -25 : 25, opacity: 0 },
      }),
    },
  },
});

const styles = StyleSheet.create({
  input: {
    width: 250,
    height: 45,
    paddingHorizontal: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
  },
});

export default profileScreen;