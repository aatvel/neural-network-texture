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
        size: "512x512",
    });
    dispatch({ type: IMAGE_GENERATED, imageUrl: res.data.data[0].url });
  };
}