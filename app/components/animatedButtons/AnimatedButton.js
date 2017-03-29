import React, { PropTypes } from 'react'
import classnames from 'classnames'
import './animatedButton.styl'

export default class AnimatedButton extends React.Component {

  static TYPES = {
    accept: 'AnimatedButton__type__accept',
    reject: 'AnimatedButton__type__reject',
    caution: 'AnimatedButton__type__caution'
  }

  static propTypes = {
    type: PropTypes.string.isRequired,  // Animated button type one of static TYPES
    onClick: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired,
    width: PropTypes.number,
    height: PropTypes.number,
    hidden: PropTypes.bool
  }

  static defaultProps = {
    hidden: false
  }

  constructor(props) {
    super(props)
    this.state = {
      activated: false
    }
  }

  onClick = () => {
    const { activated } = this.state
    const { onClick } = this.props
    if (onClick) onClick(!activated)
    this.setState({ activated: !activated })
  }

  getActiveClassName = () => {
    const { type } = this.props
    const { TYPES } = AnimatedButton
    switch (type) {
      case TYPES.accept: return 'valid'
      case TYPES.reject: return 'invalid'
      case TYPES.caution: return 'caution'
      default: throw new Error('Type prop must be one of AnimatedButton.TYPES')
    }
  }

  render() {
    const { activated } = this.state
    const { type, width, height, text, hidden } = this.props

    const buttonStyle = {
      ...(height && { height }),
      ...(width && { width }),
      borderRadius: Math.min(...[width, height].filter(Number.isFinite)) / 2
    }

    const activeClassName = this.getActiveClassName()
    const svgStyle = activated ? { width: 25 } : {}
    const pathStyle = activated ? {} : { display: 'none' }

    return (
      <button
        className={
          classnames('animatedButton',
            { [activeClassName]: activated },
            { hidden }
          )
        }
        onClick={this.onClick}
        type='button'
        style={buttonStyle}
      >
        <div className='content'>

          { type === AnimatedButton.TYPES.reject &&
            <svg
              style={svgStyle}
              xmlns='http://www.w3.org/2000/svg'
              width='25'
              height={height}
              viewBox='-9 0 38 40'
              preserveAspectRatio='xMidYMid meet'
            >
              <path
                className='cross-1'
                style={pathStyle}
                fill='none'
                d='M0 30 L20 10'
                stroke='white'
                strokeWidth='3'
              />
              <path
                className='cross-2'
                style={pathStyle}
                fill='none' d='M20 30 L0 10'
                stroke='white'
                strokeWidth='3'
              />
            </svg>
          }

          { type === AnimatedButton.TYPES.accept &&
            <svg
              style={svgStyle}
              xmlns='http://www.w3.org/2000/svg'
              width='25'
              height={height}
              viewBox='-9 0 38 40'
              preserveAspectRatio='xMidYMid meet'
            >
              <path
                className='check'
                style={pathStyle}
                fill='none'
                d='M0 20 L8 28 L25 10'
                stroke='white'
                strokeWidth={3}
              />
            </svg>
          }

          <span>{text}</span>
        </div>
      </button>
    )
  }
}
