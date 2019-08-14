const TIMETOUT = 50

export default function waitTransition(callback) {
  setTimeout(callback, TIMETOUT)
}
