export interface AIService {
    /**
     * Analyzes text and returns a summary or key points.
     */
    summarize(text: string): Promise<string>;
    /**
     * Generates flashcards from a given text block.
     */
    generateFlashcards(text: string): Promise<Array<{
        front: string;
        back: string;
    }>>;
    /**
     * Suggests tags for a note based on its content.
     */
    suggestTags(content: string): Promise<string[]>;
}
export interface AICompletionOptions {
    model?: string;
    temperature?: number;
}
//# sourceMappingURL=AIService.d.ts.map