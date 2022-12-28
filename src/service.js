import React from 'react';
import { createStore } from 'redux';

import thunk from 'redux-thunk';
import { applyMiddleware } from "redux"
import { Configuration, OpenAIApi } from "openai";

const IMAGE_GENERATED = 'IMAGE_GENERATED';

const initialState = {
  imageUrl: '',
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case IMAGE_GENERATED:
      return {
        ...state,
        imageUrl: action.imageUrl,
      };
    default:
      return state;
  }
}

export const store = createStore(reducer, applyMiddleware(thunk));






export  function generateImage(promt) {
  return async (dispatch) => {
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
  const apiUrl = 'https://api.openai.com/v1/images/generations';

  const response = await fetch(apiUrl, {

    method: 'POST',
    headers: {      
      'Content-Type': 'application/json',
      'Authorization': `Bearer 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`,
      'Content-Type': 'application/json',
     
    },
    body: JSON.stringify({ prompt: promt
    }),
  });

  const data = await response.json();
  dispatch({ type: IMAGE_GENERATED, imageUrl: data.data[0].url });
  console.log(data.data[0].url); // The generated image URL
}}

