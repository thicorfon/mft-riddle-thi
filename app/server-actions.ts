'use server'

import { redirect } from 'next/navigation'

export async function answerLevelOne(answer: string) {
  if (answer.toLowerCase() === 'drive') {
    redirect(`/esse-nome-precisa-ser-um-hash`)
  } else {
    return { valid: false }
  }
}

export async function answerLevelTwo(answer: string) {
  if (answer.toLowerCase() === 'thicorfon') {
    redirect(`/esse-tambem`)
  } else {
    return { valid: false }
  }
}