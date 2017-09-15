import React from 'react';

class ExampleWorkModal extends React.Component {

  render() {
    let example = this.props.example;
    let modalClass = this.props.open ? 'modal--open' : 'modal--closed';
    let imageSrc=example.image.src;
    imageSrc=imageSrc.replace("images/","");
    imageSrc=imageSrc.replace(".jpg","");
    imageSrc=imageSrc.replace(".png","");


    return (
      <div className={"background--skyBlue " + modalClass +" section--alignCentered"} >
      <link rel="stylesheet" href="node_modules/react-responsive-carousel/lib/styles/carousel.min.css"/>
      <link rel="stylesheet" href="CSS/CarouseCustom.css"/>

      <span className="color--cloud modal__closeButton"
      onClick={this.props.closeModal}>
      <i className="fa fa-window-close-o"></i>
      </span>


      <h3 className="modal__title1">
      { example.title }
      </h3>
      <p className="modal__description1">
      { example.desc  }
      </p>

      <div className={imageSrc =="Certification" ? 'alignDiv' : 'section_invisible'} id="CertificationCarousel-container">tikka</div>

      <div className={imageSrc =="Skills" ? 'alignDiv' : 'section_invisible'} id="SkillCarousel-container">tikka</div>

      <a className={imageSrc =="Work" ? 'color--skyBlue modal__link' : 'section_invisible'}
                  href={ example.href } target="_blank">
                 Check it out
               </a>


      </div>

    )
  };
};

export default ExampleWorkModal;
