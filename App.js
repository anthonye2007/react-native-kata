import React from 'react';
import RecipeBox from "./screens/RecipeBox";
import axios from 'axios';

export default class App extends React.Component {
    state = {
        recipes: []
    };

    componentDidMount() {
        return axios.get('http://10.0.2.2:3000/recipes').then((response) => {
            this.setState({
                recipes: response.data.recipes
            });
        }).catch(reason => {
            console.error(reason.toString());
        });
    }

    render() {
        return (
            <RecipeBox recipes={this.state.recipes}/>
        );
    }
}
