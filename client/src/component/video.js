import React, { useEffect, useRef, useState } from 'react';

const VideoModal = (props) => {
    const [error, setError] = useState(null)
    const [videoUrl, setVideoSrc] = useState("movie.mp4")
    const videoRef = useRef(null);

    useEffect(async () => {
        let res = await axios({
            url: "domain/getVedio",
            method: "get"
        }).then((response) => {
            setVideoSrc(response)
        }).catch((error) => {
            setError(error)
        })
    }, []);

    const fastForward = () => {
        videoRef.current.currentTime += 5;
    };

    const revert = () => {
        videoRef.current.currentTime -= 5;
    };

    return (
        <>
            {error && <p style={{color: "red"}}></p>}
            <video 
                ref={videoRef} 
                width="700" height="500" 
                controls>
                <source 
                    src={videoUrl} 
                    type="video/mp4">
                </source>
            </video>
            <div>
                <i 
                    onClick={() => fastForward()} 
                    style={{marginTop: "10px", cursor: "pointer"}}
                    class="fa fa-forward">
                </i>
                <i 
                    onClick={() => revert()} 
                    style={{marginTop: "10px", cursor: "pointer"}}
                    class="fa fa-backward">
                </i>
            </div>
        </>      
    );
}

export default VideoModal;
