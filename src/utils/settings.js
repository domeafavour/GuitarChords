if (!localStorage) {
  console.warn('Update your browser...')
  return
}
// background
// save
const SETTINGS_NAME = 'chords'
// localStorage.getItem()
class Settings {
  all() {
    return JSON.parse(localStorage.getItem(SETTINGS_NAME) || '{}')
  }
  set(key, value) {
    let settings = all()
    settings[key] = value
    localStorage.setItem(SETTINGS_NAME, JSON.stringify(settings))
    return this
  }
  get(key) {
    return all()[key]
  }
}

const SETTINGS = null
function settings () {
  if (!SETTINGS) {
    SETTINGS = new Settings()
  }
  return SETTINGS
}

export function background (bg) {
  if (bg) {
    settings().set('background', bg)
  } else {
    return settings().get('background')
  }
}

export function save () {

}
