import { formatTime } from '../../Util/time';
import { globalLessonTime } from '../../Storage/store/lesson';

export class LessonTimer {
    private timer?: NodeJS.Timeout;
    private timeLeft;

    private onTimerEnd: Function = () => {};
    private onTimeUpdate: Function = () => {};

    constructor(onTimerEnd?: Function, onTimeUpdate?: Function, duration: number = 300000) {
        if (onTimerEnd) this.onTimerEnd = onTimerEnd;
        if (onTimeUpdate) this.onTimeUpdate = onTimeUpdate;

        this.timeLeft = duration;
    }

    run() {
        this.timer = setInterval(() => {
            if (this.timeLeft <= 0) {
                this.onTimerEnd();
                this.stop();
            }

            this.timeLeft = this.timeLeft - 1000;
            this.onTimeUpdate();
        }, 1000);
    }

    setDuration(duration: number) {
        this.timeLeft = duration;
    }

    stop() {
        clearInterval(this.timer);
        this.onTimeUpdate();
    }

    getFormattedTimeLeft() {
        return formatTime(this.timeLeft);
    }

    getTimeLeft() {
        return this.timeLeft;
    }

    canStart() {
        const timeLeftOfLastLesson = globalLessonTime.get();

        if (timeLeftOfLastLesson == undefined) return true;

        if (timeLeftOfLastLesson <= 0 || timeLeftOfLastLesson == 0) {
            this.setDuration(0);
            return false;
        }

        if (timeLeftOfLastLesson > 0) {
            this.setDuration(timeLeftOfLastLesson);
            return true;
        }
    }

    saveGlobally() {
        this.stop();
        globalLessonTime.set(this.getTimeLeft());
    }
}
