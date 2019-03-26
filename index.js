"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = require("prop-types");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var styleSheet = {
  wrapper: {
    position: "relative"
  },
  characterCounter: {
    position: "absolute",
    fontSize: "12px",
    fontWeight: "600"
  }
};

var CharacterCounter =
/*#__PURE__*/
function (_Component) {
  _inherits(CharacterCounter, _Component);

  function CharacterCounter() {
    var _getPrototypeOf2;

    var _temp, _this;

    _classCallCheck(this, CharacterCounter);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(CharacterCounter)).call.apply(_getPrototypeOf2, [this].concat(args))), _this.divRef = _react.default.createRef(), _temp));
  }

  _createClass(CharacterCounter, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (!this.props.overrideStyle) {
        var _this$divRef$current = this.divRef.current,
            firstChild = _this$divRef$current.firstChild,
            lastChild = _this$divRef$current.lastChild;
        lastChild.style.left = "".concat(firstChild.clientWidth - 70, "px");
        lastChild.style.top = "".concat(firstChild.clientHeight / 2 - lastChild.clientHeight / 2 + 3, "px");
        firstChild.style.paddingRight = "75px";
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          value = _this$props.value,
          maxLength = _this$props.maxLength,
          wrapperStyle = _this$props.wrapperStyle,
          characterCounterStyle = _this$props.characterCounterStyle,
          overrideStyle = _this$props.overrideStyle;
      var computedWrapperStyle = Object.assign(styleSheet.wrapper, wrapperStyle);
      var computedCharacterCounterStyle = Object.assign(styleSheet.characterCounter, characterCounterStyle);

      if (overrideStyle) {
        computedWrapperStyle = wrapperStyle;
        computedCharacterCounterStyle = characterCounterStyle;
      }

      var displayLength = "".concat(value.length, "/").concat(maxLength);
      return _react.default.createElement("div", {
        ref: this.divRef,
        style: computedWrapperStyle
      }, this.props.children, _react.default.createElement("span", {
        style: computedCharacterCounterStyle
      }, displayLength));
    }
  }]);

  return CharacterCounter;
}(_react.Component);

exports.default = CharacterCounter;
CharacterCounter.propTypes = {
  value: _propTypes.PropTypes.string.isRequired,
  maxLength: _propTypes.PropTypes.number.isRequired,
  wrapperStyle: _propTypes.PropTypes.object,
  characterCounterStyle: _propTypes.PropTypes.object,
  overrideStyle: _propTypes.PropTypes.bool
};
CharacterCounter.defaultProps = {
  wrapperStyle: {},
  characterCounterStyle: {},
  overrideStyle: false,
  maxLength: 0
};
