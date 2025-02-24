import Text from './Text';
import { TextInput, Pressable, View, StyleSheet } from 'react-native';
import { useFormik } from 'formik';
import * as yup from 'yup';

import theme from '../theme';

const validationSchema = yup.object().shape({
    username: yup
        .string()
        .min(1, 'Username must be greater or equal to 1')
        .required('Username is required'),
    password: yup
        .string()
        .min(1, 'Password must be greater or equal to 1')
        .required('Password is required'),
  });

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
        inputError: {
            padding: 10,
            borderWidth: 1,
            borderColor: '#d73a4a',
            color:  '#d73a4a'
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
          validationSchema,       
        });
   
        return (
            <View style= {styles.container}>
                {formik.touched.username && formik.errors.username ? (
                    <View>
                    <TextInput style={styles.inputError}
                        placeholder="Username"
                        value={formik.values.username}
                        onChangeText={formik.handleChange('username')}
                    />
                    <Text style={{ color: '#d73a4a'}}>{formik.errors.username}</Text>
                    </View>
                )
                : 
                    <TextInput style={styles.input}
                        placeholder="Username"
                        value={formik.values.username}
                        onChangeText={formik.handleChange('username')}
                    />
                }
                {formik.touched.password && formik.errors.password ? (
                    <View>
                    <TextInput style={styles.inputError}
                        placeholder="Password"
                        value={formik.values.password}
                        onChangeText={formik.handleChange('password')}
                    />
                    <Text style={{ color: '#d73a4a'}}>{formik.errors.password}</Text>
                    </View>
                )
                : 
                    <TextInput style={styles.input}
                        placeholder="Password"
                        value={formik.values.password}
                        onChangeText={formik.handleChange('password')}
                    />
                }
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
            console.log("onSubmit")
            console.log(values)
        }
        return <LogInForm onSubmit={onSubmit} />;
};

export default SignIn;


