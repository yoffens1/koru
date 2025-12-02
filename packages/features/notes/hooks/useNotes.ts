import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { NoteService } from '../services/noteService';
import { CreateNoteDTO, UpdateNoteDTO } from '../types';

export const useNotes = () => {
  return useQuery({
    queryKey: ['notes'],
    queryFn: NoteService.getAllNotes,
  });
};

export const useCreateNote = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: CreateNoteDTO) => NoteService.createNote(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['notes'] });
    },
  });
};

export const useUpdateNote = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: UpdateNoteDTO) => NoteService.updateNote(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['notes'] });
    },
  });
};
