import RoomIcon from "@mui/icons-material/Room";
import JapanImage from "../assets/japan.png";
export default function Entry() {
    return (
        <article className="entry">
            <img className="entry-img" src={JapanImage} alt="japan image" />
            <div className="entry-text">
                <div className="entry-text-location">
                    <RoomIcon className="marker-icon" />
                    <span className="country-name">india</span>
                    <a className="gps-location">View on google maps</a>
                </div>
                <h3 className="entry-title">Mount Fuji</h3>
                <p className="entry-time">12 Jan, 2023 - 24 Jan, 2023</p>
                <p className="entry-description">
                    Mount Fuji is the tallest mountain in Japan, standing at
                    3,776 meters (12,380 feet). Mount Fuji is the single most
                    popular tourist site in Japan, for both Japanese and foreign
                    tourists.
                </p>
            </div>
        </article>
    );
}
