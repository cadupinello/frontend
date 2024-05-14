import styled from "styled-components";

export const QuantityControl = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',

  'div': {
    display: 'flex',
    gap: '10px',
    border: `1px solid ${theme.colors.grayDark}`,
    borderRadius: '8px',
    padding: '4px',

    'button': {
      backgroundColor: 'transparent',
      border: 'none',
      cursor: 'pointer',
    },
  }
}))

export const Container = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  height: '70%',
  overflowY: 'auto',

  "&::-webkit-scrollbar": {
    width: '5px',
  },

  "&::-webkit-scrollbar-track": {
    boxShadow: 'inset 0 0 5px grey',
    borderRadius: '5px',
  },

  "&::-webkit-scrollbar-thumb": {
    background: theme.colors.secondary,
    borderRadius: '10px',
  },
}))

export const Card = styled('div')(({ theme }) => ({
  position: 'relative',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '400px',
  height: '100px',
  margin: '20px 25px',
  borderRadius: '8px',
  padding: '18px',
  backgroundColor: theme.colors.secondary,

  'h3': {
    width: '30%',
    fontFamily: 'inherit',
    fontSize: '13px',
    fontWeight: 400,
    lineHeight: '17px',
    textAlign: 'left',
    color: theme.colors.black
  },

  'span': {
    fontFamily: 'inherit',
    fontSize: '5px',
    fontWeight: 400,
    lineHeight: '6px',
    textAlign: 'left',
    color: theme.colors.black
  },

  '.close': {
    position: 'absolute',
    top: '-5px',
    right: '-10px',
    backgroundColor: 'transparent',
    border: 'none',
    cursor: 'pointer',

    'svg': {
      width: '20px',
      height: '20px',
    }
  }

}))


export const Image = styled('img')(({ theme }) => ({
  width: '48px',
  height: '58px'
}))