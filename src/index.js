import fsPromises from 'node:fs/promises'
import { defaultTheme } from './theme.js'

fsPromises.mkdir('./themes', { recursive: true })
  .then(() => fsPromises.writeFile(
    './themes/default.json',
    JSON.stringify(defaultTheme, null, 2)
  ))
