export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    //token: 'BQAYL2HZ9i4V8Whs4k_wU2E1r7RMFgwAu9yuOB_Kep6y471zKW_LaN04AH_yohfnsFX3gW8CYL4mHS6KuXHDqQZAYdL6l4LCzxQfJpiqIMjmf_lSgh_J5qeHYvY0A3ftNnvgSJzzPtsUhrUk5eXuRZiajEh9DYsYRyiWESLogdexThhu2 - gzr8do07EoXkbCvS61NsrHU3nSAPhIdHJMZg',
};
const reducer = (state, action) => {
    console.log(action);
    switch(action.type){
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            };
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token,
            };
        case 'SET_PLAYLISTS':
            return {
                ...state,
                playlists: action.playlists
            };
        case 'SET_DISCOVER_WEEKLY':
            return {
                ...state,
                discover_weekly: action.discover_weekly
            }
        default: return state;
    }
}

export default reducer;
