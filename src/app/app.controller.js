import facebookSocialSvg from './assets/social/facebook-white.svg';
import twitterSocialSvg from './assets/social/twitter-white.svg';
import instagramSocialSvg from './assets/social/instagram-white.svg';

import appStoreSvg from './assets/store/app-store.svg';
import playStoreSvg from './assets/store/play-store.svg';
import windowsStoreSvg from './assets/store/windows-store.svg';
import $ from 'jquery';

export default class AppController {
  /*@ngInject;*/
  constructor() {
    let vm = this;

    $('#facebookSocialSvg').html(facebookSocialSvg);
    $('#twitterSocialSvg').html(twitterSocialSvg);
    $('#instagramSocialSvg').html(instagramSocialSvg);

    $('#appStoreSvg').html(appStoreSvg);
    $('#playStoreSvg').html(playStoreSvg);
    $('#windowsStoreSvg').html(windowsStoreSvg);

  }
}