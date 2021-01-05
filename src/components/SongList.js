import React from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';

class SongList extends React.Component{

    renderList() {
        return this.props.songs.map((song) => {
            return (
                <div className="item" key={song.title}>
                    <div className="right floated content">
                        <button
                            onClick={() => this.props.selectSong(song)}
                            className="ui button primary">Select</button>
                    </div>
                    <div className="content">{song.title}</div>
                </div>
            )
        });
    }

    render() {
        return (
            <div className="ui divided list">{ this.renderList()}</div>
        )
    }
}

const mapStateToProps = (state) => {
    return { songs: state.songs };
}

export default connect(mapStateToProps, {
    selectSong: selectSong
})(SongList);
//selectSong has to pass through connect => similar to this => store.dispatch(createPolicy('Alex', 20));
//if we just called createPolicy('Alex', 20); => it would be treated as a normal function. But we dont see any
//mention of dispatch function here, that is because, the connect function does all that magic behin the scenes.
//So, we have to send our action creator through connect funtion