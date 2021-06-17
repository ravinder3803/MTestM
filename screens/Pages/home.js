import React, { Component, useState, useEffect, useRef } from "react"
import { StyleSheet, View, Text, Image, FlatList, ActivityIndicator } from "react-native"
import { getImagesFromServer } from '../Webservice/Api_Call'
import { useSelector, useDispatch } from 'react-redux'

import Carousel, { Pagination } from 'react-native-snap-carousel';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Image as ImageRNE } from 'react-native-elements';


const Home = (props) => {
    const dispatch = useDispatch()
    const images_list = useSelector(state => state.images_list)
    const carouselArray = useSelector(state => state.images_list.slice(0, 5))
    const [activeslide, setActiveslide] = useState(0)
    const carouselRef = useRef();

    useEffect(() => {
        getImagesFromServer(30, dispatch).then((res) => {
        }).catch((err) => { })
    }, []);

    const renderCarosoulItem = ({ item }) => {
        return (
            <View style={styles.carouselStyle}>
                <ImageRNE resizeMode='contain'
                    source={{ uri: item }}
                    style={styles.carouselImageStyle}
                    placeholderStyle={{ backgroundColor: '#CBDCE8', }}
                    PlaceholderContent={<ActivityIndicator color={'white'} />}
                />
            </View>
        );
    }

    const renderItem = ({ item }) => {
        return (
            <View style={styles.gridViewStyle}>
                <ImageRNE resizeMode='cover'
                    source={{ uri: item }}
                    style={styles.gridImageStyle}
                    placeholderStyle={{ backgroundColor: '#CBDCE8', }}
                    PlaceholderContent={<ActivityIndicator color={'white'} />}
                />
            </View>
        );
    }

    return (
        <View style={{ flex: 1 }}>
            <View style={styles.innerview}>
                <Carousel
                    ref={carouselRef}
                    data={carouselArray}
                    renderItem={renderCarosoulItem}
                    sliderWidth={wp(100)}
                    itemHeight={wp(50)}
                    itemWidth={wp(100)}
                    firstItem={0}
                    activeSlideAlignment='center'
                    inactiveSlideScale={1}
                    inactiveSlideOpacity={1}
                    loop={true}
                    autoplay={true}
                    autoplayDelay={500}
                    autoplayInterval={5000}
                    onSnapToItem={(index) => setActiveslide(index)}
                />
                <Pagination
                    dotsLength={carouselArray.length}
                    activeDotIndex={activeslide}
                    containerStyle={{ paddingTop: 10, alignSelf: 'center' }}
                    dotColor={'red'}
                    dotStyle={{ width: 12, height: 12, borderRadius: 12 }}
                    inactiveDotColor={'gray'}
                    inactiveDotOpacity={1}
                    inactiveDotScale={0.7}
                    carouselRef={carouselRef}
                    tappableDots={!!carouselRef}
                />
            </View>
            < FlatList
                style={{ paddingHorizontal: wp(2) }}
                data={images_list}
                renderItem={renderItem}
                keyExtractor={item => item}
                numColumns={3}>
            </FlatList>
        </View>
    )
}


const styles = StyleSheet.create({
    innerview: {
        height: wp(60),
        width: wp(100),
        justifyContent: 'center'
    },
    carouselStyle: {
        width: wp(100),
        height: wp(50),
        alignSelf: 'center'
    },
    carouselImageStyle: {
        alignSelf: 'center',
        resizeMode: 'cover',
        width: wp(100),
        height: wp(50)
    },
    gridViewStyle: {
        width: wp(28),
        height: wp(28),
        overflow: 'hidden',
        marginVertical: wp(2),
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        marginHorizontal: wp(2),
        borderRadius: wp(2)
    },
    gridImageStyle: {
        alignSelf: 'center',
        resizeMode: 'cover',
        width: wp(28),
        height: wp(28),
        borderRadius: wp(2)
    }
});


export default Home;