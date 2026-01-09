import React from "react";
import "material-icons/iconfont/material-icons.css";
import Button from "./Button";

function Banner({
  backgroundType,
  containerType,
  buttonText,
  buttonLink,
  textType,
  altText,
  images = [],
  showLineUpTitle = false,
  showMainText = false,
}) {
  return (
    <section className="bannerHeader">
      <div className={backgroundType}>
        <div className={containerType}>
          {showLineUpTitle && <h2 className="lineUpTitle">Line <br/>Up</h2>}

          <div className="imagesWrapper">
            {images.map((imgSrc, index) => (
              <img key={index} src={imgSrc} alt={altText} />
            ))}
          </div>

          {buttonText && buttonLink && (
            <Button
              text={buttonText}
              link={buttonLink}
              className="button buttonHeader"
            />
          )}

          {showMainText && (
            <div className="bannerDate">
              <h1 >&lt; <span>10</span> && <span>11</span> /&gt; </h1>
              <h2>de agosto</h2>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Banner;
