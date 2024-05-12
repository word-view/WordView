import { testing } from '../Storage/store/state';
import { get } from './client';

/**
 * Checks the availability of WordView's API.
 * @returns {boolean} Returns true if the API is reachable; otherwise, false.
 */
export async function checkAPIAvailable(): Promise<boolean> {
    if (testing) return true;
    try {
        const response = await get('/ping');

        if (response.status === 200 && (await response.text()) === 'Not dead yet!') {
            return true;
        } else return false;
    } catch (error) {
        console.error('The API could not be reached \n\n', error);
        return false;
    }
}
