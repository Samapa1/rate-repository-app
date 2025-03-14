import { useFormik } from 'formik';
import * as yup from 'yup';
import { TextInput, Pressable, View, StyleSheet } from 'react-native';
import { useNavigate } from "react-router";
import Text from './Text';
import useCreateReview from '../hooks/useCreateReview';
import theme from '../theme';

const validationSchema = yup.object().shape({
    owner: yup
        .string()
        .required('Repository owner name is required'),
    repository: yup
        .string()
        .required('Repository name is required'),
    rating: yup
        .number().min(0).max(100)
        .required('Rating is required'),
    review: yup
        .string()
  });

const initialValues = {
    owner: '',
    repository: '',
    rating: '',
    reviewText: ''
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

const ReviewForm = ({ onSubmit }) => {      
        const formik = useFormik({
          initialValues,
          onSubmit,
          validationSchema,       
        });
   
        return (
            <View style= {styles.container}>
                {formik.touched.owner && formik.errors.owner ? (
                    <View>
                    <TextInput style={styles.inputError}
                        placeholder="Owner"
                        value={formik.values.owner}
                        onChangeText={formik.handleChange('owner')}
                    />
                    <Text style={{ color: '#d73a4a'}}>{formik.errors.owner}</Text>
                    </View>
                )
                : 
                    <TextInput style={styles.input}
                        placeholder="Owner"
                        value={formik.values.owner}
                        onChangeText={formik.handleChange('owner')}
                    />
                }
                {formik.touched.repository && formik.errors.repository ? (
                    <View>
                    <TextInput style={styles.inputError}
                        placeholder="Repository"
                        value={formik.values.repository}
                        onChangeText={formik.handleChange('repository')}
                    />
                    <Text style={{ color: '#d73a4a'}}>{formik.errors.repository}</Text>
                    </View>
                )
                : 
                    <TextInput style={styles.input}
                        placeholder="Repository"
                        value={formik.values.repository}
                        onChangeText={formik.handleChange('repository')}
                    />
                }
                {formik.touched.rating && formik.errors.rating ? (
                    <View>
                    <TextInput style={styles.inputError}
                        placeholder="Rating"
                        value={formik.values.rating}
                        onChangeText={formik.handleChange('rating')}
                    />
                    <Text style={{ color: '#d73a4a'}}>{formik.errors.rating}</Text>
                    </View>
                )
                : 
                    <TextInput style={styles.input}
                        placeholder="Rating"
                        value={formik.values.rating}
                        onChangeText={formik.handleChange('rating')}
                    />
                }
                {formik.touched.reviewText && formik.errors.reviewText ? (
                    <View>
                    <TextInput style={styles.inputError}
                        placeholder="ReviewText"
                        value={formik.values.reviewText}
                        onChangeText={formik.handleChange('reviewText')}
                    />
                    <Text style={{ color: '#d73a4a'}}>{formik.errors.reviewText}</Text>
                    </View>
                )
                : 
                    <TextInput style={styles.input}
                        placeholder="ReviewText"
                        value={formik.values.reviewText}
                        onChangeText={formik.handleChange('reviewText')}
                    />
                }
                <View style= {styles.buttonContainer}>
                    <View style= {[theme.box, {padding: 10}]}>
                    <Pressable onPress={formik.handleSubmit}>
                        <Text color="textSecondary" fontWeight="bold" style={{ textAlign: 'center'}}>Create a review</Text>
                    </Pressable>
                    </View>
                </View>
            </View>
        )
}

const Review = () => {
    const [createReview] = useCreateReview();
    let navigate = useNavigate();

    const onSubmit = async (values) => {
        const { owner, repository, rating, reviewText} = values;

        try {
            const { data } = await createReview({ owner, repository, rating, reviewText })
            console.log(data)
            navigate(`/${data.createReview.repositoryId}`)

        } catch (e) {
          console.log(e);
        }
      };

      return (
        <ReviewForm onSubmit= {onSubmit}/>
      )
    
}

export default Review