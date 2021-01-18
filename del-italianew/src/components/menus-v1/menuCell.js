import React from "react"
import styled from "styled-components"
import LogoRed from "../images/logored.png"
const MenuCell = ({ onCellClick, section, inventory, numSections }) => {
  const defaultCellBG =
    "https://res.cloudinary.com/gonation/gonation.data.prod/default/img-sec-cover-full.png"

  const blockStyle = {
    background:
      section.imageUrl === defaultCellBG ? "" : `url${section.imageUrl}`,
    backgroundPosition: "center",
    backgroundSize: "cover",
  }

  return (
    <SectionCell
      className={`section-cell`}
      onClick={onCellClick({ section, inventory })}
    >
      <GnMenuCell className={`gn-menu-cell`} style={blockStyle}>
        <ImageContainer>
          <ImageFill />
          <ImageContainerImg
            src={
              section.imageUrl !== defaultCellBG ? section.imageUrl : LogoRed
            }
          />
          {/* <img src={LogoRed} /> */}
        </ImageContainer>
        <GnMenuCellName>{section.name}</GnMenuCellName>
      </GnMenuCell>
    </SectionCell>
  )
}

export default MenuCell

const SectionCell = styled.div`
  cursor: pointer;
  width: 100%;
  background: #fff;
  border-radius: 10px;
  margin: 1rem 0;
  box-shadow: 2px 2px #dddddd;
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
  @media (min-width: 1600px) {
    width: calc(25% - (0.5rem * 2));
  }
`

const GnMenuCell = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`

const ImageFill = styled.div`
  padding-bottom: 100%;
`

const ImageContainerImg = styled.img`
  object-fit: cover;
  height: 100%;
  width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 10px 10px 0 0;
`

const GnMenuCellName = styled.div`
  margin: 1rem;
  font-size: 1.5rem;
  font-weight: bold;
  text-transform: uppercase;
  color: ${props => (props.theme.primary ? props.theme.primary : "black")};
`
