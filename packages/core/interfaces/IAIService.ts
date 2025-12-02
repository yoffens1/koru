export interface IAIService {
  summarizeText(text: string): Promise<string>;
  generateFlashcards(text: string): Promise<Array<{ front: string; back: string }>>;
}
