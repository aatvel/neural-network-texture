export const IMAGE_GENERATED_START = "IMAGE_GENERATED_START";
export const IMAGE_GENERATED_SUCCESS = "IMAGE_GENERATED_SUCCESS";

export const loadImageStart = (promt) => ({
  type: IMAGE_GENERATED_START,
  payload: promt,
});

export const loadImageSucces = (imageUrl) => ({
  type: IMAGE_GENERATED_SUCCESS,
  payload: imageUrl,
});
