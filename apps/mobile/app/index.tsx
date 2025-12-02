import React from 'react'
import { HomeScreen } from '@koru/feature-notes'
import { database } from '../database'
import { useRouter } from 'expo-router'

export default function Page() {
  const router = useRouter()

  return (
    <HomeScreen 
      database={database} 
      onStudyPress={() => router.push('/review')}
      onNotePress={(id) => router.push(`/note/${id}`)}
    />
  )
}
