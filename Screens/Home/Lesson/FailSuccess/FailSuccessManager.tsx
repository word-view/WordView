import { wait } from "../../../../modules/time/time";
import SuccessOverlay from "./SuccessOverlay";
import FailOverlay from "./FailOverlay";
import { useRef } from "react";

export default class FailSuccessManager {
  private static forceUpdate: () => void = () => {};
  private static result: React.JSX.Element = (<></>);

  private static onShowSuccess?: Function;
  private static onHideSuccess?: Function;

  private static onShowFail?: Function;
  private static onHideFail?: Function;

  static appendUpdater(updater: () => void) {
    this.forceUpdate = updater;
  }

  static appendSuccessActions(onShow?: Function, onHide?: Function) {
    this.onShowSuccess = onShow;
    this.onHideSuccess = onHide;
  }
  static appendFailActions(onShow?: Function, onHide?: Function) {
    this.onShowFail = onShow;
    this.onHideFail = onHide;
  }

  static showSuccess(duration: number = 2000): Promise<void> {
    return new Promise((resolve) => {
      wait(500).then(() => {
        this.onShowSuccess?.();
        this.result = <SuccessOverlay />;
        this.forceUpdate();

        setTimeout(async () => {
          this.clear();
          this.onHideSuccess?.();
          this.forceUpdate();
          resolve();
        }, duration);
      });
    });
  }

  static showFail(duration: number = 2000): Promise<void> {
    return new Promise((resolve) => {
      wait(500).then(() => {
        this.onShowFail?.();
        this.result = <FailOverlay />;
        this.forceUpdate();

        setTimeout(async () => {
          this.clear();
          this.onHideFail?.();
          this.forceUpdate();
          resolve(); // Resolve the promise when setTimeout is executed
        }, duration);
      });
    });
  }

  static getResult() {
    return this.result;
  }

  private static clear() {
    this.result = <></>;
  }
}
