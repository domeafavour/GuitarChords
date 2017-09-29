import painter, {
  repaint,
  background,
  spaces,
  strings,
  fingers
} from './utils/painter'

export default class ChordView {

  constructor (canvas, chord) {
    this.canvas = canvas
    // this.context = this.canvas.getContext('2d')
    this.chord = chord
    this.inititialize()
    this.paint()
  }

  inititialize () {
    // width / height == 2 / 3
    // ver-padding = height / 15
    // hor-padding = (canvas.width - width) / 2
    // origin = [hor-padding, ver-padding]
    let verPadding = canvas.height / 15
    let height     = canvas.height - verPadding * 2
    let width      = height / 3 * 2
    let horPadding = (canvas.width - width) / 2
    this.config    = {
      width, height, verPadding, horPadding
    }
    console.log(this.config)
    painter.register(this.canvas, this.config)
  }

  setChord (chord) {
    this.chord = chord
    this.repaint()
  }

  paint () {
    repaint()
    background('white')
    spaces()
    strings()
    fingers(this.chord)
  }

  clear () {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
  }

  repaint () {
    this.clear()
    this.paint()
  }
}
