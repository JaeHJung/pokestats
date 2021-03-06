import styled from 'styled-components'
import { motion } from 'framer-motion'
import { boxConfig } from '../Box/config'
// helpers
import { responsiveProps } from '../../helpers/box'
// components
import Header from '../Header'
import Footer from '../Footer'
import BoxWrapper from '../Box/StyledBox'

const LayoutContainer = styled(BoxWrapper)`
  min-height: 100vh;
`

// main container
export const MainContainer = styled(motion.main)`
  display: flex;
  flex-direction: column;
  align-items: ${({ align }) => (align ? align : 'center')};
  justify-content: ${({ justify }) => (justify ? justify : 'center')};
  margin: 0 auto;
  width: 100%;
  flex-grow: 1;
  ${({ constrained }) => constrained && 'max-width: 1300px;'}
  ${({ withGutter }) =>
    withGutter && responsiveProps('padding', boxConfig.gutterWidth)}
`

export default function Layout({
  withFooter,
  withHeader,
  withMain = true,
  withGameVersion = true,
  children,
  mainKey,
  ...rest
}) {
  return (
    <LayoutContainer direction="column" width="100%" noGutter>
      {withHeader && <Header withGameVersion={withGameVersion} />}
      {withMain ? (
        <MainContainer key={mainKey} {...rest}>
          {children}
        </MainContainer>
      ) : (
        children
      )}
      {withFooter && <Footer />}
    </LayoutContainer>
  )
}
