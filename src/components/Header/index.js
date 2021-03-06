// redux
import { useDispatch, useSelector } from 'react-redux'
import { changeVersion } from './gameSlice'
// next
import Link from 'next/link'
// components
import Box from '../Box'
import Autocomplete from '../Autocomplete'
// styles
import { Select } from '../BaseStyles'
import { Heading, SelectContainer } from './styledHeader'
// Info
import { gameVersions } from '../../helpers/gameVersion'

export default function HeaderComponent({ withGameVersion = true, ...rest }) {
  // dispatch
  const dispatch = useDispatch()
  // game version
  const gameVersion = useSelector(state => state.game.version)

  return (
    <Box as="header" margin="2rem 0" {...rest}>
      <Box
        constrained
        withGutter
        direction={{ xxs: 'column', md: 'row' }}
        justify="space-between"
        align={{ xxs: 'center', md: 'flex-start' }}
        margin="auto"
      >
        <div>
          <Link href="/">
            <Heading>PokeStats</Heading>
          </Link>
          {/** Select */}
          {withGameVersion && (
            <SelectContainer direction="row" justify="flex-start">
              <label id="header_generation" htmlFor="header_gen_select">
                Game Version:
              </label>
              <Select
                aria-labelledby="header_generation"
                id="header_gen_select"
                value={gameVersion}
                onChange={e => dispatch(changeVersion(e.target.value))}
              >
                {gameVersions.map(({ name, value }, index) => (
                  <option key={index} value={value}>
                    {name}
                  </option>
                ))}
              </Select>
            </SelectContainer>
          )}
        </div>
        <Autocomplete
          width="350px"
          justify="flex-end"
          align="flex-start"
          margin="none"
          debug
        />
      </Box>
    </Box>
  )
}
