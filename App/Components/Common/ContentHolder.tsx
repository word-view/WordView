import { StyleSheet, View } from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { Text } from 'react-native-paper';
import { useContext } from 'react';
import { DesktopModeProvider } from '../Provider';

interface ContentHolderProps {
  title: string;
  children?: React.JSX.Element;
  style?: any;
}

/**
 * Fills a mobile screen but act as a popover on desktop
 * @param props
 */
export function ContentHolder(props: ContentHolderProps) {
  const desktop = useContext(DesktopModeProvider);

  return (
    <View
      style={[
        styles.container,
        { alignSelf: 'center', marginTop: hp(5) },
        desktop ? styles.contentHolder : { width: wp(150) },
      ]}
    >
      {desktop && (
        <View style={desktop ? { width: wp(30) } : { width: '100%' }}>
          <Text
            variant='titleMedium'
            style={{
              alignSelf: 'flex-start',
              fontFamily: 'OpenSans',
              fontWeight: '600',
              marginBottom: hp(2.5),
            }}
          >
            {props.title}
          </Text>
        </View>
      )}

      <View
        style={[
          desktop ? desktopStyles.childrenHolder : mobileStyles.childrenHolder,
          {
            alignSelf: 'center',
            alignItems: 'center',
          },
        ]}
      >
        {props.children}
      </View>
    </View>
  );
}

const mobileStyles = StyleSheet.create({
  childrenHolder: {
    width: wp(90),
  },
});

const desktopStyles = StyleSheet.create({
  childrenHolder: {
    width: wp(30),
  },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2C2831',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  contentHolder: {
    marginTop: hp(5),
    padding: 20,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
