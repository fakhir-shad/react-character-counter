import React, { Component } from "react";
import { PropTypes } from "prop-types";

const styleSheet = {
  wrapper: {
    position: "relative"
  },
  characterCounter: {
    position: "absolute",
    fontSize: "12px",
    fontWeight: "600"
  }
};

export default class CharacterCounter extends Component {
  divRef = React.createRef();

  componentDidMount() {
    if (!this.props.overrideStyle) {
      const { firstChild, lastChild } = this.divRef.current;
      lastChild.style.left = `${firstChild.clientWidth - 70}px`;
      lastChild.style.top = `${firstChild.clientHeight / 2 -
        lastChild.clientHeight / 2 +
        3}px`;
      firstChild.style.paddingRight = "75px";
    }
  }

  render() {
    const {
      value,
      maxLength,
      wrapperStyle,
      characterCounterStyle,
      overrideStyle
    } = this.props;
    let computedWrapperStyle = Object.assign(styleSheet.wrapper, wrapperStyle);
    let computedCharacterCounterStyle = Object.assign(
      styleSheet.characterCounter,
      characterCounterStyle
    );
    if (overrideStyle) {
      computedWrapperStyle = wrapperStyle;
      computedCharacterCounterStyle = characterCounterStyle;
    }
    const displayLength = `${value.length}/${maxLength}`;
    return (
      <div ref={this.divRef} style={computedWrapperStyle}>
        {this.props.children}
        <span style={computedCharacterCounterStyle}>{displayLength}</span>
      </div>
    );
  }
}

CharacterCounter.propTypes = {
  value: PropTypes.string.isRequired,
  maxLength: PropTypes.number.isRequired,
  wrapperStyle: PropTypes.object,
  characterCounterStyle: PropTypes.object,
  overrideStyle: PropTypes.bool
};

CharacterCounter.defaultProps = {
  wrapperStyle: {},
  characterCounterStyle: {},
  overrideStyle: false,
  maxLength: 0
};
