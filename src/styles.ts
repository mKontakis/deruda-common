import {
    blackColor,
    dangerColor,
    grayColor,
    infoColor,
    primaryColor,
    roseColor,
    successColor,
    warningColor,
    whiteColor
} from "./colors";

import {hexToRgb} from "@material-ui/core/styles";

const boxShadow = {
    boxShadow:
        `0 10px 30px -12px rgba(${
            hexToRgb(blackColor)
        }, 0.42), 0 4px 25px 0px rgba(${
            hexToRgb(blackColor)
        }, 0.12), 0 8px 10px -5px rgba(${
            hexToRgb(blackColor)
        }, 0.2)`,
}
const primaryBoxShadow = {
    boxShadow:
        `0 12px 20px -10px rgba(${
            hexToRgb(primaryColor[0])
        }, 0.28), 0 4px 20px 0px rgba(${
            hexToRgb(blackColor)
        }, 0.12), 0 7px 8px -5px rgba(${
            hexToRgb(primaryColor[0])
        }, 0.2)`,
}
const infoBoxShadow = {
    boxShadow:
        `0 12px 20px -10px rgba(${
            hexToRgb(infoColor[0])
        }, 0.28), 0 4px 20px 0px rgba(${
            hexToRgb(blackColor)
        }, 0.12), 0 7px 8px -5px rgba(${
            hexToRgb(infoColor[0])
        }, 0.2)`,
}
const successBoxShadow = {
    boxShadow:
        `0 12px 20px -10px rgba(${
            hexToRgb(successColor[0])
        }, 0.28), 0 4px 20px 0px rgba(${
            hexToRgb(blackColor)
        }, 0.12), 0 7px 8px -5px rgba(${
            hexToRgb(successColor[0])
        }, 0.2)`,
}
const warningBoxShadow = {
    boxShadow:
        `0 12px 20px -10px rgba(${
            hexToRgb(warningColor[0])
        }, 0.28), 0 4px 20px 0px rgba(${
            hexToRgb(blackColor)
        }, 0.12), 0 7px 8px -5px rgba(${
            hexToRgb(warningColor[0])
        }, 0.2)`,
}
const dangerBoxShadow = {
    boxShadow:
        `0 12px 20px -10px rgba(${
            hexToRgb(dangerColor[0])
        }, 0.28), 0 4px 20px 0px rgba(${
            hexToRgb(blackColor)
        }, 0.12), 0 7px 8px -5px rgba(${
            hexToRgb(dangerColor[0])
        }, 0.2)`,
}
const roseBoxShadow = {
    boxShadow:
        `0 4px 20px 0px rgba(${
            hexToRgb(blackColor)
        }, 0.14), 0 7px 10px -5px rgba(${
            hexToRgb(roseColor[0])
        }, 0.4)`,
}

const warningCardHeader = {
    color: whiteColor,
    background: `linear-gradient(60deg, ${  warningColor[1]  }, ${  warningColor[2]  })`,
    ...warningBoxShadow,
}
const successCardHeader = {
    color: whiteColor,
    background: `linear-gradient(60deg, ${  successColor[1]  }, ${  successColor[2]  })`,
    ...successBoxShadow,
}
const dangerCardHeader = {
    color: whiteColor,
    background: `linear-gradient(60deg, ${  dangerColor[1]  }, ${  dangerColor[2]  })`,
    ...dangerBoxShadow,
}
const infoCardHeader = {
    color: whiteColor,
    background: `linear-gradient(60deg, ${  infoColor[1]  }, ${  infoColor[2]  })`,
    ...infoBoxShadow,
}
const primaryCardHeader = {
    color: whiteColor,
    background: `linear-gradient(60deg, ${  primaryColor[1]  }, ${  primaryColor[2]  })`,
    ...primaryBoxShadow,
}
const roseCardHeader = {
    color: whiteColor,
    background: `linear-gradient(60deg, ${  roseColor[1]  }, ${  roseColor[2]  })`,
    ...roseBoxShadow,
}

const transition = {
    transition: 'all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1)',
}

const containerFluid = {
    paddingRight: '15px',
    paddingLeft: '15px',
    marginRight: 'auto',
    marginLeft: 'auto',
    width: '100%',
}
const container = {
    ...containerFluid,
    '@media (min-width: 576px)': {
        maxWidth: '540px',
    },
    '@media (min-width: 768px)': {
        maxWidth: '720px',
    },
    '@media (min-width: 992px)': {
        maxWidth: '960px',
    },
    '@media (min-width: 1200px)': {
        maxWidth: '1140px',
    },
}

