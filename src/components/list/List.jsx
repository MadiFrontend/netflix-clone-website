import "./list.scss";
import { RiArrowLeftSLine } from "react-icons/ri";
import { RiArrowRightSLine } from "react-icons/ri";
import Listitem from "../listitem/Listitem";
import { useRef, useState } from "react";

export default function List() {
    const [slideNumber, setSlideNumber] = useState(0);

    const listRef = useRef();

    const HandelClick = (direction) => {
        let distance = listRef.current.getBoundingClientRect().x;
        if (direction === "left" && slideNumber > 0) {
            setSlideNumber(slideNumber - 1)
            listRef.current.style.transform = `translateX(${230 + distance}px)`;
        }
        if (direction === "right" && slideNumber < 5) {
            setSlideNumber(slideNumber + 1)
            listRef.current.style.transform = `translateX(${
                -230 + distance
            }px)`;
        }
    };
    return (
        <div className="list">
            <span className="listTitle">Continue to watch</span>
            <div className="wrapper">
                <RiArrowLeftSLine
                    className="sliderArrow left"
                    onClick={() => HandelClick("left")}
                />
                <div className="container" ref={listRef}>
                    <Listitem />
                    <Listitem />
                    <Listitem />
                    <Listitem />
                    <Listitem />
                    <Listitem />
                    <Listitem />
                    <Listitem />
                    <Listitem />
                    <Listitem />

                </div>
                <RiArrowRightSLine
                    className="sliderArrow right"
                    onClick={() => HandelClick("right")}
                />
            </div>
        </div>
    );
}
