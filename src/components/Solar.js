import React from 'react';
import './../styles/solar.css';
import Header from './Header';

function Solar() {

    
  const handleToggleData = (e) => {
    e.preventDefault();
    const dataDiv = document.getElementById('data');
    dataDiv.classList.toggle('data-open');
    dataDiv.classList.toggle('data-close');
  };

  const handleToggleControls = (e) => {
    e.preventDefault();
    const controlsDiv = document.getElementById('controls');
    controlsDiv.classList.toggle('controls-open');
    controlsDiv.classList.toggle('controls-close');
  };

  const handlePlanetClick = (e) => {
    e.preventDefault();
    const target = e.target;
    const planetDivs = document.querySelectorAll('#data a');
    planetDivs.forEach((planetDiv) => {
      planetDiv.classList.remove('active');
    });
    target.classList.add('active');

    // Handle changing the solar system view based on the clicked planet
    const planetClass = target.classList[0]; // Assuming planet className is the first className
    const solarSystemDiv = document.getElementById('solar-system');
    solarSystemDiv.className = planetClass;
  };

  return (
    <div className="opening hide-UI view-2D zoom-large data-close controls-close">
      
      {/* <div id="navbar">
        <a id="toggle-data" href="#data" onClick={handleToggleData}><i className="icon-data"></i>Data</a>
        <h1>3D Solar System<br /><span>by <a href="https://twitter.com/JulianGarnier" target="_blank">@JulianGarnier</a></span></h1>
        <a id="toggle-controls" href="#controls" onClick={handleToggleControls}><i className="icon-controls"></i>Controls</a>
      </div> */}
      <div id="data" className="data-close">
        <a className="sun" title="sun" href="#sunspeed" onClick={handlePlanetClick}>Sun</a>
        <a className="mercury" title="mercury" href="#mercuryspeed" onClick={handlePlanetClick}>Mercury</a>
        <a className="venus" title="venus" href="#venusspeed" onClick={handlePlanetClick}>Venus</a>
        <a className="earth active" title="earth" href="#earthspeed" onClick={handlePlanetClick}>Earth</a>
        <a className="mars" title="mars" href="#marsspeed" onClick={handlePlanetClick}>Mars</a>
        <a className="jupiter" title="jupiter" href="#jupiterspeed" onClick={handlePlanetClick}>Jupiter</a>
        <a className="saturn" title="saturn" href="#saturnspeed" onClick={handlePlanetClick}>Saturn</a>
        <a className="uranus" title="uranus" href="#uranusspeed" onClick={handlePlanetClick}>Uranus</a>
        <a className="neptune" title="neptune" href="#neptunespeed" onClick={handlePlanetClick}>Neptune</a>
      </div>
      <div id="controls" className="controls-close">
        <label className="set-view">
          <input type="checkbox" />
        </label>
        <label className="set-zoom">
          <input type="checkbox" />
        </label>
        <label>
          <input type="radio" className="set-speed" name="scale" defaultChecked />
          <span>Speed</span>
        </label>
        <label>
          <input type="radio" className="set-size" name="scale" />
          <span>Size</span>
        </label>
        <label>
          <input type="radio" className="set-distance" name="scale" />
          <span>Distance</span>
        </label>
      </div>
      <div id="universe" className="scale-stretched">
        <div id="galaxy">
          <div id="solar-system" className="earth">
            <div id="mercury" className="orbit">
              <div className="pos">
                <div className="planet">
                  <dl className="infos">
                    <dt>Mercury</dt>
                    <dd><span></span></dd>
                  </dl>
                </div>
              </div>
            </div>
            <div id="venus" className="orbit">
            <div className="pos">
              <div className="planet">
                <dl className="infos">
                  <dt>Venus</dt>
                  <dd><span></span></dd>
                </dl>
              </div>
            </div>
          </div>
          <div id="earth" className="orbit">
            <div className="pos">
              <div className="orbit">
                <div className="pos">
                  <div className="moon"></div>
                </div>
              </div>
              <div className="planet">
                <dl className="infos">
                  <dt>Earth</dt>
                  <dd><span></span></dd>
                </dl>
              </div>
            </div>
          </div>
          <div id="mars" className="orbit">
            <div className="pos">
              <div className="planet">
                <dl className="infos">
                  <dt>Mars</dt>
                  <dd><span></span></dd>
                </dl>
              </div>
            </div>
          </div>
          <div id="jupiter" className="orbit">
            <div className="pos">
              <div className="planet">
                <dl className="infos">
                  <dt>Jupiter</dt>
                  <dd><span></span></dd>
                </dl>
              </div>
            </div>
          </div>
          <div id="saturn" className="orbit">
            <div className="pos">
              <div className="planet">
                <div className="ring"></div>
                <dl className="infos">
                  <dt>Saturn</dt>
                  <dd><span></span></dd>
                </dl>
              </div>
            </div>
          </div>
          <div id="uranus" className="orbit">
            <div className="pos">
              <div className="planet">
                <dl className="infos">
                  <dt>Uranus</dt>
                  <dd><span></span></dd>
                </dl>
              </div>
            </div>
          </div>
          <div id="neptune" className="orbit">
            <div className="pos">
              <div className="planet">
                <dl className="infos">
                  <dt>Neptune</dt>
                  <dd><span></span></dd>
                </dl>
              </div>
            </div>
          </div>
            <div id="sun">
              <dl className="infos">
                <dt>Sun</dt>
                <dd><span></span></dd>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Solar;
