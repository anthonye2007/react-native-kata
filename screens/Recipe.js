/*
* @flow
*/

import React, { Component } from 'react';
import { Text } from 'react-native';
import { Body, CardItem, List, ListItem } from 'native-base';

type Props = {
    title : '',
    ingredients : [],
    instructions: ''
};

export default class Recipe extends Component<Props> {
    render() {
        return (
                <CardItem bordered='true' key={this.props.title}>
                    <Body>
                        <Text className='title'>{this.props.title}</Text>
                        <List>
                            {this.props.ingredients.map((item, index) => <ListItem className='ingredient' key={index}><Text>{item}</Text></ListItem>)}
                        </List>
                        <Text className='instructions'>{this.props.instructions}</Text>
                    </Body>
                </CardItem>
        )
    }
}
