import React from 'react';

class TextContainer extends React.Component {
  render() {
    return (
      <div className="text-container">
        <h2>Michelle Scharlock</h2>

        <h3 id="contact"> 425.956.4966​ |​ mscharlock@gmail.com​​ |​ Sammamish,​ WA​ ​| linkedin.com/in/mscharlock​​​ |​ github.com/mscharlock</h3>

        <h3 id="explanatory-blurb">Self-motivated​ ​software​ ​developer​ with​ a ​love​ of​ all​ things​ ​front-end,​ especially​ accessible​ and​ ​clean​ design. A​ combined​ background​ in​ account-based​ PR​ work​ and​ full​-stack​ software​ development​ (MERN)​ allows​ her to​​ transform​ MVP​ technical​ ​requirements​​ into​ ​delivered​ ​KPIs​ ​for​ internal​ and​ external​ stakeholders.</h3>

        <h3>Skills</h3>
        <p><span>Intermediate Skills:</span> JavaScript (ES6), React,​ Redux, Node.js, Express, MongoDB, Postgres, SQL, Sass, CSS 3, HTML 5, jQuery, Page.js, Adobe Photoshop & InDesign, Wordpress</p>
        <p><span>Beginner Skills:</span> Webpack, Babel</p>
        <p><span>Adept at:</span> Test driven development (TDD) using Jest, Continuous deployment using Travis CI, Project management using agile methods such as scrum and project planning tools like Github Projects and Asana</p>

        <h3>Education</h3>
        <h4>Code Fellows</h4>
        <p> Seattle, WA | Graduated 10/2017 </p>
        <p> Certificate in Advanced​ ​ JavaScript,​ ​ focusing​ ​ on​ ​ the​ ​ MERN​ ​ Stack​ ​ (MongoDB,​ ​ Express,​ ​ React,​ ​ Node)</p>
        <h4>McGill University</h4>
        <p>Montreal,​ ​QC​ | ​11/2010</p>
        <p> Graduated​ ​ BA​ ​ English,​ ​ minor​ ​ Italian​ ​ civilization</p>
        <p>Other activities: Operatic voice lessons with Madame Villeneuve-Evans, Opera McGill, Design Editor of The Phonograph newspaper</p>

        <h3>Recent Work Experience</h3>
        <h4>Ronald McDonald House Charities®​ of Western Washington & Alaska</h4>
        <h4>Communications Manager</h4>
        <p className="dates">6/2015 - 4/2017</p>
        <ul>
          <li>Rebuilt website using Wordpress and plugins to comply with McDonald’s​ Corporate Accessibility specifications</li>
          <li>Maintained and updated SQL Database (through Blackbaud) containing all donors for email CRM purposes</li>
          <li>Through analysis and segmentation of donor database and email performance, earned over $100,000 for the organization in one year. Increased open rates by up to 68% for email newsletter.</li>
          <li>Implemented the organization’s​ first radiothon, using text-to-give mobile giving (using @Pay), resulting in $2500 in donations and increased public awareness of mission. </li>
        </ul>

        <h4>Waggener Edstrom</h4>
        <h4>Account Coordinator & Intern</h4>
        <p className="dates">3/2014 - 2/2015</p>
        <ul>
          <li>Served as project manager on various major announcements regarding Microsoft’s​ Big Data platform products, such as SQL Server, Azure Machine Learning, and others. </li>
          <li>Won Rock Star agency-wide award for quality work and interactions with clients.</li>
        </ul>

      </div>
    );
  }
}

export default TextContainer;
