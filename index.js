const tutorials = [
  'what does the this keyword mean?',
  'What is the Contutorialuctor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  // Source code
  // return tutorials

  //////////////// My solution
  let capitalizedTutorials = []
  tutorials.map(sentence => {
      console.log(sentence)
      const splitSentence = sentence.split(" ")
      let capitalizedSentence = ""

      splitSentence.map(word => {
        capitalizedFirstLetter = word[0].toUpperCase()
        const capitalizedWord = capitalizedFirstLetter + word.slice(1)
        capitalizedSentence = capitalizedSentence + capitalizedWord + " "
        // console.log(capitalizedWord)
        // return capitalizedWord
      })

      capitalizedSentence = capitalizedSentence.slice(0, -1)
      capitalizedTutorials.push(capitalizedSentence)
      console.log(capitalizedSentence)
    }
  )

  console.log(capitalizedTutorials)
  return capitalizedTutorials
}

titleCased()
