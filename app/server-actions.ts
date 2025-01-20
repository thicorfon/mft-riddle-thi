'use server'

import { redirect } from 'next/navigation'

export async function answerLevelOne(answer: string) {
  if (answer.toLowerCase() === 'drive') {
    redirect(`/defend`)
  } else {
    return { valid: false }
  }
}

export async function answerLevelTwo(answer: string) {
  if (answer.toLowerCase() === 'thicorfon') {
    redirect(`/node`)
  } else {
    return { valid: false }
  }
}

export async function answerLevelThree(answer: string) {
  if (answer.toLowerCase() === 'tia_vera') {
    redirect(`/farewell`)
  } else {
    return { valid: false }
  }
}

export async function answerLevelFour(answer: string) {
  if (answer.toLowerCase() === 'romenia') {
    redirect(`/blade`)
  } else {
    return { valid: false }
  }
}

export async function answerLevelFive(answer: string) {
  if (answer.toLowerCase() === 'bohemian_rhapsody') {
    redirect(`/echo`)
  } else {
    return { valid: false }
  }
}

export async function answerLevelSix(answer: string) {
  if (answer.toLowerCase() === 'jundiai') {
    redirect(`/connection`)
  } else {
    return { valid: false }
  }
}

export async function answerLevelSeven(answer: string) {
  if (answer.toLowerCase() === 'sitio_da_bella') {
    redirect(`/redeem`)
  } else {
    return { valid: false }
  }
}

export async function answerLevelEight(answer: string) {
  if (answer.toLowerCase() === 'arctic_monkeys') {
    redirect(`/nivel-final`)
  } else {
    return { valid: false }
  }
}

export async function answerLevelFinal(answer: string) {
  if (answer.toLowerCase() === 'valle_de_la_luna') {
    redirect(`/esse-tambem`)
  } else {
    return { valid: false }
  }
}