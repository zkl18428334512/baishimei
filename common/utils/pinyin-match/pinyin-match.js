import PinyinMatch from './lib/main.js'

export function pinyinMatch(input, keyword) {
  return PinyinMatch.match(input, keyword)
}
