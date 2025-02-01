import React from 'react';
import './Intro.css';

const Intro: React.FC = () => {
  return (
    <>
    <div className="container1">
      <div className="back_color">
        <div className="header">
          <h1>FOOD DONATION</h1>
        </div>
        <div className="quote">
          <p>A meal shared is a smile shared</p>
        </div>
        <div className="intro">
          <p>
            Welcome to Food Donation, where we bridge the gap between abundance
            and need by connecting surplus food to those who hunger, creating a
            world where no one goes to bed hungry.
          </p>
        </div>
        <div className="btn">
          <div>
            <form action="/signup" method="get">
              <button id="b1">SignUp</button>
            </form>
          </div>
          <div>
            <form action="/donlogin" method="get">
              <button id="b2">SignIn</button>
            </form>
          </div>
        </div>
        <div className="in">
          <p>
            Over 30% of daily meals served to those in need and 100,000+ meals
            distributed.
          </p>
        </div>
      </div>
    </div>
    <center>
      <div className="container2">
        <div className="info">
          <p>
            Food donation is the act of giving surplus or unused food to
            individuals or organizations in need, thereby reducing food waste
            and helping to alleviate hunger. It is a compassionate and
            sustainable way to ensure that edible food is distributed to those
            who are less fortunate, promoting social welfare and environmental
            responsibility. Food donations play a crucial role in addressing
            food insecurity and supporting communities around the world.
          </p>
        </div>
        <div className="pic">
          <img
            src="https://www.aahar.org.in/images/img2.jpg"
            alt=""
            height="300px"
            width="300px"
            className="image"
          />
        </div>
      </div>
      <hr />
      <div className="container3">
        <div className="pic">
          <img
            src="https://images.pexels.com/photos/6994982/pexels-photo-6994982.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            height="300px"
            width="300px"
            className="image"
          />
        </div>

        <div className="info">
          <p>
            Food donation is a critical practice that redistributes millions of
            tons of surplus food each year, helping to combat hunger and reduce
            food waste. In the United States alone, it's estimated that over 72
            billion pounds (32.7 million metric tons) of food are donated
            annually, providing sustenance to millions of people while diverting
            food from landfills and reducing greenhouse gas emissions. Food
            donation plays a crucial role in addressing food insecurity and
            promoting environmental sustainability.
          </p>
        </div>
      </div>
    </center>
    <div className="footer">
      <h1>FOOD DONATION</h1>
      <p>Copyright © FOOD DONATION,Inc.</p>
      <p className="p">Helpline</p>
      <a href="#">fooddonation@gmail.com</a>
    </div>
    </>
  );
};

export default Intro;
