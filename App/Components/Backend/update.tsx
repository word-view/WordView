import { useEffect } from 'react'

/**
 * Calls the callback function when the dependencies change.
 * This is done to be more verbose with useEffect, making the code more readable.
 * @param deps - An array of dependencies. The callback function will be called whenever any of these dependencies change.
 * @param callback - The callback function to be called when the specified dependencies change.
 */
export function onUpdate(deps: React.DependencyList, callback: Function) {
  useEffect(() => {
    callback()
  }, deps)
}

export function onUpdateAsync(deps: React.DependencyList, callback: Function) {
  useEffect(() => {
    ;(async function onUpdate() {
      await callback()
    })()
  }, deps)
}
