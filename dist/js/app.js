webpackJsonp([0],[
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(1);

var _chords = __webpack_require__(2);

var _chords2 = _interopRequireDefault(_chords);

var _painter = __webpack_require__(3);

var _painter2 = _interopRequireDefault(_painter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
  padding: {
    md: 20,
    sm: 12
  },
  text: {
    size: {
      hg: 56,
      lg: 36,
      md: 24,
      sm: 14
    }
  }
};

var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');

_painter2.default.register(canvas, {
  padding: styles.padding.md,
  fingerSize: 24
});

function paint(chord) {
  (0, _painter.repaint)();
  (0, _painter.background)('white');
  (0, _painter.spaces)();
  (0, _painter.strings)();
  (0, _painter.fingers)(chord);
}

var CChords = _chords.dictionary.C;

// TODO: animated
// TODO: change positions to fingerShape
paint(CChords['C']);

var cChords = document.querySelector('.c-chords');
cChords.addEventListener('change', function () {
  paint(CChords[this.value]);
});

function addLines(chord) {
  var c = document.createElement('canvas');
  c.width = 100;
  c.height = 160;
  _painter2.default.register(c, {
    padding: 10,
    fingerSize: 6
  });
  paint(chord);
  document.body.appendChild(c);
}

// addLines(CChords.Dm)
// addLines(CChords.Em)
// addLines(CChords.F)
// addLines(CChords.G)
// addLines(CChords.Am)
// addLines(CChords.Bmb7)

/***/ }),
/* 1 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var all = {
  'A': {
    root: 2,
    fingerShape: [{ x: 3, y: 2 }, { x: 4, y: 2 }, { x: 5, y: 2 }],
    from: 1,
    to: 3
  },
  'Am': {
    root: 2,
    fingerShape: [{ x: 5, y: 1 }, { x: 4, y: 2 }, { x: 3, y: 2 }],
    from: 1,
    to: 3
  }
};

var levels = {
  C: {
    color: '#f00',
    chords: []
  }
};

var dictionary = exports.dictionary = {
  'C': {
    'C': {
      name: 'C',
      fingerShape: [{ color: '#f00', x: 5, y: 1 }, { color: '#f00', x: 3, y: 2 }, { color: '#f00', x: 2, y: 3 }]
    },
    'Dm': {
      name: 'Dm',
      fingerShape: [{ color: '#19953b', x: 6, y: 1 }, { color: '#19953b', x: 4, y: 2 }, { color: '#19953b', x: 5, y: 3 }]
    },
    'Em': {
      name: 'Em',
      fingerShape: [{ color: '#aa8735', x: 2, y: 2 }, { color: '#aa8735', x: 3, y: 2 }]
    },
    'F': {
      name: 'F',
      fingerShape: [{ color: '#c90f58', x: 1, y: 1 }, { color: '#c90f58', x: 2, y: 1 }, { color: '#c90f58', x: 3, y: 1 }, { color: '#c90f58', x: 4, y: 1 }, { color: '#c90f58', x: 5, y: 1 }, { color: '#c90f58', x: 6, y: 1 }, { color: '#c90f58', x: 4, y: 2 }, { color: '#c90f58', x: 2, y: 3 }, { color: '#c90f58', x: 3, y: 3 }]
    },
    'G': {
      name: 'G',
      fingerShape: [{ color: '#4365cd', x: 2, y: 2 }, { color: '#4365cd', x: 1, y: 3 }, { color: '#4365cd', x: 6, y: 3 }]
    },
    'Am': {
      name: 'Am',
      fingerShape: [{ color: '#d9712f', x: 5, y: 1 }, { color: '#d9712f', x: 4, y: 2 }, { color: '#d9712f', x: 3, y: 2 }]
    },
    'Bmb7': {
      name: 'Bmb7',
      fingerShape: [{ color: '#4bbe98', x: 2, y: 2 }, { color: '#4bbe98', x: 4, y: 2 }, { color: '#4bbe98', x: 3, y: 3 }, { color: '#4bbe98', x: 5, y: 3 }]
    }
  },
  'D': {},
  'E': {}
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.register = register;
exports.background = background;
exports.repaint = repaint;
exports.circle = circle;
exports.fingers = fingers;
exports.title = title;
exports.strings = strings;
exports.spaces = spaces;
var cvs = null;
var ctx = null;
var _config = {};

function checkCvs() {
  if (!cvs) throw new Error('you should register canvas first');
}

function register(canvas, cfg) {
  cvs = canvas;
  ctx = cvs.getContext('2d');
  _config = cfg;
  _config.contentWidth = cvs.width - cfg.padding * 2;
  _config.contentHeight = cvs.height - cfg.padding * 2;
  _config.hor = _config.contentWidth / 5;
  _config.ver = _config.contentHeight / 3;
}

function initConfig(cfg) {}

function background(bg) {
  checkCvs();
  ctx.fillStyle = bg;
  ctx.fillRect(0, 0, cvs.width, cvs.height);
}

function repaint() {
  checkCvs();
  ctx.clearRect(0, 0, cvs.width, cvs.height);
}

function circle(x, y, r) {
  checkCvs();
  ctx.beginPath();
  ctx.arc(x, y, r, 0, 2 * Math.PI);
  ctx.fill();
}

function fingers(chord) {
  checkCvs();
  var fingerShape = chord.fingerShape;
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = fingerShape[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var pos = _step.value;

      ctx.fillStyle = pos.color;
      circle(_config.padding + (pos.x - 1) * _config.hor, _config.padding + (pos.y - 1) * _config.ver + _config.ver / 5 * 4, _config.fingerSize / 2);
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  title(chord.name);
}

function title(title) {
  checkCvs();
  ctx.font = '56px Menlo';
  ctx.textBaseline = 'top';
  var textWidth = ctx.measureText(title).width;
  ctx.fillText(title, (cvs.width - textWidth) / 2, 0);
}

function strings() {
  checkCvs();
  for (var i = 0; i < 6; i++) {
    var x = _config.padding + i * _config.hor;
    ctx.beginPath();
    ctx.moveTo(x, _config.padding);
    ctx.lineTo(x, _config.contentHeight + _config.padding);
    ctx.stroke();
  }
}

function spaces() {
  checkCvs();
  for (var i = 0; i < 4; i++) {
    ctx.beginPath();
    ctx.moveTo(_config.padding, _config.ver * i + _config.padding);
    ctx.lineTo(_config.contentWidth + _config.padding, _config.ver * i + _config.padding);
    ctx.stroke();
  }
}

exports.default = {
  register: register
};

/***/ })
],[0]);