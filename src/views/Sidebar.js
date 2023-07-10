import { autopilot, counterLogs, infoBanner, loggerHeader, massMessage, topBanner } from './templates';
import Messenger from '../automations/Messenger';
import Swiper from '../automations/Swiper';
import HideUnanswered from '../automations/HideUnanswered';
import Anonymous from '../automations/Anonymous';
import { waitUntilElementExists } from '../misc/helper';

class Sidebar {
  constructor() {
    setTimeout(() => {
      this.sidebar();
      // console.log("constructor: ", document.querySelector('aside:first-of-type'));

      this.anonymous = new Anonymous();
      this.hideUnanswered = new HideUnanswered();
      this.swiper = new Swiper();
      this.messenger = new Messenger();

      this.events();
    }, 6000);
  }

  insertBefore = (el, referenceNode) => {
    referenceNode.parentNode.insertBefore(el, referenceNode);
  };

  sidebar = () => {
    const el = document.createElement('aside');
    el.className = 'auto-pilot sidebar';
    el.innerHTML = infoBanner;
    // console.log("this: ", document.querySelector('aside:first-of-type'));
    this.insertBefore(
      el,
      document.querySelector('aside:first-of-type') ||
        document
          .querySelector('div[tabindex="-1"]')
          .querySelector('div[style="transform: translateX(0px);"]')
    );

    this.infoBanner = document.querySelector('#infoBanner');

    this.infoBanner.innerHTML = `<nav class='Pos(r)  H(100%) gamepad-control-off'>
          <div class='H(100%)'><div class='Ov(h) Bgc($c-bg-lite-blue) menu Pos(r) H(100%)'>
          <div class='menu__content Bgc(#c1e6f9) Pb(50px) Fz($responsiveLarge)--m H(100%) Ovs(touch) Ovx(h) Ovy(s) Ovsby(n)'>${topBanner}${counterLogs(
      0,
      0
    )}
          ${autopilot}${massMessage}${loggerHeader}<div class="txt max-h-60" style="overflow-y: auto; height: auto;"></div></div></div></div></nav>`;
  };

  events = () => {
    // Auto unmatch
    waitUntilElementExists('img[alt="No Reason"]', () => {
      document.querySelector('ul li:last-of-type button').click();
      document.querySelector('.modal-slide-up div button[type="button"]').click();
    });

    // this.bindCheckbox(this.anonymous.selector, this.anonymous.start, this.anonymous.stop);

    // this.bindCheckbox(this.messenger.newSelector);

    this.bindCheckbox(this.swiper.selector, this.swiper.start, this.swiper.stop);

    this.bindCheckbox(this.messenger.selector, this.messenger.start, this.messenger.stop);

    // this.bindCheckbox(
    //   // this.hideUnanswered.selector,
    //   this.hideUnanswered.start,
    //   this.hideUnanswered.stop
    // );
    for (let i = 1; i <= 10; i++) {
      document.getElementById(`messageToSend${i}`).addEventListener('blur', (e) => {
        localStorage.setItem(
          `TinderAutopilot/MessengerDefault${i}`,
          JSON.stringify(e.target.value)
        );
      });
    }
  };

  bindCheckbox = (selector, start = false, stop = false) => {
    document.querySelector(selector).onclick = (e) => {
      e.preventDefault();

      const isOn = document.querySelector('.start-btn').innerHTML;
      console.log(isOn);
      // toggleCheckbox(selector);
      if (isOn === 'Start') {
        document.getElementById('messageBtn').click();
        document.querySelector('.start-btn').innerHTML = 'Stop';
        start();
      } else {
        stop();
        document.querySelector('.start-btn').innerHTML = 'Start';
      }
    };
  };
}

const getCheckboxValue = (selector) =>
  // document.querySelector(`${selector} .toggleSwitch > div`).className === onToggle;
  console.log('success');

const toggleCheckbox = (selector) => {
  // const isOn = getCheckboxValue(selector);
  // document.querySelector(`${selector} .toggleSwitch > div`).className = isOn ? offToggle : onToggle;
  // document.querySelector(`${selector} .toggleSwitch > div > div`).className = isOn
  //   ? offToggleInner
  //   : onToggleInner;
};

export { getCheckboxValue, toggleCheckbox };

export default Sidebar;
