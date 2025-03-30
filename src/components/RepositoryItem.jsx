import { View, Image, StyleSheet } from 'react-native';
import Text from './Text';
import theme from '../theme';
import RepositoryLink from './RepositoryLink';

const RepositoryItem = ({ item, showButton }) => {
    const styles = StyleSheet.create({
        imageSize: {
            width: 50,
            height: 50,
        },
        container: {
            margin: 20,
            flexDirection: 'row',
            justifyContent: 'flex-start',
            gap: 10,
            flexGrow: 1,
            flexShrink: 1,
        },
        container2: {
            margin: 20,
            paddingLeft: 20,
            paddingRight: 20,
            flexDirection: 'row',
            justifyContent: 'flex-start',
            gap: 30,
            flexGrow: 1,
            flexShrink: 1,
        },
        flexItemA: {
            flexGrow: 0,
            flexShrink: 1,
            alignItems: 'flex-start',
            gap: 10
        },
        flexItemB: {
            flexGrow: 1,
            alignItems: 'center',
            gap: 10
        },
        buttonContainer: {
            flexGrow: 1,
            flexShrink: 1,
            marginLeft: 20,
            marginRight: 20,
            alignItems: 'stretch'
        },
    })

    const defineCounts = (counts) => {
        let showCounts = 0
        if (counts >= 1000) {
            showCounts = `${(counts/1000).toFixed(1)}k`
        }
        else {
            showCounts = counts
        }
        return showCounts
    } 

    if (item) {

        const stars = item.stargazersCount
        const showStars = defineCounts(stars)
        const forks = item.forksCount
        const showForks = defineCounts(forks)
        const reviews = item.reviewCount
        const showReviews = defineCounts(reviews)

    return (
        <View testID="repositoryItem">
            <View style={styles.container}>
                <View style= {styles.flexItemA}>
                    <Image
                        style={styles.imageSize}
                        source={{
                            uri: item.ownerAvatarUrl}}
                    />
                </View>
                <View style= {styles.flexItemA}>
                    <Text color="textPrimary" fontWeight="bold">{item.fullName}</Text>
                    <Text color="textTertiary">{item.description}</Text>
                    <View style= {theme.box}>
                        <Text color="textSecondary">{item.language}</Text>
                    </View>
                </View>
            </View>
            <View style={styles.container2}>
                <View style= {styles.flexItemB}>
                    <Text color="textPrimary" fontWeight="bold">{showStars}</Text>
                    <Text color="textTertiary">Stars</Text>
                </View>
                <View style= {styles.flexItemB}>
                    <Text color="textPrimary" fontWeight="bold"> {showForks}</Text>
                    <Text color="textTertiary">Forks</Text>
                </View>
                <View style= {styles.flexItemB}>
                    <Text color="textPrimary" fontWeight="bold">{showReviews}</Text>
                    <Text color="textTertiary">Reviews</Text>
                </View>
                <View style= {styles.flexItemB}>
                    <Text color="textPrimary" fontWeight="bold">{item.ratingAverage}</Text>
                    <Text color="textTertiary">Rating</Text>
                </View>
            </View>
            <View>
            {showButton === "true" ? 
                <RepositoryLink item= {item}/>
            : null}     
            </View>
        </View>
    );
}
};

export default RepositoryItem