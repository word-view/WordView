import React from "react";
import { Dimensions } from "react-native";

type P = any;

export interface State {
  windowWidth: number;
  desktop: boolean;
}

export default class AdaptableScreen<P> extends React.Component<P> {
  constructor(props: P) {
    super(props);

    this.state = {
      windowWidth: Dimensions.get("window").width,
      desktop: Dimensions.get("window").width >= 900,
    } as State;
  }

  componentDidMount() {
    const updateDimensions = () => {
      const newWindowWidth = Dimensions.get("window").width;

      this.setState({
        windowWidth: newWindowWidth,
        desktop: newWindowWidth >= 900,
      });
    };

    Dimensions.addEventListener("change", updateDimensions);
  }
}
