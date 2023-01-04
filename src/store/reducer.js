import { IMAGE_GENERATED_SUCCESS, IMAGE_GENERATED_START } from "./actions";

const initialState = {
  loading: false,
  imageUrl: "",
};

export default function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case IMAGE_GENERATED_SUCCESS:
      return {
        ...state,
        loading: false,
        imageUrl: payload,
      };
    case IMAGE_GENERATED_START:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
}
