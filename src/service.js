import React from "react";
import { createStore } from "redux";
import thunk from "redux-thunk";
import { applyMiddleware } from "redux";
import { Configuration, OpenAIApi } from "openai";

const IMAGE_GENERATED = "IMAGE_GENERATED";

const initialState = {
  imageUrl: "",
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

// const configuration = new Configuration({
//   apiKey: "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",
// });

// const openai = new OpenAIApi(configuration);

// export function generatePicture(data) {
//   console.log(data);
//   return async (dispatch) => {
//     // const image = await Image.create(data);
//     console.log(data);
//     const res = await openai.createImage({
//       prompt: data,
//       n: 1,
//       size: "512x512",
//     });
//     dispatch({ type: IMAGE_GENERATED, imageUrl: res.data.data[0].url });
//   };
// }

// export function generateImage(promt) {
//   return async (dispatch) => {
//     const proxyUrl = "https://cors-anywhere.herokuapp.com/";
//     const apiUrl = "https://api.openai.com/v1/images/generations";

//     const response = await fetch(apiUrl, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer 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`,
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ prompt: promt }),
//     });

//     const data = await response.json();
//     dispatch({ type: IMAGE_GENERATED, imageUrl: data.data[0].url });
//     console.log(data.data[0].url); // The generated image URL
//   };
// }

///////

export function downloadImage(prompt) {
  return async (dispatch) => {

    const url = "http://178.124.214.161:7777/render ";
    const description = { prompt: JSON.stringify(prompt), steps: 5 };

    const response = await fetch(url, {
      method: "POST", // или 'PUT'
      body: JSON.stringify(description), // данные могут быть 'строкой' или {объектом}!
    });
    const data = await response.text();
    console.log("Успех:", JSON.stringify(data), data);

    await new Promise((resolve) => setTimeout(resolve, 50000));

    const urlDownload = "http://178.124.214.161:7777/download/";

    // Make the second request
    const imageResponse = await fetch(`${urlDownload}${data}`);
    console.log(imageResponse);

    dispatch({ type: IMAGE_GENERATED, imageUrl: imageResponse.url });    
  };
}
