import React, {useRef, useState} from 'react';
import "./list.scss";
import ArrowBackIosOutlinedIcon from '@mui/icons-material/ArrowBackIosOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import ListItem from '../listItem/ListItem';


// 19 list as props
const List = ({list}) => {

  const [isMoved, setIsMoved] = useState(false);
  const [slideNumber, setSlideNumber] = useState(0);
  const [clickLimit, setClickLimit] = useState(window.innerWidth / 230);

  const listRef = useRef();
  const handleClick = (direction) => {
    setIsMoved(true);
    let distance = listRef.current.getBoundingClientRect().x - 50;
    if ( direction === "left" && slideNumber > 0)
    {
        setSlideNumber(slideNumber - 1);
        listRef.current.style.transform = `translateX(${230 + distance}px)`;
    }
    if ( direction === "right" && slideNumber < 10 - clickLimit )
    {
        setSlideNumber(slideNumber + 1);
        listRef.current.style.transform = `translateX(${-230 + distance}px)`;
    }
  }  
  return (
    <div className="list">
      {/* 20 */}
      <span className="listTitle">{list.title}</span>
      <div className="wrapper">
        <ArrowBackIosOutlinedIcon className="sliderArrow left" onClick={() => handleClick("left")} style={{display: !isMoved && "none"}}>
        </ArrowBackIosOutlinedIcon>
        <div className="container" ref={listRef}>
          {/* <ListItem index={0} />
          <ListItem index={1} />
          <ListItem index={2} />
          <ListItem index={3} />
          <ListItem index={4} />
          <ListItem index={5} />
          <ListItem index={6} />
          <ListItem index={7} />
          <ListItem index={8} />
          <ListItem index={9} /> */}

          {/* 21 */}
          {list.content.map((item, i) => 
              <ListItem index={i} item={item}/>
          )}
        </div>
        <ArrowForwardIosOutlinedIcon className="sliderArrow right" onClick={() => handleClick("right")}></ArrowForwardIosOutlinedIcon>
      </div>
    </div>
  )
}

export default List