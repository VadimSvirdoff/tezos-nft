export const Button = {
    variants: {
      primaryAction: {
        bg: 'brand.blue',
        borderColor: 'brand.blue',
        borderRadius: '8rem',
        color: 'white',
        transition: 'none',
        _active: {
          opacity: '0.5',
          bg: 'brand.blue'
        },
        _hover: {
          opacity: '0.8'
        }
      },
      primaryActionInactive: {
        bg: 'brand.blue',
        borderColor: 'brand.blue',
        borderRadius: '8rem',
        color: 'white',
        opacity: '0.3',
        transition: 'none',
        _active: {
          bg: 'brand.blue'
        }
      },
      primaryActionLined: {
        bg: 'transparent',
        borderColor: 'brand.blue',
        borderRadius: '8rem',
        borderWidth: '1px',
        color: 'brand.blue',
        transition: 'none',
        _active: {
          opacity: '0.5'
        },
        _hover: {
          // bg: 'white',
          // color: 'brand.blue',
          opacity: '0.8'
        }
      },
      primaryActionInverted: {
        bg: 'transparent',
        borderColor: 'brand.blue',
        borderRadius: '8rem',
        color: 'brand.blue',
        transition: 'none',
        _active: {
          opacity: '0.5'
        },
        _hover: {
          bg: 'brand.blue',
          color: 'white'
        }
      },
      secondaryAction: {
        bg: 'brand.turquoise',
        color: 'brand.background',
        borderColor: 'brand.turquoise',
        borderRadius: '8rem',
        borderWidth: '1px',
        transition: 'none',
        _active: {
          opacity: '0.5',
          bg: 'brand.turquoise'
        },
        _hover: {
          bg: 'brand.turquoise',
          color: 'brand.background',
          opacity: '0.8'
        }
      },
      secondaryActionLined: {
        bg: 'none',
        borderColor: 'brand.turquoise',
        borderRadius: '8rem',
        borderWidth: '1px',
        color: 'brand.turquoise',
        transition: 'none',
        _active: {
          opacity: '0.8',
          bg: 'brand.turquoise'
        },
        _hover: {
          bg: 'brand.turquoise',
          color: 'brand.background'
        }
      },
      cancelAction: {
        bg: 'none',
        borderColor: 'brand.red',
        borderRadius: '8rem',
        borderWidth: '1px',
        color: 'brand.red',
        transition: 'none',
        _active: {
          opacity: '0.8',
          bg: 'brand.red'
        },
        _hover: {
          bg: 'brand.red',
          color: 'white'
        }
      },
      tertiaryAction: {
        bg: 'gray.200',
        color: 'gray.500',
        borderRadius: '8rem',
        _hover: {
          bg: 'gray.100',
          color: 'gray.400'
        },
        _active: {
          bg: 'gray.100',
          color: 'gray.400'
        }
      }
    }
  };