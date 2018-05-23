import React, {Component, View} from 'react'
import Recipe from './Recipe'

type Props = {
    recipes: []
};

export default class RecipeBox extends Component<Props> {
    render() {
        return (
            <View>
                {this.props.recipes.map(recipe => <Recipe title={recipe.title}
                                                          ingredients={recipe.ingredients}
                                                          instructions={recipe.instructions}/>)
                }
            </View>
        )
    }
}
