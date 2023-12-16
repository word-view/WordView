import WordAlternatives from "./Activity/WordAlternatives";
import WordPresenter from "./Activity/WordPresenter";
import WordReinforce from "./Activity/WordReinforce";
import WordSpelling from "./Activity/WordSpelling";
import FailSuccessManager from "./FailSuccess/FailSuccessManager";
import Loading from "./Loading";

interface ManagedScreen {
  name: string;
  element: React.JSX.Element;
}

export default class ScreenManager {
  private static screenShowing: ManagedScreen = {} as ManagedScreen;
  private static screens: ManagedScreen[] = [];

  private static forceUpdate: () => void = () => {};

  static initializeScreens(pickWord: () => Promise<void>) {
    const right = async () => {
      await FailSuccessManager.showSuccess();
      await pickWord();
    };

    const wrong = async () => {
      await FailSuccessManager.showFail();
      await pickWord();
    };

    const screensToAdd = [
      { name: "@loading", element: <Loading /> },
      {
        name: "@presenter",
        element: (
          <WordPresenter
            onSkip={() => pickWord()}
            onMemorize={() => pickWord()}
          />
        ),
      },
      { name: "@reinforce", element: <WordReinforce /> },
      {
        name: "alternatives",
        element: <WordAlternatives onRight={right} onWrong={wrong} />,
      },
      {
        name: "spelling",
        element: <WordSpelling onFinish={right} />,
      },
    ];

    for (const screen of screensToAdd) {
      this.screens.push(screen);
    }
  }

  static appendUpdater(updater: () => void) {
    this.forceUpdate = updater;
  }

  static pickRandomScreenExcluding(excluding: string[]) {
    let screens: string[] = [];

    for (const screen of this.screens) {
      if (screen.name.startsWith("@")) continue;
      if (excluding.includes(screen.name)) continue;

      screens.push(screen.name);
    }

    return screens[Math.floor(Math.random() * screens.length)];
  }

  static setCurrentScreen(screenName: string, onSet?: Function) {
    const screen = this.findScreen(screenName);

    if (!screen) return;

    this.screenShowing = screen;

    onSet?.();
    this.forceUpdate();
  }

  static isCurrentScreen(screenName: string) {
    if (this.getCurrentScreenName() == screenName) {
      return true;
    } else return false;
  }

  static getCurrentScreen() {
    return this.screenShowing.element;
  }

  static getCurrentScreenName() {
    return this.screenShowing.name;
  }

  static findScreen(screenName: string) {
    for (const screen of this.screens) {
      if (screen.name == screenName) return screen;
    }

    console.error("Could't find a screen named: " + screenName);
    return;
  }

  static getAllScreens() {
    return this.screens;
  }
}
