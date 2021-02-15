// // Old version
// export const getAverage = (songs) => {
//     const averageDanceability = songs.reduce((a, b) => {
//         return {danceability: a.danceability + b.danceability}
//     }).danceability / songs.length
//     return averageDanceability
// }

// Get Average
export const getAverage = arr => {
    let reducer = (total, currentValue) => total + currentValue;
    let sum = arr.reduce(reducer)
    return sum / arr.length;
}