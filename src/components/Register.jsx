import { useFormik } from 'formik';
import * as yup from 'yup';
import { TextInput, Pressable, View, StyleSheet } from 'react-native';
import { useNavigate } from "react-router";
import Text from './Text';
import useCreateUser from '../hooks/useCreateUser';
import useSignIn from '../hooks/useSignIn';
import theme from '../theme';

const validationSchema = yup.object().shape({
    username: yup
        .string().min(5).max(30)
        .required('Username is required'),
    password: yup
        .string().min(5).max(30)
        .required('Password is required'),
    confirmedPassword: yup
        .string()
        .oneOf([yup.ref('password'), null])
        .required('Password confirmation is required'),
  });

const initialValues = {
    username: '',
    password: '',
    confirmedPassword: '',
};

const styles = StyleSheet.create({
    input: {
        padding: 10,
        borderWidth: 1,
        borderRadius: 3,
        color: theme.colors.textTertiary
    },
    inputError: {
        padding: 10,
        borderWidth: 1,
        borderRadius: 3,
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

const RegisterForm = ({ onSubmit }) => {      
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
                {formik.touched.confirmedPassword && formik.errors.confirmedPassword ? (
                    <View>
                    <TextInput style={styles.inputError}
                        placeholder="ConfirmedPassword"
                        value={formik.values.confirmedPassword}
                        onChangeText={formik.handleChange('confirmedPassword')}
                    />
                    <Text style={{ color: '#d73a4a'}}>{formik.errors.confirmedPassword}</Text>
                    </View>
                )
                : 
                    <TextInput style={styles.input}
                        placeholder="ConfirmedPassword"
                        value={formik.values.confirmedPassword}
                        onChangeText={formik.handleChange('confirmedPassword')}
                    />
                }
                <View style= {styles.buttonContainer}>
                    <View style= {[theme.box, {padding: 10}]}>
                    <Pressable onPress={formik.handleSubmit}>
                        <Text color="textSecondary" fontWeight="bold" style={{ textAlign: 'center'}}>Sign up</Text>
                    </Pressable>
                    </View>
                </View>
            </View>
        )
    
}

const Register = () => {
    const [createUser] = useCreateUser();
    const [signIn] = useSignIn();
    let navigate = useNavigate();

    const onSubmit = async (values) => {
        const { username, password } = values;

        try {
            const { data } = await createUser({  username, password })
            console.log(data)
            console.log("sign in")
            const  { data2 } = await signIn( { username, password })
            console.log(data2)
            navigate("/")
            // navigate(`/${data.createReview.repositoryId}`)
           

        } catch (e) {
          console.log(e);
        }

      };

      return (
        <RegisterForm onSubmit= {onSubmit}/>
      )
    
}

export default Register