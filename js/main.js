import React from 'react';
import ReactDOM from 'react-dom';
import ExampleWork from './example-work'

const myWork = [
  {
    'title': "My Certifications",
    'href': "./Certification.html",
    'desc': "Certifications are not a cover up for lack of experience, but they are a value add and also add credibility.",
    'image': {
      'desc': "example screenshot of a project involving code",
      'src': "images/Certification.jpg",
      'comment': ""
    }
  },
  {
    'title': "My Skills",
    'href': "https://example.com",
    'desc': "Few of the technology skills that I am either learning, comfortable or good at...",
    'image': {
      'desc': "My Skills",
      'src': "images/Skills.png",
      'comment': ""
    }
  },
  {
    'title': "Work Example",
    'href': "https://example.com",
    'desc': "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    'image': {
      'desc': "example screenshot of a project involving cats",
      'src': "images/example3.png",
      'comment': `"Bengal cat" by roberto shabs is licensed under CC BY 2.0
                  https://www.flickr.com/photos/37287295@N00/2540855181`
    }
  }
]

ReactDOM.render(<ExampleWork work={myWork}/>, document.getElementById('example-work'))
