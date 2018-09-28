import {Component, Prop} from '@stencil/core';
import 'ionicons';

@Component({
  tag: 'ewc-social',
  styleUrl: 'ewc-social.css',
  shadow: true
})
export class EwcSocial {

  @Prop() facebook: string;
  @Prop() instagram: string;
  @Prop() pinterest: string;
  @Prop() linkedin: string;
  @Prop() twitter: string;
  @Prop() googlePlus: string;
  @Prop() youtube: string;
  @Prop() vimeo: string;
  @Prop() snapchat: string;
  @Prop({mutable:true}) labels: boolean = true;

  render() {
    return (
      <div class="social-container">
        <ul class="social-ul">

          {(this.facebook) ? <li><a href={this.facebook}><ion-icon name="logo-facebook"></ion-icon>{(this.labels) ? 'Facebook' : ''}</a></li> : ''}

          {(this.instagram) ? <li><a href={this.instagram}><ion-icon name="logo-instagram"></ion-icon>{(this.labels) ? 'Instagram' : ''}</a></li> : ''}

          {(this.pinterest) ? <li><a href={this.pinterest}><ion-icon name="logo-pinterest"></ion-icon>{(this.labels) ? 'Pinterest' : ''}</a></li> : ''}

 {(this.linkedin) ? <li><a href={this.linkedin}><ion-icon name="logo-linkedin"></ion-icon>{(this.labels) ? 'Linkedin' : ''}</a></li> : ''}

 {(this.twitter) ? <li><a href={this.twitter}><ion-icon name="logo-twitter"></ion-icon>{(this.labels) ? 'Twitter' : ''}</a></li> : ''}

 {(this.youtube) ? <li><a href={this.youtube}><ion-icon name="logo-youtube"></ion-icon>{(this.labels) ? 'Youtube' : ''}</a></li> : ''}

 {(this.vimeo) ? <li><a href={this.vimeo}><ion-icon name="logo-vimeo"></ion-icon>{(this.labels) ? 'Vimeo' : ''}</a></li> : ''}

 {(this.snapchat) ? <li><a href={this.snapchat}><ion-icon name="logo-snapchat"></ion-icon>{(this.labels) ? 'Snapchat' : ''}</a></li> : ''}

 {(this.googlePlus) ? <li><a href={this.googlePlus}><ion-icon name="logo-googleplus"></ion-icon>{(this.labels) ? 'Google Plus' : ''}</a></li> : ''}

        </ul>
      </div>
    );
  }
}
