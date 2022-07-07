/* eslint-disable max-len */
import { Component } from '@angular/core';
import { Share } from '@capacitor/share';

import { SocialSharing } from '@awesome-cordova-plugins/social-sharing/ngx';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {


  private bigText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pellentesque massa placerat duis ultricies lacus sed turpis tincidunt id. At ultrices mi tempus imperdiet nulla malesuada pellentesque. Pretium lectus quam id leo in vitae. Id diam vel quam elementum. Vel pharetra vel turpis nunc eget lorem dolor sed viverra. Elementum nibh tellus molestie nunc non blandit massa. Lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi. Sem viverra aliquet eget sit amet. Mus mauris vitae ultricies leo integer. Pretium viverra suspendisse potenti nullam ac tortor vitae. Aliquet bibendum enim facilisis gravida neque convallis a cras semper. Tristique magna sit amet purus gravida quis blandit turpis. Orci a scelerisque purus semper.

  In pellentesque massa placerat duis ultricies. Viverra maecenas accumsan lacus vel facilisis volutpat est velit. Metus vulputate eu scelerisque felis imperdiet proin. Ac tortor vitae purus faucibus. Quis risus sed vulputate odio. Auctor urna nunc id cursus. Lacus vel facilisis volutpat est. Varius sit amet mattis vulputate enim nulla aliquet. Bibendum enim facilisis gravida neque convallis a cras semper. Venenatis tellus in metus vulputate eu scelerisque. Cursus metus aliquam eleifend mi in nulla posuere sollicitudin aliquam. Integer vitae justo eget magna fermentum iaculis. Orci nulla pellentesque dignissim enim. Lectus urna duis convallis convallis tellus id interdum velit. Aliquet risus feugiat in ante metus. Aliquet risus feugiat in ante.`;


  private smallText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`;

  constructor(private socialSharing: SocialSharing) { }

  async onWebShareClicked() {

    const shareData = {
      title: 'MDN',
      text: this.bigText,
      // text: 'Learn web development on MDN!',
      url: 'https://developer.mozilla.org'
    };

    try {

      await navigator.share(shareData);

      console.log('MDN shared successfully');

    } catch (err) {

      console.error(err);

    }

  }

  async onSocialShareClicked() {

    this.socialSharing.share(this.bigText);
    // this.socialSharing.share('Are We Having Fun Now?');

  }


  async onShareClicked(useBigText: boolean) {

    const subject = `Sharing ${(useBigText ? 'Big' : 'Small')} Text`;

    let textToShare = this.smallText;

    if (useBigText) {
      textToShare = this.bigText;
    }

    const myShare = await Share.share({
      title: subject,
      text: textToShare,
      url: 'https://www.myspiritualtoolkit.com',
      dialogTitle: 'Share with friends',
    }).catch((err) => {

      if (err.message !== 'Share canceled') {


        console.error(err, 'My Share Error');

      }

    });

    console.log(myShare, 'myShare');


  }


}
