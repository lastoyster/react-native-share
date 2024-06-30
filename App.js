import {View, Text, Button} from 'react-native';
import React from 'react';
import Share from 'react-native-share';

export default function App() {
  const share = async () => {
    const options = {
      message:'Vos noscere',
      url: 'https://lastoyster.hashnode.dev/',
      email: 'kadampratiksha34@yahoo.mail.in',
      subject: 'app progressio',
      recipient: '919988998899',
    };

    try {
      const res = await Share.open(options);
      console.log(res);
    } catch (err) {
      console.log(err);
    }

    // Share.open(options)
    //   .then(res => console.log(res))
    //   .catch(err => console.log(err));
  };

  return (
    <View>
      <Text
        style={{
          fontSize: 40,
          marginVertical: 40,
          color: 'Grey',
          textAlign: 'center',
        }}>
        React Native Share Links
      </Text>
      <View style={{marginHorizontal: 40}}>
        <Button title="Share" onPress={share} />
      </View>
    </View>
  );
}
