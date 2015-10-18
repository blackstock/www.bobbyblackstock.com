React.render(
  <navBar/>,
  document.getElementById("mainNav")
);

var navBar = React.createClass({
  render: function() {
    return (
      <div className="container-fluid">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse"
                  data-target="#bs-example-navbar-collapse-1">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a className="navbar-brand page-scroll" href="#page-top">Start Bootstrap</a>
        </div>
        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a className="page-scroll" href="#about">About</a>
            </li>
            <li>
              <a className="page-scroll" href="#services">Services</a>
            </li>
            <li>
              <a className="page-scroll" href="#portfolio">Portfolio</a>
            </li>
            <li>
              <a className="page-scroll" href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    )
  }
});