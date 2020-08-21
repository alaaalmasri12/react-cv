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
//reducer
export default (state = inintialstate, action) => {
    let { type, payload } = action;
    const API = "https://alaacv-backend.herokuapp.com"
    switch (type) {

        case 'addreivew':
            async function getPost(e) {
                const response = axios.post(`${API}/review`, payload);
                await response;
            }

            getPost();
        case 'contact':
            async function contact(obj) {
                const response = axios.post(`${API}/contact`,payload);
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