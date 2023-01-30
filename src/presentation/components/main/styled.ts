import {Box, Link, Typography} from '@mui/material'
import { styled } from '@mui/material/styles'

export const palette = {
    main: {
        default: '#1698D9',
        hover: '#2EA8E6',
        hoverLink: '#22A7E9'
    },
    selected: {
        default: '#D91667',
        hover: '#E52E7A'
    },
    disabled: {
        default: '#B3B3B3'
    }
}
export const BoxMainStyle = styled(Box)(({ theme }) => ({
    width: '100vw',
    minHeight: '100vh',
    background: 'linear-gradient(180deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 5e-05) 49.88%, rgba(0, 0, 0, 0.5) 100%), url("img/bg.png")',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
}))

export const TitleStyled = styled(Typography)(({ theme }) => ({
    textAlign: 'center',
    color: '#FFFFFF',
    textShadow: '0px 1px 1px #000000',
    lineHeight: '80px',
    margin: '36px 0px 24px 0px'
}))

export const BoxCardsStyle = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    '& div:last-child': {
        marginRight: '0px'
    }
}))

export const BoxBorderContentStyle = styled(Box)(({ color }) => ({
    background: `linear-gradient(135deg, transparent 35px, ${color} 0)`,
    padding: '4px',
    width: '320px',
    height: '480px',
    borderRadius: '12px',
    margin: '0px 40px'
}))

export const BoxColorContentStyle = styled(Box)(({ theme }) => ({
    height: '100%',
    width: '100%',
    background: 'linear-gradient(135deg, transparent 35px, #F2F2F2 0)',
    borderRadius: '12px',
    fontFamily: 'Trebuchet MS',
}))

export const BoxContentStyle = styled(Box)(({ theme }) => ({
    padding: '17px 0px 0px 47px',
    height: '204px'
}))

export const DescriptionStyle = styled(Typography)(({ theme }) => ({
    fontFamily: 'Trebuchet MS',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '16px',
    lineHeight: '19px',
    color: '#666666'
}))

export const NameStyle = styled(Typography)(({ theme }) => ({
    fontFamily: 'Trebuchet MS',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: '48px',
    lineHeight: '56px',
    color: '#000000',
    marginTop: '5px'
}))

export const TasteStyle = styled(Typography)(({ theme }) => ({
    fontFamily: 'Trebuchet MS',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: '24px',
    lineHeight: '28px',
    color: '#000000',
    marginBottom: '15px'
}))

export const OptionsStyle = styled(Typography)(({ theme }) => ({
    fontFamily: 'Trebuchet MS',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '14px',
    lineHeight: '18px',
    color: '#666666'
}))

export const BoxCatStyle = styled(Box)(({ zIndex }) => ({
    height: '268px',
    backgroundImage: 'url(img/cat.png)',
    overflow: 'hidden',
    borderRadius: '12px',
    display: 'flex',
    justifyContent: 'end',
    alignItems: 'end',
    '&:before': {
        content: '""',
        position: 'absolute',
        zIndex: `${zIndex}`,
        height: '472px',
        width: '312px',
        background: `linear-gradient(135deg, transparent 35px, #F2F2F2 0)`,
        opacity: '.5',
        borderRadius: '12px'
    }
}))

export const WeightBoxStyle = styled(Box)(({ color }) => ({
    height: '80px',
    width: '80px',
    borderRadius: '50%',
    backgroundColor: `${color}`,
    padding: '20px 0px 0px 0px',
    textAlign: 'center',
    margin: '12px!important',
    color: '#FFFFFF',
    position: 'relative',
    zIndex: '11'
}))

export const WeightValueStyle = styled(Typography)(({ theme }) => ({
    fontFamily: 'Trebuchet MS',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '42px',
    lineHeight: '22px',
    marginBottom: '15px'
}))

export const WeightUnitStyle = styled(Typography)(({ theme }) => ({
    fontFamily: 'Trebuchet MS',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '21px',
    lineHeight: '11px'
}))

export const BoxPaymentStyle = styled(Box)(({ theme }) => ({
    margin: '14px 40px 24px 40px',
    textAlign: 'center',
    width: '320px'
}))

export const PaymentStyle = styled(Typography)(({ theme }) => ({
    fontFamily: 'Trebuchet MS',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '13px',
    lineHeight: '15px',
    color: '#FFFFFF'
}))

export const PaymentLinkStyle = styled(Link)(({ theme }) => ({
    cursor: 'pointer',
    textDecoration: 'none',
    borderBottom: `1px dashed ${palette.main.default}`,
    color: palette.main.default,
    '&:hover': {
        color: palette.main.hoverLink,
        borderBottom: `1px dashed ${palette.main.hoverLink}`
    }
}))