const card = {
    display: 'inline-block',
    position: 'relative',
    width: '100%',
    margin: '25px 0',
    boxShadow: `0 1px 4px 0 rgba(${  hexToRgb(blackColor)  }, 0.14)`,
    borderRadius: '3px',
    color: `rgba(${  hexToRgb(blackColor)  }, 0.87)`,
    background: whiteColor,
}

const defaultFont = {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    fontWeight: '300',
    lineHeight: '1.5em',
}

const cardActions = {
    margin: '0 20px 10px',
    paddingTop: '10px',
    borderTop: `1px solid  ${  grayColor[2]}`,
    height: 'auto',
    ...defaultFont,
}

const cardHeader = {
    margin: '-30px 15px 0',
    borderRadius: '3px',
    padding: '15px',
}

const defaultBoxShadow = {
    border: '0',
    borderRadius: '3px',
    boxShadow:
        `0 10px 20px -12px rgba(${
            hexToRgb(blackColor)
        }, 0.42), 0 3px 20px 0px rgba(${
            hexToRgb(blackColor)
        }, 0.12), 0 8px 10px -5px rgba(${
            hexToRgb(blackColor)
        }, 0.2)`,
    padding: '10px 0',
    transition: 'all 150ms ease 0s',
}

const title = {
    color: grayColor[1],
    textDecoration: 'none',
    fontWeight: '700',
    marginTop: '30px',
    marginBottom: '25px',
    minHeight: '32px',
    fontFamily: `"Roboto Slab", "Times New Roman", serif`,
}

const cardTitle = {
    '&, & a': {
        ...title,
        marginTop: '.625rem',
        marginBottom: '0.75rem',
        minHeight: 'auto',
    },
}

const cardLink = {
    '& + $cardLink': {
        marginLeft: '1.25rem',
    },
}

const cardSubtitle = {
    marginBottom: '0',
    marginTop: '-.375rem',
}

const main = {
    background: whiteColor,
    position: 'relative',
    zIndex: '3',
}

const mainRaised = {
    '@media (max-width: 576px)': {
        marginTop: '-30px',
    },
    '@media (max-width: 830px)': {
        marginLeft: '10px',
        marginRight: '10px',
    },
    margin: '-100px 30px 0px',
    borderRadius: '6px',
    boxShadow:
        `0 16px 24px 2px rgba(${
            hexToRgb(blackColor)
        }, 0.14), 0 6px 30px 5px rgba(${
            hexToRgb(blackColor)
        }, 0.12), 0 8px 10px -5px rgba(${
            hexToRgb(blackColor)
        }, 0.2)`,
}

const section = {
    backgroundPosition: '50%',
    backgroundSize: 'cover',
}

const sectionDark = {
    backgroundColor: grayColor[3],
    background: `radial-gradient(ellipse at center,${  grayColor[4]  } 0,${  grayColor[5]  } 100%)`,
}

const sectionDescription = {
    marginTop: '130px',
}

const description = {
    color: grayColor[0],
}

const mlAuto = {
    marginLeft: 'auto',
}

const mrAuto = {
    marginRight: 'auto',
}

const btnLink = {
    backgroundColor: 'transparent',
    boxShdow: 'none',
    marginTop: '5px',
    marginBottom: '5px',
}
const coloredShadow = {
    // some jss/css to make the cards look a bit better on Internet Explorer
    '@media all and (-ms-high-contrast: none), (-ms-high-contrast: active)': {
        display: 'none !important',
    },
    transform: 'scale(0.94)',
    top: '12px',
    filter: 'blur(12px)',
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundSize: 'cover',
    zIndex: '-1',
    transition: 'opacity .45s',
    opacity: '0',
}

export {
    transition,
    container,
    containerFluid,
    boxShadow,
    card,
    defaultFont,
    primaryColor,
    warningColor,
    dangerColor,
    successColor,
    infoColor,
    roseColor,
    grayColor,
    whiteColor,
    blackColor,
    primaryBoxShadow,
    infoBoxShadow,
    successBoxShadow,
    warningBoxShadow,
    dangerBoxShadow,
    roseBoxShadow,
    warningCardHeader,
    successCardHeader,
    dangerCardHeader,
    infoCardHeader,
    primaryCardHeader,
    roseCardHeader,
    cardActions,
    cardHeader,
    defaultBoxShadow,
    title,
    cardTitle,
    description,
    cardLink,
    cardSubtitle,
    main,
    mainRaised,
    section,
    sectionDark,
    sectionDescription,
    mlAuto,
    mrAuto,
    btnLink,
    coloredShadow,
    hexToRgb,
}
