import { View, Image, StyleSheet } from 'react-native';
import Text from './Text';

import theme from '../theme';

const RepositoryItem = props => {
    const styles = StyleSheet.create({
        imageSize: {
            width: 50,
            height: 50,
        },
        container: {
            // marginTop: Constants.statusBarHeight,
            margin: 20,
            flexDirection: 'row',
            justifyContent: 'flex-start',
            gap: 10,
            flexGrow: 1,
            flexShrink: 1,
        },
        container2: {
            // marginTop: Constants.statusBarHeight,
            margin: 20,
            paddingLeft: 20,
            flexDirection: 'row',
            justifyContent: 'flex-start',
            gap: 50,
            flexGrow: 1,
            flexShrink: 1,
        },
        flexItemA: {
            flexGrow: 0,
            flexShrink: 0,
        },
        flexItemB: {
            flexGrow: 0,
            flexShrink: 0,
            alignSelf: 'center'
        }
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

    const stars = props.item.stargazersCount
    const showStars = defineCounts(stars)
    const forks = props.item.forksCount
    const showForks = defineCounts(forks)
    const reviews = props.item.reviewCount
    const showReviews = defineCounts(reviews)

  return (
    <View>
    <View style={styles.container}>
        <View style= {styles.flexItemA}>
            <Image
                style={styles.imageSize}
                source={{
                    uri: 'https://avatars1.githubusercontent.com/u/4223?v=4'}}
            />
        </View>
        {/* <Image
            style={styles.imageSize}
            source={{
            uri: props.ownerAvatarUrl}}
        /> */}
        <View style= {styles.flexItemA}>
            <Text color="textPrimary" fontWeight="bold">{props.item.fullName}</Text>
            <Text color="textTertiary">{props.item.description}</Text>
            <View style= {theme.box}>
                <Text color="textSecondary">{props.item.language}</Text>
            </View>
        </View>
    </View>
     <View style={styles.container2}>
        <View style= {styles.flexItemA}>
            <Text color="textPrimary" fontWeight="bold">{showStars}</Text>
            <Text color="textTertiary">Stars</Text>
        </View>
        <View style= {styles.flexItemA}>
            <Text color="textPrimary" fontWeight="bold"> {showForks}</Text>
            <Text color="textTertiary">Forks</Text>
        </View>
        <View style= {styles.flexItemB}>
            <Text color="textPrimary" fontWeight="bold">{showReviews}</Text>
            <Text color="textTertiary">Reviews</Text>
        </View>
        <View style= {styles.flexItemA}>
            <Text color="textPrimary" fontWeight="bold">{props.item.ratingAverage}</Text>
            <Text color="textTertiary">Rating</Text>
        </View>
    </View>
    </View>
);
};

export default RepositoryItem