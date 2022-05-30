import React from 'react';

const Options = React.forwardRef((props, ref) => {
  return (
    <form className="dropdown" onSubmit={props.handleNext} ref={ref}>
      <div className="country dropdown-container">
        <div className="sub_heading">country</div>
        <div className="btns">
          <div className="btn">
            <label htmlFor="us">US</label>
            <input
              type="radio"
              name="country"
              id="us"
              value="us"
              onChange={props.setCountry}
            />
          </div>
          <div className="btn">
            <label htmlFor="in">IND</label>
            <input
              type="radio"
              name="country"
              id="in"
              value="in"
              onChange={props.setCountry}
            />
          </div>
        </div>
      </div>
      <div className="language dropdown-container">
        <div className="sub_heading">language</div>
        <div className="btns">
          <div className="btn">
            <label htmlFor="en">English</label>
            <input
              type="radio"
              name="language"
              id="en"
              value="en"
              onChange={props.setLanguage}
            />
          </div>
          <div className="btn">
            <label htmlFor="fr">French</label>
            <input
              type="radio"
              name="language"
              id="fr"
              value="fr"
              onChange={props.setLanguage}
            />
          </div>
        </div>
      </div>
      <div className="category dropdown-container">
        <div className="sub_heading">category</div>
        <div className="btns">
          <div className="btn">
            <label htmlFor="business">business</label>
            <input
              type="radio"
              name="category"
              id="business"
              value="business"
              onChange={props.setCategory}
            />
          </div>
          <div className="btn">
            <label htmlFor="entertainment">entertainment</label>
            <input
              type="radio"
              name="category"
              id="entertainment"
              value="business"
              onChange={props.setCategory}
            />
          </div>
          <div className="btn">
            <label htmlFor="general">general</label>
            <input
              type="radio"
              name="category"
              id="general"
              value="general"
              onChange={props.setCategory}
            />
          </div>
          <div className="btn">
            <label htmlFor="health">health</label>
            <input
              type="radio"
              name="category"
              id="health"
              value="health"
              onChange={props.setCategory}
            />
          </div>
          <div className="btn">
            <label htmlFor="science">science</label>
            <input
              type="radio"
              name="category"
              id="science"
              value="science"
              onChange={props.setCategory}
            />
          </div>
          <div className="btn">
            <label htmlFor="sports">sports</label>
            <input
              type="radio"
              name="category"
              id="sports"
              value="sports"
              onChange={props.setCategory}
            />
          </div>
          <div className="btn">
            <label htmlFor="technology">technology</label>
            <input
              type="radio"
              name="category"
              id="technology"
              value="technology"
              onChange={props.setCategory}
            />
          </div>
        </div>
      </div>
      <div className="submit_form">
        <input type="submit" value="Next" />
      </div>
    </form>
  );
});

export default Options;
