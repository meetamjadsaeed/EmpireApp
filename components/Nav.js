import React from 'react';
import { View, Text, StyleSheet} from 'react-native';
import { Button, Menu, Divider, Provider } from 'react-native-paper';

function Nav(props) {
    const [visible, setVisible] = React.useState(false);

  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);

    return (
    //    <Provider>
    //   <View
    //     style={{
    //       paddingTop: 50,
    //       flexDirection: 'row',
    //       justifyContent: 'center',
    //     }}>
    //     <Menu
    //       visible={visible}
    //       onDismiss={closeMenu}
    //       anchor={<Button onPress={openMenu}>Show menu</Button>}>
    //       <Menu.Item onPress={() => {}} title="Item 1" />
    //       <Menu.Item onPress={() => {}} title="Item 2" />
    //       <Divider />
    //       <Menu.Item onPress={() => {}} title="Item 3" />
    //     </Menu>
    //   </View>
    // </Provider>
    <View style={styles.container}>
        <Text>
            Menu
        </Text>
    </View>
    );
}

export default Nav;

const styles = StyleSheet.create({
    container: {
        marginTop:100,
    },
  });