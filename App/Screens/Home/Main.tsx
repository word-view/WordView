import React, { memo } from 'react';
import { ScrollView } from 'react-native';
import { ContinueHearing, Welcome } from './Sections';

interface MainScreenProps {
  marginLeft?: number;
  marginTop?: number;
  appNav: any;
}

function Main(props: MainScreenProps) {
  const isFirstLaunch = false;

  return (
    <ScrollView>
      {isFirstLaunch ? (
        <Welcome marginTop={props.marginTop} marginLeft={props.marginLeft} appNav={props.appNav} />
      ) : (
        <ContinueHearing
          marginTop={props.marginTop}
          marginLeft={props.marginLeft}
          appNav={props.appNav}
        />
      )}
    </ScrollView>
  );
}

export default memo(Main);
