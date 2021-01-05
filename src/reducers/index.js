import { combineReducers } from 'redux';

const songsReducer = () => {
    return [
        { title: 'No Scrubs', duration: '4:05' },
        { title: 'Macarena', duration: '4:00' },
        { title: 'All Star', duration: '3:50' },
        { title: 'I want it that way', duration: '4:15' }
    ];
};

const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === 'SELECTED_SONG') {
        return action.payload;
    }
    return selectedSong;
};

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});