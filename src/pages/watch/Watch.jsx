import "./watch.scss";
import { BiArrowBack } from "react-icons/bi";

export default function Watch() {
    return (
        <div className="watch">
            <div className="back">
                <BiArrowBack />
                Home
            </div>
            <video
                className="Video"
                autoPlay
                Progress
                controls
                src="https://static.videezy.com/system/resources/previews/000/043/429/original/0010.mp4"
            ></video>
        </div>
    );
}
