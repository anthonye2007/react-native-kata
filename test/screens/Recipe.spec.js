import {shallow} from 'enzyme';
import React from 'react';
import Recipe from '../../screens/Recipe'

describe('Recipe', () => {
    it('should have a title', () => {
        const recipe = shallow(<Recipe ingredients={[]}/>);
        expect(recipe.find('.title').length).toEqual(1);
    });

    it('should have the title text it was given', () => {
        const expectedRecipeTitle = 'My Recipe';
        const recipe = shallow(<Recipe title={expectedRecipeTitle} ingredients={[]}/>);
        expect(recipe.find('.title').text().trim()).toEqual(expectedRecipeTitle);
    });

    it('should have a ingredients', () => {
        const expectedIngredients = ['1 cup Sugar', '1 tsp salt'];
        const recipe = shallow(<Recipe ingredients={expectedIngredients}/>);
        const ingredients = recipe.find('li')

        expect(ingredients.length).toEqual(2);
        expect(ingredients.at(0).text().trim()).toEqual('1 cup Sugar')
        expect(ingredients.at(1).text().trim()).toEqual('1 tsp salt')
    });

    it('should have instructions', () => {
        const expectedInstructions = 'First add Sugar. then combine dry ingredients ...';
        const recipe = shallow(<Recipe title={''} ingredients={[]} instructions={expectedInstructions}/>)
        const instructions = recipe.find('.instructions');
        expect(instructions.length).toEqual(1);
        expect(instructions.text().trim()).toEqual(expectedInstructions);
    })
});