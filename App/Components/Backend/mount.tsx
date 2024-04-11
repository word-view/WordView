import { useEffect } from 'react'

/**
 * Calls the provided callback function when the component mounts.
 * This function is used for abstracting the need to create a useEffect hook for simple mount callbacks.
 * @param callback - The callback function to be called when the component mounts.
 */
export function onMount(callback: Function) {
  useEffect(() => {
    callback()
  }, [])
}

/**
 * Calls the provided async callback function when the component mounts.
 * This function is used for abstracting the need to create an async function inside a useEffect hook (which looks ugly btw).
 * @param callback - The async callback function to be called when the component mounts.
 */
export function onMountAsync(callback: Function) {
  useEffect(() => {
    ;(async function onMount() {
      await callback()
    })()
  }, [])
}
