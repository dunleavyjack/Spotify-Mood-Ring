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
export const calculateMood = songs => {
    const danceability = getAverage(songs.map(song => song.danceability))
    const acousticness = getAverage(songs.map(song => song.acousticness))
    const energy = getAverage(songs.map(song => song.energy))
    const instrumentalness = getAverage(songs.map(song => song.instrumentalness))
    const key = getAverage(songs.map(song => song.key))
    const liveness = getAverage(songs.map(song => song.liveness))
    const loudness = getAverage(songs.map(song => song.loudness))
    const mode = getAverage(songs.map(song => song.mode))
    const speechiness = getAverage(songs.map(song => song.speechiness))
    const tempo = getAverage(songs.map(song => song.tempo))
    const valence = getAverage(songs.map(song => song.valence))
    
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
    const result = evaluateMood(topMoodsOnly)

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
        result.mood = "higher-valence"
    }
    else {
        result.mood = "lower-valence"
    }
    return result
}

const getEnergyDifference = energyScore => {
    const result = percentDifference(energyScore, avgEnergy, maxEnergy)
    result.name = "energy"
    if (result.aboveAvg === true) {
        result.mood = "higher-energy"
    }
    else {
        result.mood = "lower-energy"
    }
    return result
}

const getDanceabilityDifference = danceabilityScore => {
    const result = percentDifference(danceabilityScore, avgDanceability, maxDanceability)
    result.name = "danceability"
    if (result.aboveAvg === true) {
        result.mood = "higher-danceability"
    }
    else {
        result.mood = "lower-danceability"
    }
    return result
}

const evaluateMood = moodNames => {
    console.log("function is getting")
    console.log(moodNames)
    if (moodNames.includes("higher-danceability") && moodNames.includes("higher-energy")) {
        return "expressive" // Expressive
    } else if (moodNames.includes("higher-danceability") && moodNames.includes("lower-energy")) {
        return "confused" // confused/unhinged/disoriented
    } else if (moodNames.includes("higher-danceability") && moodNames.includes("higher-valence")) {
        return "electric" // Electric
    } else if (moodNames.includes("higher-danceability") && moodNames.includes("lower-valence")) {
        return "a little blue" // a little blue
    } else if (moodNames.includes("lower-danceability") && moodNames.includes("higher-energy")) {
        return "disoriented" // confused/unhinged/disoriented
    } else if (moodNames.includes("lower-danceability") && moodNames.includes("less-energy")) {
        return "a bit lethargic" // lethargic
    } else if (moodNames.includes("lower-danceability") && moodNames.includes("higher-valence")) {
        return "carefree" // carefree
    } else if (moodNames.includes("lower-danceability") && moodNames.includes("higher-valence")) {
        return "melancholic" // melancholic
    } else if (moodNames.includes("higher-energy") && moodNames.includes("higher-valence")) {
        return "expressive" // Expressive
    } else if (moodNames.includes("higher-energy") && moodNames.includes("lower-valence")) {
        return "moody" // Angry/antagonistic
    } else if (moodNames.includes("lower-energy") && moodNames.includes("lower-valence")) {
        return "gloomy" // gloomy
    } else if (moodNames.includes("lower-danceability") && moodNames.includes("lower-valence")) {
        return "melancholic" // melancholic
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