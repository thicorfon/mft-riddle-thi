'use server'

import { redirect } from 'next/navigation'

export async function answerLevelOne(answer: string) {
  if (answer.toLowerCase() === 'drive') {
    redirect(`/esse-nome-precisa-ser-um-hash`)
  } else {
    return { valid: false }
  }
}