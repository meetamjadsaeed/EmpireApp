import React from 'react';
import { View } from 'react-native';
import { Button, Paragraph, Dialog, Portal, Provider } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

function DialogBox(props) {
    const [visible, setVisible] = React.useState(false);
    const navigation = useNavigation(); 

  const showDialog = () => 
  {
    setVisible(true);
  }

  const done = () => 
  {
    navigation.navigate('Front');
  }

  const hideDialog = () => setVisible(false);
    return (
        <Provider>
        <View>
          <Button onPress={showDialog}>Create</Button>
          <Portal>
            <Dialog visible={visible} onDismiss={hideDialog}>
              <Dialog.Title>Message</Dialog.Title>
              <Dialog.Content>
                <Paragraph>Succefully Created</Paragraph>
              </Dialog.Content>
              <Dialog.Actions>
                <Button onPress={done}>Done</Button>
              </Dialog.Actions>
            </Dialog>
          </Portal>
        </View>
      </Provider>
    );
}

export default DialogBox;