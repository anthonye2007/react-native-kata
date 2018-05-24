/*
* @flow
*/

import React, { Component } from 'react'
import { Card } from 'native-base';
import Recipe from './Recipe'

type Props = {
    recipes: []
};

export default class RecipeBox extends Component<Props> {
    render() {
        return (
            <Card>
                { this.props.recipes.map(recipe => <Recipe key={recipe.title}
                                                           title={recipe.title}
                                                           ingredients={recipe.ingredients}
                                                           instructions={recipe.instructions}/>)
                }
            </Card>
        )
    }
}
