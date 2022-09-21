import './_functions';
import Accordion from 'accordion-js';

let accordion = new Accordion('.accordion-container', {
  // animation duration in ms {number} 
  duration: 600, 
  // add ARIA elements to the HTML structure {boolean}
  ariaEnabled: true, 
  // allow collapse expanded panel {boolean}
  collapse: true, 
  // show multiple elements at the same time {boolean}
  showMultiple: false, 
  // disabling this option will find all items in the container {boolean}
  onlyChildNodes: true, 
  // show accordion elements during initialization {array}
  openOnInit: [], 
  // element class {string}
  elementClass: 'ac', 
  // trigger class {string}
  triggerClass: 'ac-trigger', 
  // panel class {string}
  panelClass: 'ac-panel', 
  // active element class {string}
  activeClass: 'is-active'
  
});