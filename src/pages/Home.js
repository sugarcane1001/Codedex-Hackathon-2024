import React from 'react';
import '../assets/css/Home.css';

const Home = () => {
  return (
    <div className="home-container">

      <div className="vertical-boxes">
        <div className="vertical-box our-story">
          <h1>OUR STORY</h1>
          <p>
            Founder, Jonathan Li, shares a passion for board games, boba, and delicious food, so he combined them all to become Sip & Play, Park Slope’s first board game cafe. It is a straightforward concept, come in with your friends and family to play any board game from our library of 300+ games! We hope when you visit, you also enjoy our coffee, espresso, boba, sandwiches, and snacks!
          </p>
        </div>
        <div className="vertical-box birthday-package">
          <h1>BIRTHDAY PACKAGES</h1>
          <p>
            <b>Renting the Entire Backroom:</b> <br />
            $350 for 3 hours of game time all to your party! <br /><br />

            <b>Birthday Backroom Packages:</b>
          </p>
          <ul>
            <li>
              $550 Birthday basic package. Have the entire backroom to yourselves and get pizza and soda for the whole party! For ten people, each additional person is +$30.
            </li>
            <li>
              $700 Birthday premium package. Have the entire backroom to yourselves with pizza, soda, unlimited bubble tea, unlimited appetizers and each participant gets a Sip & Play goodie bag! For ten people, each additional person is +$45
            </li>
          </ul>
          <p>
            <i>For any other large party inquiries, click the “Reserve Now!” button.</i>
          </p>
        </div>
        <div className="vertical-box pricing">
          <h1>PRICING</h1>
          <ul>
            <li>
              <b>$10</b> per person for 3 hours (<b>$12</b> on weekends and holidays)
            </li>
            <li>
              Reserving a table is <b>$15</b> per person for 3 hours of gameplay and can be done at the top of the website.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
