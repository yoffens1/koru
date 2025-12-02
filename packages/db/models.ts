import { Model } from '@nozbe/watermelondb'
import { field, date, text, children } from '@nozbe/watermelondb/decorators'

export class Note extends Model {
  static table = 'notes'

  @text('title') title!: string
  @text('content') content!: string
  @date('created_at') createdAt!: number
  @date('updated_at') updatedAt!: number

  @children('flashcards') flashcards: any
}

export class Flashcard extends Model {
  static table = 'flashcards'

  @text('front') front!: string
  @text('back') back!: string
  @field('note_id') noteId!: string
  @field('interval') interval!: number
  @field('repetition') repetition!: number
  @field('ease_factor') easeFactor!: number
  @date('next_review_at') nextReviewAt!: number
}
