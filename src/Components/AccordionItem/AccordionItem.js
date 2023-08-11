import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  LayoutAnimation,
  Platform,
  UIManager,
} from 'react-native';

//Third Party
import PropTypes from 'prop-types';

//Publicly Available Icons that Can be Used for Commercial Purposes
import MinusIcon from '../../assets/icons/supportIcons/minusSVG.svg';
import PlusIcon from '../../assets/icons/supportIcons/plusSVG.svg';

//Utils
import {allColors} from '../../assets/styles/mainColors';
import styles from './style';

const AccordionItem = props => {
  const [expanded, setExpanded] = useState(false);

  //automatically animates view to their new positions when the next layout happens
  useEffect(() => {
    if (Platform.OS === 'android') {
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  }, []);

  /*--- Function that helps in expanding/collapsing the accordion start ---*/
  const toggleExpand = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpanded(!expanded);
  };
  /*--- Function that helps in expanding/collapsing the accordion end ---*/

  return (
    /*------- Single Accordion Item Start ----*/
    <View key={Math.random()}>
      {/*--------- Title Start ---------*/}
      <TouchableOpacity
        style={[
          styles.row,
          {
            backgroundColor: expanded
              ? allColors.lightYellowBg
              : allColors.transparent,
          },
        ]}
        onPress={() => toggleExpand()}>
        {/*--Title Start--*/}
        <Text style={styles.titleStyle}>{props.title}</Text>
        {/*--Title End--*/}

        {/*--Expand Icon Start--*/}
        {expanded ? <MinusIcon /> : <PlusIcon />}
        {/*--Expand Icon End--*/}
      </TouchableOpacity>
      {/*--------- Title End ---------*/}

      {/*--------- Description Start ---------*/}
      {expanded && (
        <View style={styles.child}>
          <Text style={styles.descriptionText}>{props.description}</Text>
        </View>
      )}
      {/*--------- Description End ---------*/}
    </View>
    /*------- Single Accordion Item End ----*/
  );
};

/*---- Default Props Start -------*/
AccordionItem.defaultProps = {
  description: '',
  title: '',
};
/*---- Default Props End -------*/

/*---- Prop Type Expectations Start -------*/
AccordionItem.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string,
};
/*---- Prop Type Expectations End -------*/
export default AccordionItem;
