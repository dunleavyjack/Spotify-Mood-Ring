// Average Mood Levels
const avgDanceability = 0.5
const avgAcousticness = 0.5
const avgEnergy = 0.5
const avgInstrumentalness = 0.5
const avgLoudness = -30
const avgSpeechiness = 1
const avgTempo = 1
const avgValence = 0.5

// Mood Guesser
export const calculateMood = ({
    danceability,
    acousticness,
    energy,
    instrumentalness,
    loudness,
    speechiness,
    tempo,
    valence
}) => {
    console.log(valence)
    console.log(avgTempo)
    if (valence > avgValence){
        return "Happy"
    } else {
        return "Kinda Blue"
    }
}

// Get Average
export const getAverage = arr => {
    let reducer = (total, currentValue) => total + currentValue;
    let sum = arr.reduce(reducer)
    return sum / arr.length;
}
