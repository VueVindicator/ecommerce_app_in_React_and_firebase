import { createSelector } from 'reselect'
const selectShop = state => state.shop
const selectDirectoryComponents = createSelector(
    [selectShop],
    shop => shop
)

export default selectDirectoryComponents