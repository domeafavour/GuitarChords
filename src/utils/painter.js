let cvs = null
let ctx = null
let _config = {}

function checkCvs () {
  if (!cvs) throw new Error('you should register canvas first')
}

export function register (canvas, cfg) {
  cvs = canvas
  ctx = cvs.getContext('2d')
  _config = cfg
  _config.contentWidth = cvs.width - cfg.padding * 2
  _config.contentHeight = cvs.height - cfg.padding * 2
  _config.hor = _config.contentWidth / 5
  _config.ver = _config.contentHeight / 3
}

function initConfig (cfg) {

}

export function background (bg) {
  checkCvs()
  ctx.fillStyle = bg
  ctx.fillRect(0, 0, cvs.width, cvs.height)
}

export function repaint () {
  checkCvs()
  ctx.clearRect(0, 0, cvs.width, cvs.height)
}

export function circle (x, y, r) {
  checkCvs()
  ctx.beginPath();
  ctx.arc(x, y, r, 0, 2 * Math.PI);
  ctx.fill();
}

export function fingers (chord) {
  checkCvs()
  let { fingerShape } = chord
  for (let pos of fingerShape) {
    ctx.fillStyle = pos.color
    circle(
      _config.padding + (pos.x-1) * _config.hor,
      _config.padding + (pos.y-1) * _config.ver + _config.ver / 5 * 4,
      _config.fingerSize / 2
    )
  }
  title(chord.name)
}

export function title (title) {
  checkCvs()
  ctx.font = '56px Menlo'
  ctx.textBaseline = 'top'
  let textWidth = ctx.measureText(title).width
  ctx.fillText(title, (cvs.width - textWidth) / 2, 0)
}

export function strings () {
  checkCvs()
  for (let i = 0; i < 6; i ++) {
    let x = _config.padding + i * _config.hor
    ctx.beginPath()
    ctx.moveTo(x, _config.padding)
    ctx.lineTo(x, _config.contentHeight + _config.padding)
    ctx.stroke()
  }
}

export function spaces () {
  checkCvs()
  for (let i = 0; i < 4; i ++) {
    ctx.beginPath()
    ctx.moveTo(_config.padding, _config.ver * i + _config.padding)
    ctx.lineTo(_config.contentWidth + _config.padding, _config.ver * i + _config.padding)
    ctx.stroke()
  }
}

export default {
  register
}
