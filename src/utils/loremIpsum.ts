import { LoremIpsum } from 'lorem-ipsum';

export const generateLorem = (n: number) => {
  const lorem = new LoremIpsum({
    sentencesPerParagraph: {
      max: 4,
      min: 2
    },
    wordsPerSentence: {
      max: 8,
      min: 4
    }
  });

  return lorem.generateParagraphs(n);
};
