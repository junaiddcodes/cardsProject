import React from "react";

const EditBacksideVertical = () => {
  return (
    <div>
      <h3 className="upload-card-heading">Choose Backside</h3>
      <section className="upload-photo-sec">
        <div className="blank-card"></div>
        <div className="choose-card-back">
          <div className="upload-photo-card-heading">
            <h3>Choose Card Back</h3>
          </div>
          <section className="choose-card-checks">
            <div className="card-column">
              <div className="check-box">
                <input type="radio" id="blank" name="blank" value="blank" />
                <img src="../../svgIcons/blank.svg" alt="" />
              </div>
              <div className="check-box">
                <input type="radio" id="blank" name="blank" value="blank" />
                <img src="../../svgIcons/blank.svg" alt="" />
              </div>
            </div>
            <div className="card-column">
              <div className="check-box"></div>
              <div className="check-box"></div>
            </div>
            <div className="card-column">
              <div className="check-box"></div>
              <div className="check-box"></div>
            </div>
          </section>
          <button style={{ width: "90%", marginBottom: "1rem" }} className="btn-customize">
            Save and Continue
          </button>
        </div>
      </section>
    </div>
  );
};

export default EditBacksideVertical;
