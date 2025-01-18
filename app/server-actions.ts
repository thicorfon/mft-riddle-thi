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
    redirect(`/nivel-quatro`)
  } else {
    return { valid: false }
  }
}

export async function answerLevelFour(answer: string) {
  if (answer.toLowerCase() === 'romenia') {
    redirect(`/nivel-5`)
  } else {
    return { valid: false }
  }
}

export async function answerLevelFive(answer: string) {
  if (answer.toLowerCase() === 'bohemian_rhapsody') {
    redirect(`/nivel-6`)
  } else {
    return { valid: false }
  }
}

export async function answerLevelSix(answer: string) {
  if (answer.toLowerCase() === 'sitio_da_bella') {
    redirect(`/esse-tambem`)
  } else {
    return { valid: false }
  }
}