import { useEffect } from 'react';

/**
 * Calls the callback function when the dependencies change.
 * @param deps - An array of dependencies. The callback function will be called whenever any of these dependencies change.
 * @param callback - The callback function to be called.
 */
export function onUpdate(deps: React.DependencyList, callback: () => void) {
    useEffect(() => {
        callback();
    }, deps);
}

/**
 * Asynchronously calls the callback function when the dependencies change.
 * @param deps - An array of dependencies. The callback function will be called whenever any of these dependencies change.
 * @param callback - The callback function to be called.
 */
export function onUpdateAsync(deps: React.DependencyList, callback: () => void) {
    useEffect(() => {
        (async function onUpdate() {
            await callback();
        })();
    }, deps);
}
