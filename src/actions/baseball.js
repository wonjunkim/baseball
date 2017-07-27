export const REGISTER_NUMBER = 'REGISTER_NUMBER';

export function registerNumber(gameNumber) {
  return {
    type: REGISTER_NUMBER,
    gameNumber
  }
}
