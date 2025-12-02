import React from 'react'
import { ReviewScreen } from '@koru/feature-flashcards'
import { useRouter } from 'expo-router'

export default function ReviewPage() {
  const router = useRouter()

  return (
    <ReviewScreen 
      onBack={() => router.back()} 
    />
  )
}
