import React, { Component, Text, View } from 'react'

type Props = {
    title : '',
    ingredients : []
};

export default class Recipe extends Component<Props> {
    render() {
        return (
            <View>
                <Text className='title'>{this.props.title}</Text>
                <ul>
                    {this.props.ingredients.map((item, index) => <li key={index}>{item}</li>)}
                </ul>
            </View>
        )
    }
}