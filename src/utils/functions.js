import axios from 'axios';

export const getParamValues = (url) => {
    return url
        .slice(1)
        .split('&')
        .reduce((prev, curr) => {
            const [title, value] = curr.split('=');
            prev[title] = value;
            return prev;
        }, {});
};

export const setAuthHeader = () => {
    try {
        const params = JSON.parse(localStorage.getItem('params'));
        console.log('params below')
        console.log(params)
        if (params) {
            axios.defaults.headers.common[
                'Authorization'
            ] = `Bearer ${params.access_token}`;
        }
    } catch (error) {
        console.log('Error setting auth', error)
    }
}

export const spotifyGetRequest = async (url, params) => {
    setAuthHeader();
    const result = await axios.get(url, params);
    return result.data;
};

// Returns the song analysis
export const getSongAnalysis = async (id) => {
    const songAnalysis = await spotifyGetRequest(`https://api.spotify.com/v1/audio-features/?ids=${id}`)
    return songAnalysis
}

export const getUserProfile = async () => {
    const userProfile = await spotifyGetRequest("https://api.spotify.com/v1/me/")
    return userProfile
}

export const getRecentlyPlayedTracks = async () => {
    const recentlyPlayed = await spotifyGetRequest(`https://api.spotify.com/v1/me/player/recently-played`)
    return recentlyPlayed.items
}

export const getSongAnalysisArray = async (arr) => {    
    // Create Array of only song IDs
    const ids = arr.map(song => song.track.id)
    const stringIds = ids.toString()

    // Spotify GET request for audio data
    const data = await getSongAnalysis(stringIds)
    const audioData = data.audio_features
    
    // Add song properties (name/album/etc) from initial song array
    for (let i = 0; i < audioData.length; i++){
        audioData[i].name = arr[i].track.name
        audioData[i].album = arr[i].track.album.name
        audioData[i].artist = arr[i].track.artists[0].name
        audioData[i].imageURL = arr[i].track.album.images[1].url
        audioData[i].playedAt = arr[i].played_at
        audioData[i].countIndex = i + 1
    }
    return audioData
}

// Change date string into something readable/understandable
export const fixDate = date => {
    if (typeof date === 'string') {
        const year = date.slice(0, 4)
        const month = date.slice(5, 7)
        const day = date.slice(8, 10)
        const time = date.slice(11, 16)
        const text = `${month}/${day}/${year} at ${time}`
        return text
    }
}

// Add ellipese to long song/album names
export const formatStr = str => {
    if (typeof str === 'string' && str.length > 18){
        return str.substr(0, 18) + "..."
    } else {
    		return str
    }
}

export const fixCapitalization = str => {
    const splitStr = str.split('-')
    return splitStr[0].charAt(0).toUpperCase() + splitStr[0].slice(1) + " " + splitStr[1].charAt(0).toUpperCase() + splitStr[1].slice(1)
} 