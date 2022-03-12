// -------------------------------------------------
//  IMPORTS
// -------------------------------------------------
import React from "react";
import "./App.css";
import Nav from "./Nav.js";


// -------------------------------------------------
//  VARIABLES
// -------------------------------------------------
const page_content = {
  title: "Welcome",
  sub_title: "this is some cool subtext",
  card1: "news update",
  card2: "some cool content",
  card3: "warning",
  card4: "hey",
  stat: "col alert alert-info",
  clickhere: "click",
};


// -------------------------------------------------
//  LOGIC
// -------------------------------------------------

// var title =  prompt('title: ');
// page_content.title = title;

// var sub_title =  prompt('subtext: ');
// page_content.sub_title = sub_title;

// var card_class='col alert alert-';
// var stat = prompt('stat');
// page_content.stat = card_class+stat;

// var card1_news = prompt('card1');
// page_content.card1 = card1_news ;


// -------------------------------------------------
//  RENDER OUTPUT
// -------------------------------------------------

let App = () => {
  return (
    <React.Fragment>
      <Nav />

      <div className="container-fullwidth mx-auto">
        <section>
          <div className="jumbotron align-center App-header pt-5">
            <div className="container">
              <h1 className="display-1">{page_content.title}</h1>
              <p className="lead">{page_content.sub_title}</p>
              <button className="btn btn-primary shadow">
                {page_content.clickhere}
              </button>
            </div>
          </div>
        </section>

        <section>
          <div className="container row pt-5 mx-auto gap-2">
            <h2 className={page_content.stat}>{page_content.card2}</h2>
            <h2 className="col alert alert-success">{page_content.card3}</h2>
            <h2 className="col alert alert-success">{page_content.card4}</h2>
            <h2 className="col alert alert-success">{page_content.card4}</h2>
          </div>

          <div className="container">
            <div className="row pt-5 pb-5">
              <p className="col">
                hello world, this is the end. hi hey hello howdy. hello world,
                this is the end. hi hey hello howdy. hello world, this is the
                end. hi hey hello howdy. hello world, this is the end. hi hey
                hello howdy. hello world, this is the end. hi hey hello howdy.
                hello world, this is the end. hi hey hello howdy. hello world,
                this is the end. hi hey hello howdy. hello world, this is the
                end. hi hey hello howdy. hello world, this is the end. hi hey
                hello howdy. hello world, this is the end. hi hey hello howdy.
                hello world, this is the end. hi hey hello howdy. hello world,
                this is the end. hi hey hello howdy. hello world, this is the
                end. hi hey hello howdy. hello world, this is the end. hi hey
                hello howdy.
              </p>

              <p className="col">
                hello world, this is the end. hi hey hello howdy. hello world,
                this is the end. hi hey hello howdy. hello world, this is the
                end. hi hey hello howdy. hello world, this is the end. hi hey
                hello howdy. hello world, this is the end. hi hey hello howdy.
                hello world, this is the end. hi hey hello howdy.
              </p>
            </div>
          </div>

          <div className="container-fullwidth mx-auto">
            <section>
              <div className="jumbotron align-center App-header pt-5">
                <div className="container">
                  <h1 className="display-1">Footer</h1>
                  <p className="lead">{page_content.sub_title}</p>
                  <button className="btn btn-primary shadow">click me</button>
                </div>
              </div>
            </section>
          </div>
        </section>
      </div>
    </React.Fragment>
  );
};

export default App;
