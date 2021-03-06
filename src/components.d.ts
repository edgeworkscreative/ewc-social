/**
* This is an autogenerated file created by the Stencil compiler.
* It contains typing information for all components that exist in this project.
*/
/* tslint:disable */

import '@stencil/core';

import 'ionicons';


export namespace Components {

  interface EwcSocial {
    'facebook': string;
    'googlePlus': string;
    'instagram': string;
    'labels': boolean;
    'linkedin': string;
    'pinterest': string;
    'snapchat': string;
    'twitter': string;
    'vimeo': string;
    'youtube': string;
  }
  interface EwcSocialAttributes extends StencilHTMLAttributes {
    'facebook'?: string;
    'googlePlus'?: string;
    'instagram'?: string;
    'labels'?: boolean;
    'linkedin'?: string;
    'pinterest'?: string;
    'snapchat'?: string;
    'twitter'?: string;
    'vimeo'?: string;
    'youtube'?: string;
  }
}

declare global {
  interface StencilElementInterfaces {
    'EwcSocial': Components.EwcSocial;
  }

  interface StencilIntrinsicElements {
    'ewc-social': Components.EwcSocialAttributes;
  }


  interface HTMLEwcSocialElement extends Components.EwcSocial, HTMLStencilElement {}
  var HTMLEwcSocialElement: {
    prototype: HTMLEwcSocialElement;
    new (): HTMLEwcSocialElement;
  };

  interface HTMLElementTagNameMap {
    'ewc-social': HTMLEwcSocialElement
  }

  interface ElementTagNameMap {
    'ewc-social': HTMLEwcSocialElement;
  }


  export namespace JSX {
    export interface Element {}
    export interface IntrinsicElements extends StencilIntrinsicElements {
      [tagName: string]: any;
    }
  }
  export interface HTMLAttributes extends StencilHTMLAttributes {}

}
