import './styles/app.less'
import chords, {dictionary} from './chords'
import painter, {
  background,
  repaint,
  circle,
  title,
  fingers,
  strings,
  spaces
} from './utils/painter'

const styles = {
  padding: {
    md: 20,
    sm: 12,
  },
  text: {
    size: {
      hg: 56,
      lg: 36,
      md: 24,
      sm: 14
    }
  }
}

let canvas  = document.getElementById('canvas')
let context = canvas.getContext('2d')

painter.register(canvas, {
  padding: styles.padding.md,
  fingerSize: 24
})

function paint (chord) {
  repaint()
  background('white')
  spaces()
  strings()
  fingers(chord)
}

const CChords = dictionary.C

// TODO: animated
// TODO: change positions to fingerShape
paint(CChords['C'])

let cChords = document.querySelector('.c-chords')
cChords.addEventListener('change', function () {
  paint(CChords[this.value])
})

function addLines (chord) {
  let c = document.createElement('canvas')
  c.width = 100
  c.height = 160
  painter.register(c, {
    padding: 10,
    fingerSize: 6
  })
  paint(chord)
  document.body.appendChild(c)
}

// addLines(CChords.Dm)
// addLines(CChords.Em)
// addLines(CChords.F)
// addLines(CChords.G)
// addLines(CChords.Am)
// addLines(CChords.Bmb7)
