import React from 'react'
import AnimatedButton, { TYPES } from './AnimatedButton'

// export default Object.entries(TYPES).reduce(
//   (modules, [name, type]) => {
//     const moduleName = `Animated${name.charAt(0).toUpperCase()}${name.slice(1).toLowerCase()}`
//     return ({
//       ...modules,
//       [moduleName]: props => <moduleName type={type} {...props} />
//     })
//   }
// , {})

export const AnimatedAccept = props =>
  <AnimatedButton type={TYPES.accept} {...props} />

export const AnimatedReject = props =>
  <AnimatedButton type={TYPES.reject} {...props} />

export const AnimatedCaution = props =>
  <AnimatedButton type={TYPES.caution} {...props} />
