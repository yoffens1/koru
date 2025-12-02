import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { FlashcardService } from '../services/flashcardService';
import { CreateFlashcardDTO, Grade } from '../types';

export const useDueFlashcards = () => {
  return useQuery({
    queryKey: ['flashcards', 'due'],
    queryFn: FlashcardService.getDueFlashcards,
  });
};

export const useFlashcardsByNote = (noteId: string) => {
  return useQuery({
    queryKey: ['flashcards', 'note', noteId],
    queryFn: () => FlashcardService.getFlashcardsByNote(noteId),
    enabled: !!noteId,
  });
};

export const useCreateFlashcard = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: CreateFlashcardDTO) => FlashcardService.createFlashcard(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['flashcards'] });
    },
  });
};

export const useReviewFlashcard = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, grade }: { id: string; grade: Grade }) => FlashcardService.reviewFlashcard(id, grade),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['flashcards'] });
    },
  });
};
