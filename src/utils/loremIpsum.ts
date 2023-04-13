import { LoremIpsum } from 'lorem-ipsum';

export const generateLorem = (n: number) => {
  const lorem = new LoremIpsum({
    sentencesPerParagraph: {
      max: 4,
      min: 1
    },
    wordsPerSentence: {
      max: 18,
      min: 2
    }
  });

  return lorem.generateParagraphs(n);
};
