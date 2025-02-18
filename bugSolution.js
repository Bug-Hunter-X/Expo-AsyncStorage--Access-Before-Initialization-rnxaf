import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const App = () => {
  const [data, setData] = useState(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const checkAsyncStorage = async () => {
      try {
        const isAsyncStorageReady = await AsyncStorage.getItem('@isAsyncStorageReady');
        if (isAsyncStorageReady) {
          setIsReady(true);
        } else {
          // AsyncStorage not ready yet. Could be due to slow initialization. Consider adding a timeout.
          setTimeout(checkAsyncStorage, 200); // Retry in 200ms
        }
      } catch (error) {
        console.error('Error checking AsyncStorage:', error);
      }
    };
    checkAsyncStorage();
  }, []);

  useEffect(() => {
    const loadData = async () => {
      if (isReady) {
        try {
          const storedData = await AsyncStorage.getItem('@myData');
          setData(storedData);
        } catch (error) {
          console.error('Error loading data from AsyncStorage:', error);
        }
      }
    };
    loadData();
  }, [isReady]);

  return (
    <View>
      {data ? <Text>{data}</Text> : <Text>Loading...</Text>}
    </View>
  );
};

export default App;