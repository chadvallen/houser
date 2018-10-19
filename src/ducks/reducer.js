const INITIAL_STATE = {
    name: '',
    address: '',
    city: '',
    stateName: '',
    zipcode: '',
    image_url: '',
    mortgage: 0
};

const UPDATE_NAME = "UPDATE_NAME";
const UPDATE_ADDRESS = "UPDATE_ADDRESS";
const UPDATE_CITY = "UPDATE_CITY";
const UPDATE_STATE = "UPDATE_STATE";
const UPDATE_ZIPCODE = "UPDATE_ZIPCODE";
const UPDATE_IMAGE_URL = "UPDATE_IMAGE_URL";
const UPDATE_MORTGAGE = "UPDATE_MORTGAGE";


export function updateName(name) {
    return {
        type: UPDATE_NAME,
        payload: name
    }
}

export function updateAddress(address) {
    return {
        type: UPDATE_ADDRESS,
        payload: address
    }
}

export function updateCity(city) {
    return {
        type: UPDATE_CITY,
        payload: city
    }
}

export function updateState(stateName) {
    return {
        type: UPDATE_STATE,
        payload: stateName
    }
}

export function updateZipcode(zipcode) {
    return {
        type: UPDATE_ZIPCODE,
        payload: zipcode
    }
}

export function updateImageUrl(image_url) {
    return {
        type: UPDATE_IMAGE_URL,
        payload: image_url
    }
}

export function updateMortgage(mortgage){
    return {
        type: UPDATE_MORTGAGE,
        payload: mortgage
    }
}

function reducer(state=INITIAL_STATE, action) {
    switch(action.type) {
        case UPDATE_NAME:
            return Object.assign({}, state, {name: action.payload});
        case UPDATE_ADDRESS:
            return Object.assign({}, state, {address: action.payload});
        case UPDATE_CITY:
            return Object.assign({}, state, {city: action.payload});
        case UPDATE_STATE:
            return Object.assign({}, state, {stateName: action.payload});
        case UPDATE_ZIPCODE:
            return Object.assign({}, state, {zipcode: action.payload});
        case UPDATE_IMAGE_URL:
            return Object.assign({}, state, {image_url: action.payload});
        case UPDATE_MORTGAGE:
            return Object.assign({}, state, {mortgage: action.payload});
        default: return state;
    }
}

export default reducer;