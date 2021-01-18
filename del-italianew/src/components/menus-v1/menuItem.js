import React from 'react'
import styled from 'styled-components'
import isNewWithinWeek from '../helpers/isNewWithinWeek'
import Price from './price'
import PriceWithVariants from './PriceWithVariants'
import LogoRed from '../images/logored.png'
import RaveRantBar from './raveRantBar'
import NewItemBadge from './newItemBadge'
// import { theme } from '../../globalStyles'

const MenuItem = ({ item, type, withDollar, hasMenuImages, theme }) => {
  const getMenuItemType = () => {
    switch (type) {
      case 'someCase':
        console.log('someCase selected')
      default:
        return defaultType()
    }
  }

  // When copying a menu, for some reason the string URL gets a -copy attached at the end of it. This function removes it.
  const removeImageCopy = img => img.substring(0, img.length - 5)

  const calcRaveRants = item => item.raves / (item.raves + item.rants)

  const defaultType = () => (
    <MenuItemInnerContainer>
      {item.photo_id ? (
        <MenuItemImage>
          <ImageFill />
          <ItemImg
            src={
              item.imageUrl.includes('copy')
                ? removeImageCopy(item.imageUrl)
                : item.imageUrl
            }
            alt='menu item'
          />
        </MenuItemImage>
      ) : (
        <MenuItemImage>
          <ImageFill />
          <ItemImg src={LogoRed} alt='default menu item' />
        </MenuItemImage>
      )}
      <MenuItemContentContainer>
        {item.variants.length && item.variants[0].label === '' ? (
          <NamePriceContainer>
            <MenuItemName>
              {item.name}{' '}
              {isNewWithinWeek(item.createdAt) ? (
                <NewItemBadge color={theme.secondary} />
              ) : (
                ''
              )}{' '}
            </MenuItemName>
            <Price withDollar={withDollar} variants={item.variants} toSide />
          </NamePriceContainer>
        ) : (
          <NamePriceContainerVariants>
            <MenuItemName>{item.name}</MenuItemName>
            <PriceWithVariants
              withDollar={withDollar}
              variants={item.variants}
              toSide
            />
          </NamePriceContainerVariants>
        )}
        <MenuItemDescription>{item.desc}</MenuItemDescription>
        {calcRaveRants(item) ? <RaveRantBar score={calcRaveRants(item)} /> : ''}
      </MenuItemContentContainer>
    </MenuItemInnerContainer>
  )

  return <MenuItemContainer>{getMenuItemType()}</MenuItemContainer>
}

export default MenuItem

const MenuItemContainer = styled.div`
  display: flex;
  overflow: hidden;
  width: 100%;
  margin-bottom: 1rem;
  @media (min-width: 599px) {
    width: calc(50% - (0.5rem * 2));
    margin: 0.5rem;
  }

  @media (min-width: 767px) {
    width: calc(33.333% - (0.5rem * 2));
  }

  @media (min-width: 1200px) {
    width: calc(25% - (0.5rem * 2));
  }
  /* @media (min-width: 1600px) {
    width: calc(20% - (0.5rem * 2));
  } */
`

const MenuItemInnerContainer = styled.div`
  margin-bottom: 1rem;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 10px;
  box-shadow: 2px 2px #dddddd;
`

const MenuItemImage = styled.div`
  border-radius: 10px 10px 0 0;
  position: relative;
`
const ImageFill = styled.div`
  padding-bottom: 100%;
`

const ItemImg = styled.img`
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  left: 0;
`

const MenuItemContentContainer = styled.div`
  padding: 1rem;
  height: 100%;
  display: flex;
  flex-direction: column;
`

const MenuItemName = styled.p`
  font-size: 1.5rem;
  font-weight: bolder;
  margin: 0;
  margin-bottom: 1rem;
  color: ${props => (props.theme.primary ? props.theme.primary : 'black')};
`

const MenuItemDescription = styled.p``

const NamePriceContainer = styled.div`
  display: flex;
`

const NamePriceContainerVariants = styled.div`
  display: block;
`
