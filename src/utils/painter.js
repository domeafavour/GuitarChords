
export function circle (ctx, x, y, r) {
  ctx.beginPath();
  ctx.arc(x, y, r, 0, 2 * Math.PI);
  ctx.fill();
}

export function line (ctx, x1, y1, x2, y2) {
  ctx.beginPath()
  ctx.moveTo(x1, y1)
  ctx.lineTo(x2, y2)
  ctx.stroke()
}

export function clear (ctx, x, y, width, height) {
  ctx.clearRect(x, y, width, height)
}

export function background (canvas, bg) {
  let ctx = canvas.getContext('2d')
  ctx.fillStyle = bg
  ctx.fillRect(0, 0, canvas.width, canvas.height)
}

export function text (ctx, text, x, y, color) {
  ctx.font = '16px Menlo'
  ctx.textBaseline = 'top'
  if (color) {
    ctx.fillStyle = color
  }
  ctx.fillText(text, x, y)
}

export function textWidth (ctx, text) {
  return ctx.measureText(text).width
}
