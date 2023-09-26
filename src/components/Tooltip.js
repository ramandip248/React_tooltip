import {useState} from 'react';
import styled from 'styled-components';

const TooltipContainer = styled.div`
   position:relative;
   display:inline-block;
   width:25%;


`

const TooltipContentBox = styled.div`
  position: absolute;
  background-color: #333;
  color: #fff;
  padding: 5px;
  border-radius: 4px;
  font-size: 14px;
  white-space: nowrap;
  z-index: 1; 

  &:before {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    border: 6px solid transparent;
  }

  ${(props) => {
    switch (props.position) {
      case 'top':
        return `
          bottom: 110%;
          left: 50%;
          transform: translateX(-50%);
          &:before {
            top: 100%;
            left: 50%;
            border-top-color: #333;
            border-bottom: 0;
          
          }
        `;
      case 'bottom':
        return `
          top: 110%;
          left: 50%;
          transform: translateX(-50%);
          &:before {
            bottom: 100%;
            left: 50%;
            border-bottom-color: #333;
            border-top: 0;
         
          }
        `;
      case 'left':
        return `
          top: 50%;
          right: 110%;
          transform: translateY(-50%);
          &:before {
            top: 50%;
            right: -6%;
            border-left-color: #333;
            border-right: 0;
           
          }
        `;
      case 'right':
        return `
          top: 50%;
          left: 110%;
          transform: translateY(-50%);
          &:before {
            top: 50%;
            left: -6%;
            border-right-color: #333;
            border-left: 0;
          
          }
        `;
      default:
        return '';
    }
  }}
`;

 const Tooltip=(props)=>{
    const [showTooltip, setShowTooltip] = useState(false);

  const handleMouseEnter = () => {
    setShowTooltip(true);
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
  };

   return(
     <TooltipContainer onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        {props.children}
        {showTooltip && <TooltipContentBox position={props.position}>{props.content}</TooltipContentBox>}
     </TooltipContainer>
   )
}
export default Tooltip;