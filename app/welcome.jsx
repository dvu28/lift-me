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
  Input,
} from 'tamagui';

// Demos array
const demos = ['underline'];

// Demo titles mapping
const demosTitle = {
  underline: 'Underline Indicator',
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
          {['Login', 'Sign Up',].map((tab) => (
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
  
  const[loginusername, setLoginUsername] = useState('');
  const[loginpassword, setLoginPassword] = useState('');

  const[signupusername, setSignUpUsername] = useState('');
  const[signuppassword, setSignUpPassword] = useState('');
  const[signupemail, setSignUpEmail] = useState('');
  
  
  const handleSignIn = () => {
    console.log('Username:', loginusername)
    console.log('Password:', loginpassword)
  };
  

  const handleSignUp = () => {
    console.log('Username', signupusername)
    console.log('Email', signupemail)
    console.log('Password', signuppassword)
  };

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
      height={350}
      flexDirection="column"
      activationMode="manual"
      backgroundColor="$background"
      borderRadius="$4"
      alignItems='center'
      
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


      <AnimatePresence exitBeforeEnter custom={{ direction }} initial={false}>
        {currentTab === 'Login' && (
          <AnimatedYStack key="Login">
            <Tabs.Content value="Login" justifyContent="center" space="$3" paddingTop="$5"  >
              <Input 
                  placeholder='Username or Email'
                  value={loginusername}
                  onChangeText={setLoginUsername}
                  style={[styles.input, { maxWidth: 300 }]}
                  multiline={false}      // ✅ Prevent vertical expansion
                  numberOfLines={1}      // ✅ Single line input
                  textAlignVertical="center"  // ✅ Aligns text vertically (Android fix)
                  maxLength={50}/>

              <Input 
                placeholder='Password'
                value={loginpassword}
                onChangeText={setLoginPassword}
                secureTextEntry
                style={[styles.input, { maxWidth: 300 }]}
                maxLength={50}/>

              <SizableText>Don't have an account yet? </SizableText>
              <Button size="$3" theme="active" onPress={handleSignIn}>
                <SizableText style={{fontWeight:'700', fontFamily: 'System'}}>
                  Login
                </SizableText>
              </Button>
            </Tabs.Content>
          </AnimatedYStack>
        )}

      {currentTab === 'Sign Up' && (
        <AnimatedYStack key="Sign Up">
          <Tabs.Content value= "Sign Up"  justifyContent="center" space="$3" paddingTop="$5" >
            <Input 
                placeholder='Username or Email'
                value={signupusername}
                onChangeText={setSignUpUsername}
                style={[styles.input, { maxWidth: 300 }]}
                maxLength={50}/>
            <Input
                placeholder="Email"
                value={signupemail}
                onChangeText={setSignUpEmail}
                style={[styles.input, { maxWidth: 300 }]}
                maxLength={50}/>
           <Input
                placeholder="Password"
                value={signuppassword}
                onChangeText={setSignUpPassword}
                secureTextEntry
                style={[styles.input, { maxWidth: 300 }]}
                maxLength={50}/>
            
            <SizableText>Have an account already? </SizableText>

            <Button size="$3" theme="active" fontWeight="700" onPress={handleSignUp}>
              <SizableText style={{fontWeight:'700', fontFamily: 'System'}}>
                Sign Up
              </SizableText>
            </Button>
          </Tabs.Content>
        </AnimatedYStack>
      )}
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
    alignSelf: 'center',
    width: 300,         // ✅ Fixed width (adjust as needed)
    height: 45,
    overflow: 'hidden',  // ✅ Prevent overflow
    maxWidth: 300
  }
 
});

export default profileScreen;