import {PolymerElement, html} from "@polymer/polymer"
import "@ucd-lib/cork-style"

import template from "./cork-input.html"

export class CorkInput extends PolymerElement {

  static get template() {
    return html([template]);
  }

  static get properties() {
    return {
      value: {
        type : String,
        value : '',
        notify : true,
        observer : '_onValueChange'
      },
      type: {
        type: String,
        value: 'text'
      },
      placeholder: {
        type: String,
        value : ''
      }
    };
  }

  _customChangeEvent() {
    this.value = this.$.input.value;
    
    var payload = {
      bubbles: true, 
      composed: true,
      details : {
        value : this.$.input.value
      }
    }

    this.dispatchEvent(new CustomEvent('change', payload));
  }

  _onKeyUp() {
    if( this.$ && this.$.input && this.$.input.value !== this.value ) {
      this.value = this.$.input.value;
    }
  }

  _onValueChange() {
    if( this.$ && this.$.input && this.$.input.value !== this.value ) {
      this.$.input.value = this.value;
    }
  }
}


customElements.define('cork-input', CorkInput);