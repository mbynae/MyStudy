import { useEffect, useState } from 'react';
import { StyleSheet, Text } from 'react-native';
import { WebView } from 'react-native-webview';

export default function App() {
    const [text, setText] = useState(null);
    const [hasPermission, setHasPermission] = useState(null);

    const onMessage = e => {
        // alert(e.nativeEvent.data);
        setText(e.nativeEvent.data);
    };

    useEffect(() => {
        if (text === 'true') {
            (async () => {
                const { status } = await Camera.requestPermissionsAsync();
                setHasPermission(status === 'granted');
            })();
        }
    }, [text]);

    if (hasPermission) {
        return <Text>카메라</Text>;
    }

    return <WebView source={{ uri: 'https://main--joyful-crepe-795cf3.netlify.app/' }} style={styles.container} onMessage={onMessage} />;
}

const styles = StyleSheet.create({
    container: {
        marginTop: 50,
    },
});
