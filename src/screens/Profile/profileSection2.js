import React from "react";
import './profileSection2.css'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

const ProfileSection2 = (props) => {

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "YOUR_API_KEY"
    })

    const [map, setMap] = React.useState(null)

    const center = {
        lat: -3.745,
        lng: -38.523
    };

    const containerStyle = {
        width: '100%',
        height: '380px'
    };

    const onLoad = React.useCallback(function callback(map) {
        // This is just an example of getting and using the map instance!!! don't just blindly copy!
        const bounds = new window.google.maps.LatLngBounds(center);
        map.fitBounds(bounds);

        setMap(map)
    }, [])

    const onUnmount = React.useCallback(function callback(map) {
        setMap(null)
    }, [])




    return (
        <div>

            <div className="profile-section-2-details-address">
                Address :
            </div>

            <div className="profile-section-2-details-wrapper">
                <div>
                    <table>
                        <td className="profile-section-2-details-heaading">
                            Street
                        </td>
                        <td className=".profile-section-2-details-semicolon">
                            :
                        </td>
                        <td className="profile-section-2-details-answer">
                            {props?.userData?.address?.street}
                        </td>
                    </table>

                    <table>
                        <td className="profile-section-2-details-heaading">
                            Suite
                        </td>
                        <td className=".profile-section-2-details-semicolon">
                            :
                        </td>
                        <td className="profile-section-2-details-answer">
                            {props?.userData?.address?.suite}
                        </td>
                    </table>

                    <table>
                        <td className="profile-section-2-details-heaading">
                            City
                        </td>
                        <td className=".profile-section-2-details-semicolon">
                            :
                        </td>
                        <td className="profile-section-2-details-answer">
                            {props?.userData?.address?.city}
                        </td>
                    </table>

                    <table>
                        <td className="profile-section-2-details-heaading">
                            Zipcode
                        </td>
                        <td className=".profile-section-2-details-semicolon">
                            :
                        </td>
                        <td className="profile-section-2-details-answer">
                            {props?.userData?.address?.zipcode}
                        </td>
                    </table>
                </div>
            </div>

            <div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.0560163691994!2d77.50352317375155!3d12.968267414954044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3c2da2e68f01%3A0x4c3a209539881a1b!2sDigital%20Shark%20Technology%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1689663644650!5m2!1sen!2sin" width="100%" height="350" allowfullscreen="" loading="lazy" style={{border : '0px'}} referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>


            <div className="profile-section-2-details-geo-wrapper">
                <div className="profile-section-2-details-geo-lat-heading">
                    Lat :
                </div>
                <div className="profile-section-2-details-geo-lat">
                    {props?.userData?.address?.geo.lat}
                </div>
                <div className="profile-section-2-details-geo-lng-heading">
                    Lang :
                </div>
                <div className="profile-section-2-details-geo-lng">
                    {props?.userData?.address?.geo.lng}
                </div>

            </div>
        </div>
    )

}

export default ProfileSection2;