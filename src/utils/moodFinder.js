export const getAverage = (songs) => {
    const averageDanceability = songs.reduce((a, b) => {
        return {danceability: a.danceability + b.danceability}
    }).danceability / songs.length
    return averageDanceability
}