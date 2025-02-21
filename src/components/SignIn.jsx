import Text from './Text';
import { TextInput, Pressable, View, StyleSheet } from 'react-native';
import { useFormik } from 'formik';
import theme from '../theme';

    const initialValues = {
        username: '',
        password: '',
    };

    const styles = StyleSheet.create({
        input: {
          padding: 10,
          borderWidth: 1,
          color: theme.colors.textTertiary
        },
        container: {
            margin: 20,
            gap: 10,
            flexGrow: 1,
            flexShrink: 1,
        },
        buttonContainer: {
            flexGrow: 1,
            flexShrink: 1,
            alignItems: 'stretch'
        },
    })

    const LogInForm = ({ onSubmit }) => {
        const formik = useFormik({
          initialValues,
          onSubmit,
        });
   
        return (
            <View style= {styles.container}>
                <TextInput style={styles.input}
                    placeholder="Username"
                    value={formik.values.username}
                    onChangeText={formik.handleChange('username')}
                />
                <TextInput style={styles.input}
                    placeholder="Password"
                    value={formik.values.password}
                    onChangeText={formik.handleChange('password')}
                />
                <View style= {styles.buttonContainer}>
                    <View style= {[theme.box, {padding: 10}]}>
                    <Pressable onPress={formik.handleSubmit}>
                        <Text color="textSecondary" fontWeight="bold" style={{ textAlign: 'center'}}>Sign in</Text>
                    </Pressable>
                    </View>
                </View>
            </View>
        )
    }

    const SignIn = () => {
        const onSubmit = values => {
            console.log(values)
        }
        return <LogInForm onSubmit={onSubmit} />;
//   <Text>The sign-in view</Text>);
};

export default SignIn;