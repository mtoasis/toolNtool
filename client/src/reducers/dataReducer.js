export default function reducer(state = {
    fetching: false,
    fetched: false,
    isGeoStored: false,
    data: [],
    dataSelected: [],
    geoInfo:{},
    isHomePage: false,
    error: null,
}, action) {
    switch (action.type) {
        case "FETCH_DATA": {
            return {
                ...state,
                fetching: true
            }

        }
        case "FETCH_DATA_FULFILLED": {
            return {
                ...state,
                fetching: false,
                fetched: true,
                data: action.payload
            }

        }
        case "FETCH_DATA_REJECTED": {
            return {
                ...state,
                fetching: false,
                error: action.payload
            }
        }
        case "STORE_LOC":{
            return{
                ...state,
                isGeoStored: true,
                geoInfo: action.payload
            }
        }
        case "IS_HOME":{
            return{
                ...state,
                isHomePage: true,
            }
        }
        case "LEFT_HOME":{
            return{
                ...state,
                isHomePage: false
            }
        }
        default: {
            return state
        }
    }

}
