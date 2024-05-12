import { Cue } from './types';

const { WebVTTParser } = require('webvtt-parser');

export function parseWebVTT(lyrics: string) {
    const parser = new WebVTTParser();
    const tree = parser.parse(lyrics, 'metadata');
    const cues: Cue[] = [];

    for (const cue of tree.cues) {
        cues.push(cue as Cue);
    }

    return cues;
}
