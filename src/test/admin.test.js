import React from 'react';
import {Admin} from './../component/admin';
import ReactDOM from 'react-dom';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Admin postData={ {firstname:'' }} putData={{firstname:'' }} dispatch={()=> {}}/>, div);
    ReactDOM.unmountComponentAtNode(div);
});