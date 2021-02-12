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
    const songAnalysis = await spotifyGetRequest(`https://api.spotify.com/v1/audio-features/${id}`)
    return songAnalysis
}

export const getRecentlyPlayedTracks = async () => {
    const recentlyPlayed = await spotifyGetRequest(`https://api.spotify.com/v1/me/player/recently-played`)
    return recentlyPlayed.items
}

export const getSongAnalysisArray = async (arr) => {
    let resultArr = []
    for (let i = 0; i < arr.length; i++){
        const data = await getSongAnalysis(arr[i].track.id)
        data.name = arr[i].track.name
        data.album = arr[i].track.album.name
        data.artist = arr[i].track.artists[0].name
        data.imageURL = arr[i].track.album.images[1].url
        data.playedAt = arr[i].played_at
        resultArr.push(data)
    };
    return resultArr
}
