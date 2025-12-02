import React from 'react'
import { NoteEditor } from '@koru/feature-notes'
import { useRouter, useLocalSearchParams } from 'expo-router'

export default function NotePage() {
  const router = useRouter()
  const { id } = useLocalSearchParams()

  return (
    <NoteEditor 
      onBack={() => router.back()} 
      onSave={() => router.back()}
    />
  )
}
