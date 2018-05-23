import {shallow} from 'enzyme';
import React from 'react';
import RecipeBox from '../../screens/RecipeBox'

describe('RecipeBox', () => {
    it('should have a multiple recipes', () => {
        const recipe1 = {
            title: 'Recipe One',
            ingredients: [],
            instructions: 'this is how to make it'
        };
        const recipe2 = {
            title: 'Recipe Two',
            ingredients: [],
            instructions: 'this is how to make it'
        };
        const recipes = [recipe1, recipe2]
        const recipeBox = shallow(<RecipeBox recipes={recipes}/>);
        expect(recipeBox.find('Recipe').length).toEqual(2);
    });
});