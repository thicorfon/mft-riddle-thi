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
    redirect(`/o-hash-fica-pra-dps`)
  } else {
    return { valid: false }
  }
}

export async function answerLevelThree(answer: string) {
  if (answer.toLowerCase() === 'tia_vera') {
    redirect(`/esse-tambem`)
  } else {
    return { valid: false }
  }
}