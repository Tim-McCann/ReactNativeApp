import { StyleSheet, TextInput } from "react-native";
import colors from "../../assets/theme/colors";

export default StyleSheet.create ({
        logoImage:{
            height:150,
            width: 150,
            alignSelf: 'center',
            marginTop: 50,
        },
        title:{
            fontSize: 21,
            textAlign: 'center',
            paddingTop: 20,
            fontWeight: 'bold',
        },
        subtitle:{
            fontSize: 17,
            textAlign: 'center',
            paddingVertical: 20,
            fontWeight: '600',
        },
        form:{
            paddingTop: 30,
        },
        createSection:{
            flexDirection: 'row',
        },
        registerBtn:{
            paddingTop: 17,
            fontSize: 16
        },
});