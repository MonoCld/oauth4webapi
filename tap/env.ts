// @ts-ignore
import packageLock from '../package-lock.json' assert { type: 'json' }

// @ts-ignore
export const isBun = typeof Bun !== 'undefined'

// @ts-ignore
export const isDeno = typeof Deno !== 'undefined'

export const isElectron =
  // @ts-ignore
  typeof process !== 'undefined' && !!process.versions.electron

export const isNode =
  // @ts-ignore
  !isBun && !isElectron && typeof process !== 'undefined'

export const isEdgeRuntime =
  // @ts-ignore
  typeof EdgeRuntime !== 'undefined'

export const isBrowser =
  typeof navigator !== 'undefined' && navigator.userAgent?.startsWith?.('Mozilla/5.0 ')

const BOWSER = 'https://cdn.jsdelivr.net/npm/bowser@2.11.0/src/bowser.js'

async function isEngine(engine: string) {
  const { default: Bowser } = await import(BOWSER)
  return Bowser.parse(window.navigator.userAgent).engine.name === engine
}

export const isBlink = isBrowser && (await isEngine('Blink'))

export const isWebKit = isBrowser && (await isEngine('WebKit'))

export const isGecko = isBrowser && (await isEngine('Gecko'))

export const isWorkerd =
  typeof navigator !== 'undefined' && navigator.userAgent === 'Cloudflare-Workers'
