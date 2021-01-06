import styled, { css } from 'styled-components'

const BtnSpan = styled.span`
  position: relative;
  height: 90px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 0.5rem;
`

const Arrow = styled(BtnSpan)`
  ${({ right, left }) =>
    css`
      &:after {
        position: absolute;
        content: '';
        border-top: 45px solid transparent;
        border-bottom: 45px solid transparent;
        transition: all 0.15s ease-in-out;
        ${left &&
        css`
          right: 0;
          border-right: 10px solid black;
          box-shadow: 10px 0 0 0 black, 10px 3px 0 0 black;
        `}
        ${right &&
        css`
          left: 0;
          border-left: 10px solid black;
          box-shadow: -10px 0 0 0 black, -10px 3px 0 0 black;
        `}
      }
    `}
`

const Title = styled(BtnSpan)`
  color: white;
  background-color: black;
  width: 120px;
  max-width: 120px;
  transition: all 0.15s ease-in-out;

  & span {
    font-size: 2rem;
  }
`

const PokemonImg = styled.img`
  width: auto;
  height: 90px;
  transition: all 0.15s ease-in-out;
`

const BtnAnchor = styled.a`
  overflow: hidden;
  border: 2px solid black;
  font-weight: 600;

  ${({ left }) =>
    left &&
    css`
      border-radius: 4px 0 0 4px;
      border-right: 1px solid white;

      & ${BtnSpan} {
        float: left;
      }
    `}

  ${({ right }) =>
    right &&
    css`
      border-radius: 0 4px 4px 0;
      border-left: 1px solid white;

      & ${BtnSpan} {
        float: right;
      }
    `}

  &:hover {
    cursor: pointer;

    & ${Arrow} {
      ${({ right }) =>
        right &&
        css`
          &:after {
            left: 10px;
          }
        `}
      ${({ left }) =>
        left &&
        css`
          &:after {
            right: 10px;
          }
        `}
    }

    & ${PokemonImg} {
      transform: scale(1.1);
    }
  }
`

export { BtnAnchor, Title, Arrow, PokemonImg }
