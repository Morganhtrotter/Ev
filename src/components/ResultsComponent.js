import React, { Component } from 'react';
import { Button } from 'reactstrap';
import BarChart from './BarChart.js';
import ContactUs from './ContactUs.js';
import emailjs from 'emailjs-com';

class Results extends Component {
  render() {
    var overall = 0;
    var fieldingOverall = 0;
    var hittingOverall = 0;
    var throwingOverall = 0;
    var fieldingFirst = 0;
    var fieldingSecond = 0;
    var fieldingThird = 0;
    var throwingFirst = 0;
    var throwingSecond = 0;
    var throwingThird = 0;
    var hittingFirst = 0;
    var hittingSecond = 0;
    var hittingThird = 0;
    var fieldingLevel = 0;
    var throwingLevel = 0;
    var hittingLevel = 0;

    if (this.props.fielding.length > 0) {
      fieldingFirst = this.props.fielding[this.props.fielding.length - 1].rating;
      fieldingSecond = this.props.fielding[this.props.fielding.length - 1].author;
      fieldingThird = this.props.fielding[this.props.fielding.length - 1].comment;
      fieldingOverall = Math.round(((parseInt(fieldingFirst) + parseInt(fieldingSecond) + parseInt(fieldingThird)) / 3) * 100) / 100;
      if ((fieldingOverall >= 20) && (fieldingOverall < 40)) {
        fieldingLevel = 1;
      } else if ((fieldingOverall >= 40) && (fieldingOverall < 60)) {
        fieldingLevel = 2;
      } else {
        fieldingLevel = 3;
      }
      throwingFirst = this.props.throwing[this.props.throwing.length - 1].rating;
      throwingSecond = this.props.throwing[this.props.throwing.length - 1].author;
      throwingThird = this.props.throwing[this.props.throwing.length - 1].comment;
      throwingOverall = Math.round(((parseInt(throwingFirst) + parseInt(throwingSecond) + parseInt(throwingThird)) / 3) * 100) / 100;
      if ((throwingOverall >= 20) && (throwingOverall < 40)) {
        throwingLevel = 1;
      } else if ((throwingOverall >= 40) && (throwingOverall < 60)) {
        throwingLevel = 2;
      } else {
        throwingLevel = 3;
      }
      hittingFirst = this.props.hitting[this.props.hitting.length - 1].rating;
      hittingSecond = this.props.hitting[this.props.hitting.length - 1].author;
      hittingThird = this.props.hitting[this.props.hitting.length - 1].comment;
      hittingOverall = Math.round(((parseInt(hittingFirst) + parseInt(hittingSecond) + parseInt(hittingThird)) / 3) * 100) / 100;
      if ((hittingOverall >= 20) && (hittingOverall < 40)) {
        hittingLevel = 1;
      } else if ((hittingOverall >= 40) && (hittingOverall < 60)) {
        hittingLevel = 2;
      } else {
        hittingLevel = 3;
      }
      overall = Math.round(((fieldingOverall + throwingOverall + hittingOverall) / 3) * 100) / 100;
    }
    console.log(fieldingFirst);
    const fieldingArray = [fieldingFirst, fieldingSecond, fieldingThird];
    const throwingArray = [throwingFirst, throwingSecond, throwingThird];
    const hittingArray = [hittingFirst, hittingSecond, hittingThird];

    function sendEmail(e) {
      e.preventDefault();

      emailjs.sendForm('service_uoxbo6m', 'template_arpnkvi', e.target, 'user_q6DaYgZSgQhSV6M8rqacG')
        .then((result) => {
            console.log(result.text);
            alert("Email Successfully Sent!");
        }, (error) => {
            console.log(error.text);
            alert("Error Sending Email: " + error.text);
        });
    }

    return(
      <div className="container">
        <div className="col-12 col-md-9 pt-3">
          <h1>Breakdown</h1>
          <div id="fieldingchart">
            <BarChart fieldingdata={fieldingArray} throwingdata={throwingArray} hittingdata={hittingArray} overall={overall}/>
          </div>
          <p>Based on your score of {fieldingOverall}, you have been placed in fielding level {fieldingLevel}.</p>
          <div>{(fieldingLevel === 1) && <Button className="mb-3" href="https://www.tadball.com/post/throwing-fundamentals-throwing-clinic-session-i-recap" color="primary">Level 1 Curriculum</Button>}</div>
          <div>{(fieldingLevel === 2) && <Button className="mb-3" href="https://www.tadball.com/" color="primary">Level 2 Curriculum</Button>}</div>
          <div>{(fieldingLevel === 3) && <Button className="mb-3" href="https://www.tadball.com/" color="primary">Level 3 Curriculum</Button>}</div>
          <p>Based on your score of {throwingOverall}, you have been placed in throwing level {throwingLevel}.</p>
          <div>{(throwingLevel === 1) && <Button className="mb-3" href="https://www.tadball.com/" color="primary">Level 1 Curriculum</Button>}</div>
          <div>{(throwingLevel === 2) && <Button className="mb-3" href="https://www.tadball.com/" color="primary">Level 2 Curriculum</Button>}</div>
          <div>{(throwingLevel === 3) && <Button className="mb-3" href="https://www.tadball.com/" color="primary">Level 3 Curriculum</Button>}</div>
          <p>Based on your score of {hittingOverall}, you have been placed in hitting level {hittingLevel}.</p>
          <div>{(hittingLevel === 1) && <Button className="mb-3" href="https://www.tadball.com/post/hitting-101" color="primary">Level 1 Curriculum</Button>}</div>
          <div>{(hittingLevel === 2) && <Button className="mb-3" href="https://www.tadball.com/" color="primary">Level 2 Curriculum</Button>}</div>
          <div>{(hittingLevel === 3) && <Button className="mb-3" href="https://www.tadball.com/" color="primary">Level 3 Curriculum</Button>}</div>
          <form className="contact-form" onSubmit={sendEmail}>
            <label>Name</label>
            <input type="text" name="to_name" />
            <br />
            <label>Email</label>
            <input type="email" name="user_email" />
            <br />
            <label>Message</label>
            <textarea name="message" />
            <br />
            <input type="hidden" name="fielding_one" value={fieldingFirst} />
            <input type="hidden" name="throwing_one" value={throwingFirst} />
            <input type="hidden" name="hitting_one" value={hittingFirst} />
            <input type="submit" value="Send" />
          </form>
        </div>
      </div>
    );
  }
}

export default Results;