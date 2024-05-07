import React from "react";
import "./styles.css";

const SlideShow = () => {
    return (
        <div className="slide-show position-relative">
            <div className="slide-show-top position-absolute w-100 left-0">
            </div>
            <div className="slide-item">
                <iframe width="420" height="315" src="https://www.youtube.com/embed/NbKB3OAEjno?si=7KX-Q9zQhlSalSeZ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <span className="slide-item-desc">
                    <span className="slide-item-desc-title">TheHummingbirdNetwork </span>
                    Meet our new collabrator, the newbie star from China blah blah blah blah
                </span>
            </div>
            <div className="slide-item">
                <iframe width="420" height="315" src="https://www.youtube.com/embed/NbKB3OAEjno?si=7KX-Q9zQhlSalSeZ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <span className="slide-item-desc">
                    <span className="slide-item-desc-title">TheHummingbirdNetwork </span>
                    Meet our new collabrator, the newbie star from China blah blah blah blah
                </span>
            </div>
            <div className="slide-item">
                <iframe width="420" height="315" src="https://www.youtube.com/embed/NbKB3OAEjno?si=7KX-Q9zQhlSalSeZ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <span className="slide-item-desc">
                    <span className="slide-item-desc-title">TheHummingbirdNetwork </span>
                    Meet our new collabrator, the newbie star from China blah blah blah blah
                </span>
            </div>
        </div>
    )
}

export default SlideShow;