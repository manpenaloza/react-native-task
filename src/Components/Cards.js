import { Text, View, Image } from 'react-native';
import React, { Component } from "react";
import { 
  Container,
  CardItem,
  Card,
  Thumbnail,
  Header,
  DeckSwiper,
  Title,
  Footer,
  FooterTab,
  Button,
  Left,
  Right,
  Body,
  Icon
} from "native-base";
import withPostsHoC from '../utils/withPosts';

const renderItem = ({ image, text, score, created }) => (
  <Card style={{ 
    elevation: 3,
  }}>
    <CardItem>
      <Left>
          <Thumbnail source={{uri: image}} />
      </Left>
      <Body>
        <Text note>author:</Text>
          <Text>{text}</Text>
      </Body>
    </CardItem>
    <CardItem cardBody>
        <Image
          style={{ 
            resizeMode: 'cover',
            width: null,
            flex: 1,
            height: 300
          }} 
          source={{uri: image}}
        />
    </CardItem>
    <CardItem>
      <Icon name="heart" style={{ color: '#ED4A6A' }} />
      <Text>{score}</Text>
      <Right>
        <Text>Recent?: {created}</Text>
      </Right>
    </CardItem>
  </Card>
);

const Cards = ({ data }) => {
  return (
    <View>
      {data.length === 0 
        ? <View><Text>Loading...</Text></View>
        : <DeckSwiper
            dataSource={data}
            onSwipeLeft={() => alert('slide left > sweeet')}
            onSwipeRight={() => alert('slide right > declined')}
            renderItem={renderItem}
          />
      }
    </View>
  );
}

const redditApi = "https://www.reddit.com/r/aww/new.json";
export default withPostsHoC(redditApi)(Cards);