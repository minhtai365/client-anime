import { createSlice } from '@reduxjs/toolkit';

const getdata = createSlice({
    name: 'getdata',
    initialState: {
        info: [],
        dataslides: [],
        search: '',
        page: 1,
        slug: 'minh-tai',
        episodes:[],

    },
    reducers: {
        getSlug: (state, action) => {
            state.slug = action.payload
        },
        getEpisodes: (state, action) => {
            console.log(action);
            state.episodes = action.payload;
        },
        getInfo: (state, action) => {
            state.info = action.payload;
        },
        getSlides: (state, action) => {
            state.dataslides = action.payload;
        },
        getPage: (state, action) => {
            state.page = action.payload
        },
        getSearch: (state, action) => {
            state.search = action.payload
        },
        // getDt: (state, action) => {
        //     state.dt = state.dataproducts.filter(x => x.catelogyid === action.payload);
        //     state.search = ""
        // }
    }
});
const { reducer, actions } = getdata;
export const { getSlug, getEpisodes, getInfo, getSlides, getSearch, getDt, getPage } = actions;
export default reducer;