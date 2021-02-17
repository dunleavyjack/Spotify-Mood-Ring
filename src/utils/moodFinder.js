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

    const resultArray = [...topMoodsOnly, result]
    console.log(resultArray)

    return result
}

const getValenceDifference = valenceScore => {
    const result = percentDifference(valenceScore, avgValence, maxValence)
    result.name = "valence"
    if (result.aboveAvg === true) {
        result.mood = "happy"
    }
    else {
        result.mood = "not happy"
    }
    return result
}

const getEnergyDifference = energyScore => {
    const result = percentDifference(energyScore, avgEnergy, maxEnergy)
    result.name = "energy"
    if (result.aboveAvg === true) {
        result.mood = "energetic"
    }
    else {
        result.mood = "not energetic"
    }
    return result
}

const getDanceabilityDifference = danceabilityScore => {
    const result = percentDifference(danceabilityScore, avgDanceability, maxDanceability)
    result.name = "danceability"
    if (result.aboveAvg === true) {
        result.mood = "danceable"
    }
    else {
        result.mood = "not danceable"
    }
    return result
}

export const evaluateMood = topMoods => {
    if (topMoods.includes("danceable") && topMoods.includes("energetic")) {
        return "dance/energy" // Expressive
    } else if (topMoods.includes("danceable") && topMoods.includes("not energetic")) {
        return "dance/no-energy" // 
    } else if (topMoods.includes("danceable") && topMoods.includes("happy")){
        return "dance/happy" // Electric
    } else if (topMoods.includes("danceable") && topMoods.includes("not happy")){
        return "dance/not-happy"
    } else if (topMoods.includes("not danceable") && topMoods.includes("energetic")) {
        return "no-dance/energy"
    } else if (topMoods.includes("not danceable") && topMoods.includes("not energetic")) {
        return "no-dance/no-energy"
    } else if (topMoods.includes("not danceable") && topMoods.includes("happy")){
        return "no-dance/happy"
    } else if (topMoods.includes("not danceable") && topMoods.includes("not happy")){
        return "no-dance/not-happy"
    } else if (topMoods.includes("energetic") && topMoods.includes("happy")){
        return "energy/happy"
    } else if (topMoods.includes("energetic") && topMoods.includes("not happy")){
        return "energy/not-happy" // Angry
    } else if (topMoods.includes("not energetic") && topMoods.includes("not happy")){
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