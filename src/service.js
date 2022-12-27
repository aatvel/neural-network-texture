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




const configuration = new Configuration({
    apiKey: "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",
  });

const openai = new OpenAIApi(configuration);


export function generatePicture(data) {
    console.log(data)
  return async (dispatch) => {
    // const image = await Image.create(data);
    console.log(data)
    const res = await openai.createImage({
        prompt: data,
        n: 1,
        size: "512x512"
    });
    dispatch({ type: IMAGE_GENERATED, imageUrl: res.data.data[0].url });
  };
}

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

