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





// Get Average
export const getAverage = arr => {
    let reducer = (total, currentValue) => total + currentValue;
    let sum = arr.reduce(reducer)
    return sum / arr.length;
}

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
    const valenceDifference = getValenceDifference(valence)
    const energyDifference = getEnergyDifference(energy)
    const danceabilityDifference = getDanceabilityDifference(danceability)

    // Add name property to later identify the object
    valenceDifference.name = "valence"
    energyDifference.name = "energy"
    danceabilityDifference.name = "danceability"

    // Sort differences to find the highest
    const differenceArray = [
        valenceDifference,
        energyDifference,
        danceabilityDifference,
    ].sort((a, b) => parseFloat(b.difference) - parseFloat(a.difference));

    // Get two moods with highest percent difference
    const firstMood = differenceArray[0]
    const secondMood = differenceArray[1]
    console.log("combined moods below")
    const combinedTopMoods = [firstMood, secondMood]
    console.log(combinedTopMoods)

    const topMoodsOnly = [firstMood.mood, secondMood.mood]
    const result = evaluateMood(combinedTopMoods.map(song => song.mood))
    console.log('result below')
    console.log(result)

    const resultArray = {
        name: result,
        firstMood,
        secondMood,
    }
    
    return resultArray
}

const getValenceDifference = valenceScore => {
    const result = percentDifference(valenceScore, avgValence, maxValence)
    result.name = "valence"
    if (result.aboveAvg === true) {
        result.mood = "lower valence"
    }
    else {
        result.mood = "higher valence"
    }
    return result
}

const getEnergyDifference = energyScore => {
    const result = percentDifference(energyScore, avgEnergy, maxEnergy)
    result.name = "energy"
    if (result.aboveAvg === true) {
        result.mood = "higher energy"
    }
    else {
        result.mood = "lower energy"
    }
    return result
}

const getDanceabilityDifference = danceabilityScore => {
    const result = percentDifference(danceabilityScore, avgDanceability, maxDanceability)
    result.name = "danceability"
    if (result.aboveAvg === true) {
        result.mood = "higher danceablity"
    }
    else {
        result.mood = "lower danceablilty"
    }
    return result
}

export const evaluateMood = topMoods => {
    if (topMoods.includes("higher danceablility") && topMoods.includes("higher energy")) {
        return "dance/energy" // Expressive
    } else if (topMoods.includes("higher danceablility") && topMoods.includes("lower energy")) {
        return "dance/no-energy" // 
    } else if (topMoods.includes("higher danceablility") && topMoods.includes("higher valence")){
        return "dance/happy" // Electric
    } else if (topMoods.includes("higher danceability") && topMoods.includes("lower valence")){
        return "dance/not-happy"
    } else if (topMoods.includes("lower danceablility") && topMoods.includes("higher energy")) {
        return "no-dance/energy"
    } else if (topMoods.includes("lower danceablility") && topMoods.includes("less energy")) {
        return "no-dance/no-energy"
    } else if (topMoods.includes("lower danceablility") && topMoods.includes("higher valence")){
        return "no-dance/happy"
    } else if (topMoods.includes("lower danceablility") && topMoods.includes("higher valence")){
        return "no-dance/not-happy"
    } else if (topMoods.includes("higher energy") && topMoods.includes("higher valence")){
        return "energy/happy"
    } else if (topMoods.includes("higher energy") && topMoods.includes("lower valence")){
        return "energy/not-happy" // Angry
    } else if (topMoods.includes("lower energy") && topMoods.includes("lower valence")){
        return "no-energy/not-happy"
    }
}

// Percent Difference
const percentDifference = (value, avgValue, maxValue) => {
    if (value > avgValue) {
        const difference = (value - avgValue) / (maxValue - avgValue) * 100
        return {
            difference,
            aboveAvg: true,
        }
    }
    if (value < avgValue) {
        const difference = (avgValue - value) / (maxValue - avgValue) * 100
        return {
            difference,
            aboveAvg: false
        }
    }
}