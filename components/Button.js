import { React } from 'react';
import { TouchableHighlight, StyleSheet, Text } from 'react-native';



const Button = (props) => {
    return (
        <TouchableHighlight style={styles.button}>
            <Text style={styles.text}>Log in</Text>
        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
    button: {
        width: 280,
        height: 40,
        borderColor: '#808080',
        borderRadius: 4,
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0072A0'
    },
    text: {
        textAlign: 'center',
        fontSize: 15,
        color: 'white'
    }
})

export default Button