// color, root, fingerShape, from to
const all = {
  'A': {
    root: 2,
    fingerShape: [
      { x: 3, y: 2 },
      { x: 4, y: 2 },
      { x: 5, y: 2 }
    ],
    from: 1,
    to: 3
  },
  'Am': {
    root: 2,
    fingerShape: [
      { x: 5, y: 1 },
      { x: 4, y: 2 },
      { x: 3, y: 2 }
    ],
    from: 1,
    to: 3
  }
}

const levels = {
  C: {
    color: '#f00',
    chords: [

    ]
  }
}

export const dictionary = {
  'C': {
    'C': {
      name: 'C',
      from: 1,
      to: 3,
      fingerShape: [
        { color: '#f00', x: 5, y: 1 },
        { color: '#f00', x: 3, y: 2 },
        { color: '#f00', x: 2, y: 3 }
      ],
      root: 2
    },
    'Dm': {
      name: 'Dm',
      fingerShape: [
        { color: '#19953b', x: 6, y: 1 },
        { color: '#19953b', x: 4, y: 2 },
        { color: '#19953b', x: 5, y: 3 },
      ],
      root: 3
    },
    'Em': {
      name: 'Em',
      fingerShape: [
        { color: '#aa8735', x: 2, y: 2 },
        { color: '#aa8735', x: 3, y: 2 }
      ]
    },
    'F': {
      name: 'F',
      fingerShape: [
        { color: '#c90f58', x: 1, y: 1 },
        { color: '#c90f58', x: 2, y: 1 },
        { color: '#c90f58', x: 3, y: 1 },
        { color: '#c90f58', x: 4, y: 1 },
        { color: '#c90f58', x: 5, y: 1 },
        { color: '#c90f58', x: 6, y: 1 },

        { color: '#c90f58', x: 4, y: 2 },
        { color: '#c90f58', x: 2, y: 3 },
        { color: '#c90f58', x: 3, y: 3 }
      ]
    },
    'G': {
      name: 'G',
      fingerShape: [
        { color: '#4365cd', x: 2, y: 2 },
        { color: '#4365cd', x: 1, y: 3 },
        { color: '#4365cd', x: 6, y: 3 }
      ]
    },
    'Am': {
      name: 'Am',
      fingerShape: [
        { color: '#d9712f', x: 5, y: 1 },
        { color: '#d9712f', x: 4, y: 2 },
        { color: '#d9712f', x: 3, y: 2 },
      ]
    },
    'Bm7-5': {
      name: 'Bm7-5',
      fingerShape: [
        { color: '#4bbe98', x: 2, y: 2 },
        { color: '#4bbe98', x: 4, y: 2 },
        { color: '#4bbe98', x: 3, y: 3 },
        { color: '#4bbe98', x: 5, y: 3 },
      ]
    }
  },
  'D': {},
  'E': {}
}
