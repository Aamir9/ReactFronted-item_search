import { createSlice } from "@reduxjs/toolkit";
import _ from 'lodash';

const initialState = {
    category: {},
    priceStartRange: -1,
    priceEndRange: -1,
    brandNameList: [],
    conditionList: [],
    locations: [],
    
};

const filterSlice = createSlice({
    name: "filter",
    initialState,
    reducers: {

        setCategory(state, param) {
            state.category = param.payload;
        },
        categoryRemove(state, param) {
            state.category = {};
        },

        setPriceRange(state, param) {
            state.priceStartRange = param.payload.minPrice;
            state.priceEndRange = param.payload.maxPrice;
        },
        removeStartPrice(state, param) {

            state.priceStartRange = -1;
        },

        removeEndPrice(state, param) {

            state.priceEndRange = -1;
        },

        clearFilters(state, para) {
            state.category = {};
            state.priceStartRange = -1;
            state.priceEndRange = -1;
            state.brandNameList = [];
            state.conditionList = [];
            state.locations = [];
            

        },

        setItemLocation(state, param) {

            if (state.locations.length > 0) {

                var index = _.findIndex(state.locations, function (o) { return o == param.payload; });
                if (index == -1) {
                    state.locations.push(param.payload);

                }
                else {
                    _.remove(state.locations, param.payload);
                    state.locations.splice(index, 1);

                }
            }

            else {
                state.locations.push(param.payload);

            }
        },

        setItemCondition(state, param) {

            if (state.conditionList.length > 0) {

                var index = _.findIndex(state.conditionList, function (o) { return o == param.payload; });
                if (index == -1) {
                    state.conditionList.push(param.payload);

                }
                else {
                    _.remove(state.conditionList, param.payload);
                    state.conditionList.splice(index, 1);

                }
            }

            else {
                state.conditionList.push(param.payload);

            }
        },
        



    },
});

export const {
    setCategory, getCategory, clearFilters,
    categoryRemove, setPriceRange, removeStartPrice, removeEndPrice,
    setItemLocation,setItemCondition
} = filterSlice.actions;

export default filterSlice.reducer;