import { createSelector } from "reselect";

const selectShop = (state) => state.shop;

export const selectCollection = createSelector(
  [selectShop],
  (shop) => shop.collections
);

export const selectCollectionsForPreview = createSelector(
  [selectCollection],
  (collection) => Object.keys(collection).map((key) => collection[key])
);

export const selectCollections = (collectinUrlParams) =>
  createSelector(
    [selectCollection],
    (collection) => collection[collectinUrlParams]
  );
