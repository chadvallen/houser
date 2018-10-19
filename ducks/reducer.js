const INITIAL_STATE = {
    name: '',
    address: '',
    city: '',
    state: '',
    zipcode: '',
    image_url: ''
};

const UPDATE_NAME = "UPDATE_NAME";
const UPDATE_ADDRESS = "UPDATE_ADDRESS";
const UPDATE_CITY = "UPDATE_CITY";
const UPDATE_STATE = "UPDATE_STATE";
const UPDATE_ZIPCODE = "UPDATE_ZIPCODE";
const UPDATE_IMAGE_URL = "UPDATE_IMAGE_URL";

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

export function updateState(state) {
    return {
        type: UPDATE_STATE,
        payload: state
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


function reducer(state=INITIAL_STATE, action) {
    switch(action.type) {
        case UPDATE_NAME:
            return Object.assign({}, state, {name: action.payload});
        case UPDATE_ADDRESS:
            return Object.assign({}. state, {address: action.payload});
        case UPDATE_CITY:
            return Object.assign({}, state, {city: action.payload});
        case UPDATE_STATE:
            return Object.assign({}, state, {state: action.payload});
        case UPDATE_ZIPCODE:
            return Object.assign({}, state, {zipcode: action.payload});
        case UPDATE_IMAGE_URL:
            return Object.assign({}, state, {image_url: action.payload});
        default: return state;
    }
}

export default reducer;