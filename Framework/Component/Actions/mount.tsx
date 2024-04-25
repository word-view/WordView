import { useEffect } from 'react'

/**
 * Calls the provided callback function when the component mounts.
 * @param callback - The callback function to be called.
 */
export function onMount(callback: Function) {
  useEffect(() => {
    callback()
  }, [])
}

/**
 * Asynchronously calls the provided async callback function when the component mounts.
 * @param callback - The callback function to be called.
 */
export function onMountAsync(callback: Function) {
  useEffect(() => {
    ;(async function onMount() {
      await callback()
    })()
  }, [])
}
