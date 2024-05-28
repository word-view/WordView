import { Song } from '../Storage/store/player';
import { API_URL_DEV, get } from './client';

export interface Subtitle {
    language: string;
    name: string;
}

export async function fetchHistory() {
    const response = await get('/music/history');

    const responseText = await response.text();

    if (response.status == 200) {
        return JSON.parse(responseText) as Song;
    } else console.error(responseText);
}

export async function fetchSubtitles(id: string) {
    const response = await get(`/music/lyrics/list?id=${id}`);

    const responseText = await response.text();

    if (response.status == 200) {
        return JSON.parse(responseText) as Subtitle[];
    } else console.error(responseText);
}

export async function fetchLyrics(id: string, lang: string) {
    const response = await get(`/music/lyrics?id=${id}&lang=${lang}`);

    const responseText = await response.text();

    if (response.status == 200) {
        return responseText;
    } else console.error(responseText);
}

export function songUrl(id: string) {
    return API_URL_DEV + `/music/download?id=${id}`;
}
