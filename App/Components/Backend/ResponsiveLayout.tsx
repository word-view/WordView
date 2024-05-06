import { useState } from 'react';
import { Dimensions } from 'react-native';
import { testing } from '../../Storage/store/state';
import { widthPercentageToDP, heightPercentageToDP } from 'react-native-responsive-screen';
import { onMount } from '../../../Framework/Components/Actions';

export function appLayout() {
  if (testing.get()) {
    const isDesktop = true;
    return { isDesktop };
  }

  const [windowWidth, setWindowWidth] = useState(Dimensions.get('window').width);
  const [isDesktop, setIsDesktop] = useState(windowWidth >= 900);

  const [wp, setWp] = useState<(widthPercent: string | number) => number>(widthPercentageToDP);
  const [hp, setHp] = useState<(heightPercent: string | number) => number>(heightPercentageToDP);

  onMount(() => {
    const updateDimensions = () => {
      const newWindowWidth = Dimensions.get('window').width;
      setWindowWidth(newWindowWidth);
      setIsDesktop(newWindowWidth >= 900);

      setWp(widthPercentageToDP);
      setHp(heightPercentageToDP);
    };

    Dimensions.addEventListener('change', updateDimensions);
  });

  return { isDesktop, wp, hp };
}
