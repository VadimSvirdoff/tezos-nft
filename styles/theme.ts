import { extendTheme } from '@chakra-ui/react';
import { Button } from './button';
import { Link } from './link';



export const theme = extendTheme({
    config: {
        initialColorMode: "light",
        useSystemColorMode: false,
    },
    styles: {
        global: {
            'html, body': {
                height: '100%'
            }
        }
    },
    colors: {
        brand: {
            black: '#1D2227',
            background: '#1C2228',
            darkGray: '#3D464F',
            neutralGray: '#556677',
            gray: '#AEBBC9',
            lightGray: '#ABBBCB',
            brightGray: '#F2F4F7',
            blue: '#005DFF',
            lightBlue: '#D3DEF5',
            turquoise: '#00FFBE',
            red: '#FF4161'
        }
    },
    components: {
        Button,
        Link,
        Input: {
            variants: {
                outline: {
                    field: {
                        borderRadius: '1px',
                        _focus: {
                            boxShadow: '0px 0px 0px 4px rgba(15, 97, 255, 0.1)'
                        }
                    }
                }
            }
        },
        Textarea: {
            variants: {
                outline: {
                    borderRadius: '1px',
                    _focus: {
                        boxShadow: '0px 0px 0px 4px rgba(15, 97, 255, 0.1)'
                    }
                }
            }
        },
        MenuButton: {
            variants: {
                primary: {
                    color: 'gray.300',
                    _hover: { color: 'brand.blue' },
                    _expanded: { color: 'brand.blue' },
                    _focus: { color: 'brand.blue' }
                }
            }
        },
        MenuItem: {
            variants: {
                primary: {
                    _focus: {
                        bg: 'brand.lightBlue',
                        color: 'brand.blue'
                    }
                }
            }
        }
    },
    fonts: {
        body: "'Roboto', sans-serif",
        heading: "'Roboto', sans-serif",
        mono: "'Roboto Mono', monospace"
    },
    fontWeights: {
        normal: 400,
        bold: 700
    }
});