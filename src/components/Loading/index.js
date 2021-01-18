import { forwardRef } from 'react'
// components
import Box from '../Box'

const Loading = forwardRef(({ ...rest }, ref) => {
  return (
    <Box noGutter ref={ref} {...rest}>
      LOADING!
    </Box>
  )
})

Loading.displayName = 'Loading'

export default Loading
