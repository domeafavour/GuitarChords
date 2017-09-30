import {
  circle,
  line,
  clear,
  background,
  text,
  textWidth
} from './utils/painter'

const DEFAULTS = {
  color: '#4365cd',
  fingerSize: 24,
  background: 'white',
  strings: 6
}

export default class ChordView {

  constructor (canvas, chord) {
    this.canvas  = canvas
    this.context = this.canvas.getContext('2d')
    this.chord   = chord
    this.initialize()
    this.paint()
  }

  initialize () {
    // width / height == 2 / 3
    // ver-padding: height / 15
    // hor-padding: (canvas.width - width) / 2
    // strings: strings || 6
    // spaces: ((to || 3） - （from || 1）) + 1
    let verPadding = this.canvas.height / 15
    let height     = this.canvas.height - verPadding * 2
    let width      = height / 3 * 2
    let horPadding = (this.canvas.width - width) / 2
    // default: from 1 to 3
    let spaces     = ((this.chord.to || 3) - (this.chord.from || 1)) + 1
    this.config    = {
      width, height, verPadding, horPadding, spaces
    }
    Object.assign(this.config, DEFAULTS)
    // console.log(this.config)
  }

  setChord (chord) {
    this.chord = chord
    this.repaint()
  }

  paint () {
    //* background
    background(this.canvas, this.config.background)
    //* spaces
    let ver = this.config.height / this.config.spaces
    for (let i = 0; i <= this.config.spaces; i ++) {
      let fromTop = this.config.verPadding + ver * i
      line(
        this.context,
        this.config.horPadding,
        fromTop,
        this.config.width + this.config.horPadding,
        fromTop
      )
    }

    //* strings
    let hor = this.config.width / (this.config.strings - 1)
    for (let i = 0; i < this.config.strings; i ++) {
      let fromLeft = this.config.horPadding + i * hor
      line(
        this.context,
        fromLeft,
        this.config.verPadding,
        fromLeft,
        this.config.height + this.config.verPadding
      )
      //* 不弹的弦
      if (this.chord.root && this.chord.root - 1 > i) {
        let tw = textWidth(this.context, '×')
        text(
          this.context,
          '×',
          this.config.horPadding + hor * i - tw / 2,
          this.config.verPadding - 20,
          '#000'
        )
      }
    }
    //* fingers
    this.context.fillStyle = this.chord.color || this.config.color
    for (let pos of this.chord.fingerShape) {
      circle(
        this.context,
        this.config.horPadding + (pos.x - 1) * hor,
        this.config.verPadding + (pos.y - 1) * ver + ver / 5 * 4,
        this.config.fingerSize / 2
      )
    }
    // 不从一品开始的情况
    let fromSpace = this.chord.from
    if (fromSpace && fromSpace !== 1) {
      let tw = textWidth(this.context, fromSpace)
      text(
        this.context,
        fromSpace,
        (this.config.horPadding - tw) / 2,
        this.config.verPadding + ver / 2
      )
    }
  }

  repaint () {
    clear(this.context, 0, 0, this.canvas.width, this.canvas.height)
    this.paint()
  }
}
