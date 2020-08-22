import axios from 'axios';
let inintialstate = {
    review: [
        {
            name: '',
            image: '',
            review: ''
        }
    ]
}
var   config = {
    mode: 'no-cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
        'Content-Type': 'application/json'
    },
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
}
//reducer
export default (state = inintialstate, action) => {
    let { type, payload } = action;
    const API = "https://alaacv-backend.herokuapp.com"
    switch (type) {

        case 'addreivew':
            
            async function getPost(e) {
                const response = axios.post(`${API}/review`, payload,config);
                await response;
            }

            getPost();
        case 'contact':
            async function contact(obj) {
                const response = axios.post(`${API}/contact`,payload,config);
                await response;
            }
            contact();
        default:
            return state
    }
}
export const addreivew = (obj) => {
    return {
        type: 'addreivew',
        payload: obj
    }
}
export const contact = (obj) => {
    return {
        type: 'contact',
        payload: obj
    }
}