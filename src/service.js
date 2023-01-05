import { createStore } from "redux";
import thunk from "redux-thunk";
import { applyMiddleware } from "redux";


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
    // console.log(imageResponse);

    dispatch({ type: IMAGE_GENERATED, imageUrl: imageResponse.url });
  };
}

export const getUrlApi = async (body) =>
  await fetch("http://178.124.214.161:7777/render ", body);

export const getImage = async (url) => await fetch(url);

export const getUrlData = async (body) => await body.text();
