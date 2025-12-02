import { IAIService } from '@koru/core/interfaces/IAIService'

export class OpenAIService implements IAIService {
  private apiKey: string

  constructor(apiKey: string) {
    this.apiKey = apiKey
  }

  async summarizeText(text: string): Promise<string> {
    // Mock implementation for MVP
    console.log('Summarizing via OpenAI...', text)
    return `Summary of: ${text.substring(0, 20)}...`
  }

  async generateFlashcards(text: string): Promise<Array<{ front: string; back: string }>> {
    // Mock implementation
    return [
      { front: 'What is this note about?', back: 'It is about ' + text.substring(0, 10) }
    ]
  }
}
