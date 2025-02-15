import RoomIcon from "@mui/icons-material/Room";
import PropTypes from 'prop-types';

export default function Entry(props) {
    return (
        <article className="entry">
            <img className="entry-img" src={props.loc.image} alt={props.loc.imageAlt} />
            <div className="entry-text">
                <div className="entry-text-location">
                    <RoomIcon className="marker-icon" />
                    <span className="country-name">{props.loc.country}</span>
                    <a href={props.loc.location}className="gps-location">View on google maps</a>
                </div>
                <h3 className="entry-title">{props.loc.title}</h3>
                <p className="entry-time">{props.loc.time}</p>
                <p className="entry-description">{props.loc.description}</p>
            </div>
        </article>
    );
}

Entry.propTypes = {
    loc: PropTypes.object,
    image: PropTypes.string,
    imageAlt: PropTypes.string,
    country: PropTypes.string,
    location: PropTypes.string,
    title: PropTypes.string,
    time: PropTypes.string,
    description: PropTypes.string,
}

