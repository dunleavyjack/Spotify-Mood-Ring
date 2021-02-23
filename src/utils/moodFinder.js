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
    const acousticnessDifference = getAcousticnessDifference(acousticness)

    // Add name property to later identify the object
    valenceDifference.name = "valence"
    energyDifference.name = "energy"
    danceabilityDifference.name = "danceability"
    acousticnessDifference.name = "acousticness"

    // Sort differences to find the highest
    const differenceArray = [
        valenceDifference,
        energyDifference,
        danceabilityDifference,
        acousticnessDifference
    ].sort((a, b) => parseFloat(b.difference) - parseFloat(a.difference));

    // Get two moods with highest percent difference
    const firstMood = differenceArray[0]
    const secondMood = differenceArray[1]
    // console.log("combined moods below")
    // const combinedTopMoods = [firstMood, secondMood]
    // console.log(combinedTopMoods[0].mood[0])
    const topMoodsOnly = [firstMood.mood, secondMood.mood]
    const result = evaluateMood(topMoodsOnly)
    const conjuction = getConjuction(topMoodsOnly)

    const resultArray = {
        name: result,
        conjuction,
        firstMood,
        secondMood,
    }
    console.log("RESULT ARRAY BELOW")
    console.log(resultArray)
    return resultArray
}


const evaluateMood = moodNames => {
    console.log("function is getting")
    console.log(moodNames)
    // Matching: Higher + Lower (Valence)
    if (moodNames.includes("more-happiness") && moodNames.includes("lower-acousticness")) {
        return "a little blue"
    } else if (moodNames.includes("more-happiness") && moodNames.includes("lower-danceability")) {
        return "a little blue"
    } else if (moodNames.includes("more-happiness") && moodNames.includes("lower-energy")) {
        return "a little blue"

        // Matching: Higher + Lower (Danceability)
    } else if (moodNames.includes("higher-danceability") && moodNames.includes("less-happiness")) {
        return "a little blue"
    } else if (moodNames.includes("higher-danceability") && moodNames.includes("lower-acousticness")) {
        return "a little blue"
    } else if (moodNames.includes("higher-danceability") && moodNames.includes("lower-energy")) {
        return "a little blue"

        // Matching: Higher + Lower (Energy)
    } else if (moodNames.includes("higher-energy") && moodNames.includes("less-happiness")) {
        return "moody"
    } else if (moodNames.includes("higher-energy") && moodNames.includes("lower-danceability")) {
        return "moody"
    } else if (moodNames.includes("higher-energy") && moodNames.includes("lower-acousticness")) {
        return "moody"

        // Matching: Higher + Lower (Acousticness)
    } else if (moodNames.includes("higher-acousticness") && moodNames.includes("less-happiness")) {
        return "sentimental"
    } else if (moodNames.includes("higher-acousticness") && moodNames.includes("lower-danceability")) {
        return "sentimental"
    } else if (moodNames.includes("higher-acousticness") && moodNames.includes("lower-energy")) {
        return "sentimental"

        // Matching: Higher + Higher (All)
    } else if (moodNames.includes("higher-acousticness") && moodNames.includes("more-happiness")) {
        return "sentimental"
    } else if (moodNames.includes("higher-acousticness") && moodNames.includes("higher-danceability")) {
        return "sentimental"
    } else if (moodNames.includes("higher-acousticness") && moodNames.includes("higher-energy")) {
        return "sentimental"
    } else if (moodNames.includes("more-happiness") && moodNames.includes("higher-danceability")) {
        return "sentimental"
    } else if (moodNames.includes("more-happiness") && moodNames.includes("higher-energy")) {
        return "sentimental"
    } else if (moodNames.includes("higher-danceability") && moodNames.includes("higher-energy")) {
        return "sentimental"

        // Matching: Lower + Lower (All)
    } else if (moodNames.includes("lower-acousticness") && moodNames.includes("less-happiness")) {
        return "sentimental"
    } else if (moodNames.includes("lower-acousticness") && moodNames.includes("lower-danceability")) {
        return "sentimental"
    } else if (moodNames.includes("lower-acousticness") && moodNames.includes("lower-energy")) {
        return "sentimental"
    } else if (moodNames.includes("less-happiness") && moodNames.includes("lower-danceability")) {
        return "sentimental"
    } else if (moodNames.includes("less-happiness") && moodNames.includes("lower-energy")) {
        return "sentimental"
    } else if (moodNames.includes("lower-danceability") && moodNames.includes("lower-energy")) {
        return "sentimental"
    }
}

const getValenceDifference = valenceScore => {
    const result = percentDifference(valenceScore, avgValence, maxValence)
    result.name = "valence"
    if (result.aboveAvg === true) {
        result.mood = "more-happiness"
    }
    else {
        result.mood = "less-happiness"
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

const getAcousticnessDifference = acousticnessScore => {
    const result = percentDifference(acousticnessScore, avgAcousticness, maxAcousticness)
    result.name = "acousticness"
    if (result.aboveAvg === true) {
        result.mood = "higher-acousticness"
    }
    else {
        result.mood = "lower-acousticness"
    }
    return result
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

// Get the conjuction

const getConjuction = (moodArr) => {
    if((moodArr[0].includes("less") || moodArr[0].includes("lower")) && (moodArr[1].includes("more") || moodArr[1].includes("higher"))){
        return "but"
    } else if ((moodArr[0].includes("more") || moodArr[0].includes("higher")) && (moodArr[1].includes("less") || moodArr[1].includes("lower"))){
        return "but"
    } else {
        return "and"
    }
}



    // if (moodNames.includes("higher-danceability") && moodNames.includes("higher-energy")) {
    //     return "expressive" // Expressive
    // } else if (moodNames.includes("higher-danceability") && moodNames.includes("lower-energy")) {
    //     return "confused" // confused/unhinged/disoriented
    // } else if (moodNames.includes("higher-danceability") && moodNames.includes("higher-valence")) {
    //     return "electric" // Electric
    // } else if (moodNames.includes("higher-danceability") && moodNames.includes("lower-valence")) {
    //     return "a little blue" // a little blue
    // } else if (moodNames.includes("lower-danceability") && moodNames.includes("higher-energy")) {
    //     return "disoriented" // confused/unhinged/disoriented
    // } else if (moodNames.includes("lower-danceability") && moodNames.includes("less-energy")) {
    //     return "a bit lethargic" // lethargic
    // } else if (moodNames.includes("lower-danceability") && moodNames.includes("higher-valence")) {
    //     return "carefree" // carefree
    // } else if (moodNames.includes("lower-danceability") && moodNames.includes("higher-valence")) {
    //     return "melancholic" // melancholic
    // } else if (moodNames.includes("higher-energy") && moodNames.includes("higher-valence")) {
    //     return "expressive" 
    // } else if (moodNames.includes("higher-energy") && moodNames.includes("lower-valence")) {
    //     return "moody" 
    // } else if (moodNames.includes("lower-energy") && moodNames.includes("lower-valence")) {
    //     return "gloomy" 
    // } else if (moodNames.includes("lower-danceability") && moodNames.includes("lower-valence")) {
    //     return "melancholic"