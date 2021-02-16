// Average Mood Levels
const avgDanceability = 0.5
const avgAcousticness = 0.5
const avgEnergy = 0.5
const avgInstrumentalness = 0.5
const avgLoudness = -30
const avgSpeechiness = 0.5
const avgTempo = 0.5
const avgValence = 0.5

// Max Mood Levels
const maxDanceability = 1
const maxAcousticness = 1
const maxEnergy = 1
const maxInstrumentalness = 1
const maxLoudness = -60
const maxSpeechiness = 1
const maxTempo = 1
const maxValence = 1

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
    // Percent difference Object. Ex: {aboveAvg: true/false, value: x}
    const valenceDifference = percentDifference(valence, avgValence, maxValence)
    const energyDifference = percentDifference(energy, avgEnergy, maxEnergy)
    const danceabilityDifference = percentDifference(danceability, avgDanceability, maxDanceability)
    
    // Add name property to later identify the object
    valenceDifference.name = "valence"
    energyDifference.name = "energy"
    danceabilityDifference.name = "danceability"
    
    // Sort differences 
    const differenceArray = [
        valenceDifference,
        energyDifference,
        danceabilityDifference,
    ].sort((a, b) => parseFloat(b.difference) - parseFloat(a.difference));
    console.log(differenceArray)
    
    // Get two moods with highest percent difference
    const firstMood = differenceArray[0]
    const secondMood = differenceArray[1]

    console.log(firstMood)
    console.log(secondMood)

    
    console.log(valenceDifference)
    if (valenceDifference.aboveAvg === true){
        return "Happy"
    } else {
        return "Kinda Blue :'("
    }
}




// Get Average
export const getAverage = arr => {
    let reducer = (total, currentValue) => total + currentValue;
    let sum = arr.reduce(reducer)
    return sum / arr.length;
}

// Percent Difference
const percentDifference = (value, avgValue, maxValue) => {
    if (value > avgValue) {
        const postiveDiff = (value - avgValue) / (maxValue - avgValue) * 100
        return {
            aboveAvg: true,
            difference: postiveDiff
        }
    }
    if (value < avgValue) {
        const negativeDiff = (avgValue - value) / (maxValue - avgValue) * 100
        return {
            aboveAvg: false,
            difference: negativeDiff
        }
    }
}
