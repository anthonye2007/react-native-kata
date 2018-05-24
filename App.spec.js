import React from 'react';
import App from './App';

import renderer from 'react-test-renderer';
import {shallow} from 'enzyme';

import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

it('renders without crashing', () => {
    const rendered = renderer.create(<App/>).toJSON();
    expect(rendered).toBeTruthy();
});

describe('App', () => {
    it('creates a RecipeBox with recipes from rest response', async (done) => {
        const mock = new MockAdapter(axios);
        const expectedRecipes = [
            {title: 'Fudge', ingredients: ['Chocolate', 'Butter'], instructions: 'Make the fudge'}
        ];

        mock.onGet('http://10.0.2.2:3000/recipes').reply(200, {
            recipes: expectedRecipes
        });
        const app = shallow(<App/>);

        app.instance().componentDidMount().then(() => {
            app.update()
            expect(app.find('RecipeBox').prop('recipes')).toEqual(expectedRecipes);
            done();
        });
    });
});
