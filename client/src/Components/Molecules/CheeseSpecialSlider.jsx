import React, {useState} from 'react'
import styled from 'styled-components'
import Slider from 'react-slick'
import Cheese from './Cheese'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import leftActive from '../../Assets/FFC_arrow_active_left.png'
import leftHover from '../../Assets/FFC_arrow_hover_left.png'
import leftInactive from '../../Assets/FFC_arrow_inactive_left.png'
import rightActive from '../../Assets/FFC_arrow_active_right.png'
import rightHover from '../../Assets/FFC_arrow_hover_right.png'
import rightInactive from '../../Assets/FFC_arrow_inactive_right.png'

const StyledSlider = styled(Slider)`
  background: #211B1B; 
  width: 100%;
  display: grid;
  grid-template-columns: 2fr 8fr 2fr;
`

const ArrowContainer = styled.div`
  width: 90%; 
  display: flex;
  justify-content: center;
  align-items: center;
  object-fit: contain;
`

const StyledArrow = styled.div`
  width: 30px;
  height: 30px;
  background: url(${props => props.background});
  background-size: 30px;
  
  &:hover{
    background: url(${props => props.hoverBackground});
    background-size: 30px;
    cursor: pointer;
  }
`

const SliderRightArrow = props => {
  const { onClick, displayRight } = props
  const background = displayRight ? rightActive : rightInactive
  const hoverBackground = displayRight ? rightHover : rightInactive
  return (
    <ArrowContainer>
      <StyledArrow background={background} hoverBackground={hoverBackground} onClick={onClick}/>
    </ArrowContainer>
  )
}

const SliderLeftArrow = props => {
  const { onClick, displayLeft } = props
  const background = displayLeft ? leftActive : leftInactive
  const hoverBackground = displayLeft ? leftHover : leftInactive
  return (
    <ArrowContainer>
      <StyledArrow 
        background={background} 
        hoverBackground={hoverBackground} 
        onClick={onClick} 
      />
    </ArrowContainer>
  )
}

const OutsideCheeseContainer = styled.div`
  width: 80%; 
  display: flex;
  align-items: center;
  justify-content: center; 
`

const CheeseSpecialSlider = props => {
  const { customCheeseInventory, handleCartUpdate } = props
  const [displayLeft, setDisplayLeft] = useState(false)
  const [displayRight, setDisplayRight] = useState(true)

  const sliderSettings = {
    dots: false, 
    infinite: false, 
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SliderRightArrow displayRight={displayRight} />,
    prevArrow: <SliderLeftArrow displayLeft={displayLeft} />, 
    afterChange: index => setArrowDisplay(index)
  }

  const setArrowDisplay = index => {
    const getLength = customCheeseInventory.length
    setDisplayLeft(index !== 0)
    setDisplayRight(getLength - index > 1)
  }

  return (
      <StyledSlider
        {...sliderSettings}
      >
        {customCheeseInventory.map(cheese => (
          <OutsideCheeseContainer>
            <Cheese 
              name={cheese.name} 
              key={cheese.cheeseID} 
              id={cheese.id} 
              inStock={!cheese.outOfStock}
              price={cheese.price}
              discount={cheese.discount}
              country={cheese.country}
              handleCartUpdate={handleCartUpdate}
            />
          </OutsideCheeseContainer>
        ))}
      </StyledSlider>
  )
}

export default CheeseSpecialSlider