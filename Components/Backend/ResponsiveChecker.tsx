import { useEffect, useState } from "react";
import { Dimensions } from "react-native";
import { testing } from "../../store/state";

export default function DesktopChecker() {
  if (testing.get()) {
    let isDesktop = true;
    return { isDesktop };
  }

  const [windowWidth, setWindowWidth] = useState(
    Dimensions.get("window").width
  );
  const [isDesktop, setIsDesktop] = useState(windowWidth >= 900);

  useEffect(() => {
    const updateDimensions = () => {
      const newWindowWidth = Dimensions.get("window").width;
      setWindowWidth(newWindowWidth);
      setIsDesktop(newWindowWidth >= 900);
    };

    Dimensions.addEventListener("change", updateDimensions);
  }, []);

  return { isDesktop };
}
