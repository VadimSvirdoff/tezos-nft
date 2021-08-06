export const Link = {
    variants: {
      primaryAction: {
        alignItems: 'center',
        bg: 'brand.blue',
        borderColor: 'brand.blue',
        borderRadius: '2px',
        color: 'white',
        display: 'inline-flex',
        fontSize: '1rem',
        fontWeight: '600',
        height: 10,
        justifyContent: 'center',
        lineHeight: '1.2',
        paddingX: 4,
        transition: 'none',
        _hover: {
          bg: 'white',
          color: 'brand.blue',
          textDecoration: 'none'
        }
      },
      primaryActionInactive: {
        alignItems: 'center',
        bg: 'gray.600',
        borderRadius: '2px',
        color: 'gray.400',
        display: 'inline-flex',
        fontSize: '1rem',
        fontWeight: '600',
        height: 10,
        justifyContent: 'center',
        lineHeight: '1.2',
        paddingX: 4,
        transition: 'none',
        _hover: {
          color: 'gray.400',
          textDecoration: 'none'
        }
      }
    }
  };