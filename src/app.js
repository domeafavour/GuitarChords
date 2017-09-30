import './styles/app.less'
import chords, {dictionary} from './chords'
import ChordView from './ChordView'

let canvas  = document.getElementById('canvas')

let chordView = new ChordView(canvas, dictionary.C.C)

let chordName = document.querySelector('.chord-name')
document.querySelector('.c-chords')
.addEventListener('change', function () {
  chordView.setChord(dictionary.C[this.value])
  chordName.innerText = this.value
})
