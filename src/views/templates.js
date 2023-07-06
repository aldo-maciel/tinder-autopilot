let defaultMessage = `Hey {name}, this is an automated message to remind you of your upcoming "Netflix and Chill" appointment in the next week. To confirm your appointment text YES DADDY. To unsubscribe, please text WRONG HOLE. Standard text and bill rates do apply. Thanks for choosing Slide N Yo DMs`;

const msg = JSON.parse(localStorage.getItem('TinderAutopilot/MessengerDefault'));
if (msg) {
  defaultMessage = msg;
} else {
  localStorage.setItem('TinderAutopilot/MessengerDefault', JSON.stringify(defaultMessage));
}

const onToggle = `CenterAlign Bdrs(16px) W(50px) H(30px) Bd Pe(n) Trstf(eio) Trsdu($fast) Bdc($c-pink) Bg($c-pink)`;
const onToggleInner = `Bdrs(50%) Bgc(#fff) Bd Sq(28px) Trstf(eio) Trsdu($fast) Bdc($c-pink) TranslateX(10px)`;

const offToggle = `CenterAlign Bdrs(16px) W(50px) H(30px) Bd Pe(n) Trstf(eio) Trsdu($fast) Bdc($c-divider) Bgc($c-divider)`;
const offToggleInner = `Bdrs(50%) Bgc(#fff) Bd Sq(28px) Trstf(eio) Trsdu($fast) Bdc($c-divider) TranslateX(-10px)`;

const topBanner = `
<div class="desktopNavbar Pos(r) Z(2) Trsdu($normal) Tsrdu($regular) CenterAlign Bg($blue-gradient)" style="margin-top: 30px;">
  <a class="Pos(a) D(f) Ai(c) C(#fff) Trsdu($normal) T(50%) Fz($m) Fz($responsiveLarge)--m Fz($ml)--l Whs(nw) Start(50%) Translate(-50%,-50%)" href="/app/profile">
    <span><span>InstaMatch</span></span>
  </a>
</div>
`;

const titleGenerator = (title) =>
  `<h2 class="C($c-pink)--ml C($c-secondary)--s Pend(12px)--s Py(8px) Px(16px) Lts($ls-s) Tt(u) M(0) Fz($xs) Fw($semibold)">${title}</h2>`;

const textboxGenerator = ({ className, placeholder, helpText, defaultValue }) => `
${helpText &&
  `<div class="settings__bottomSubtitle My(14px) Px(12px)--s Px(17px)--ml Lts(0) Fw($regular) C($c-secondary) Fz($xs) Ta(s)">${helpText}</div>`
  }
  <div class="settings__container settings__section Bgc(#fff) BdY Bdc($c-divider)">
      <div class="menuItem Bgc(#fff) Bd focus-visible_Bdc($c-superlike-blue) Bdc(t) Trsdu($fast)">
          <label class="Maw(80%) Ov(h) Tov(e) Py(12px) Cur(p)">
              <div class="D(f) Jc(sb) Ai(c)"></div>
              <div class="menuItem__input Pos(r) W(100%) Cur(t)">
                  <textarea class="Expand D(b) Bd(0) Px(0) Py(15px)" style="color:black;" id="${className}" placeholder="${placeholder}">${defaultValue}</textarea>
              </div>
          </label>
      </div>
  </div>
`;

const checkboxGenerator = (className, label, helpText = '') => `

<div class="Pos(a) W(100%) Pb(16px) D(f) Jc(c) Z(1) B(0) Bgi($primary-gradient-bottom) Bdrs(8px)--ml Pe(n)">
    <a href="#" class="c1p6lbu0 Pe(a) ${className}" style="--tui-button-background: var(--gradient--background-button-primary, none); --tui-button-border: transparent; --tui-button-foreground: var(--color--foreground-button-primary, inherit); --tui-button-overlay: var(--color--interactive-button-primary, inherit); --tui-button-focus: var(--color--border-focus-default, inherit);">
      <div class="tg0j2fo"></div>
      <div class="w1u9t036 ${className}">
        <span class="c9iqosj fk7dtol"></span>
        <div class="c9iqosj f1xhyo4z"></div>
        <div class="l17p5q9z">Start</div>
        <span class="c9iqosj oxn9zzn"></span>
      </div>
    </a>
  </div>
`;

const messageBtnGenerator = (className) => `
  <div style="display:none" class="Pos(a) W(100%) Pb(16px) D(f) Jc(c) Z(1) B(0) Bgi($primary-gradient-bottom) Bdrs(8px)--ml Pe(n)">
    <a href="#" id="messageBtn" class="c1p6lbu0 Pe(a) ${className}" style="--tui-button-background: var(--gradient--background-button-primary, none); --tui-button-border: transparent; --tui-button-foreground: var(--color--foreground-button-primary, inherit); --tui-button-overlay: var(--color--interactive-button-primary, inherit); --tui-button-focus: var(--color--border-focus-default, inherit);">
      <div class="tg0j2fo"></div>
      <div class="w1u9t036 ${className}">
        <span class="c9iqosj fk7dtol"></span>
        <div class="c9iqosj f1xhyo4z"></div>
        <div class="l17p5q9z">Message</div>
        <span class="c9iqosj oxn9zzn"></span>
      </div>
    </a>
  </div>
`

const autopilot = `
  <div class="Mt(20px)--ml Mt(16px)--s">
    ${titleGenerator('Main Settings')}
    ${textboxGenerator({
      helpText: 'The message 1 to send to matches.',
      placeholder: 'Your message to send',
      className: 'messageToSend1',
      defaultValue: "So, you love yoga? 🧘‍♀️ Bet those flexibility skills make for some fun dance moves!"
    })}
        ${textboxGenerator({
      helpText: 'The message 2 to send to matches.',
      placeholder: 'Your message to send',
      className: 'messageToSend2',
      defaultValue: "So you love cooking? 🍳 Ever tried to prepare a zero-calorie pizza? I'm ordering one if you know the recipe!"
    })}
        ${textboxGenerator({
      helpText: 'The message 3 to send to matches.',
      placeholder: 'Your message to send',
      className: 'messageToSend3',
      defaultValue: "Love the beach? 🏖️ Do you also take sandcastle architecture as seriously as I do?"
    })}
        ${textboxGenerator({
      helpText: 'The message 4 to send to matches.',
      placeholder: 'Your message to send',
      className: 'messageToSend4',
      defaultValue: "Makeup lover, right? 💅 Have you ever asked your blush why it's always blushing?"
    })}
        ${textboxGenerator({
      helpText: 'The message 5 to send to matches.',
      placeholder: 'Your message to send',
      className: 'messageToSend5',
      defaultValue: "Love coffee? ☕ How about we explore if coffee really is the best way to stay up all night?"
    })}
        ${textboxGenerator({
      helpText: 'The message 6 to send to matches.',
      placeholder: 'Your message to send',
      className: 'messageToSend6',
      defaultValue: "I see you are in great shape! 🏋️‍♀️ How about we skip leg day and go straight to cuddle session?"
    })}
        ${textboxGenerator({
      helpText: 'The message 7 to send to matches.',
      placeholder: 'Your message to send',
      className: 'messageToSend7',
      defaultValue: "So far apart, we could have a whole emoji village 🏡🌳🏠🌻🐶 in between us!"
    })}
        ${textboxGenerator({
      helpText: 'The message 8 to send to matches.',
      placeholder: 'Your message to send',
      className: 'messageToSend8',
      defaultValue: "Example Message 8"
    })}
        ${textboxGenerator({
      helpText: 'The message 9 to send to matches.',
      placeholder: 'Your message to send',
      className: 'messageToSend9',
      defaultValue: "Example Message 9"
    })}
    ${textboxGenerator({
      helpText: 'The message 10 to send to matches.',
      placeholder: 'Your message to send',
      className: 'messageToSend10',
      defaultValue: "Example Message 10"
    })}
    
    

    ${checkboxGenerator(
      'tinderAutopilot',
      'Auto like',
      'Begin automatically swiping right on all profiles.'
    )}
  </div>
`;

const massMessage = `
  <div class="Mt(20px)--ml Mt(16px)--s">
    ${messageBtnGenerator('tinderAutopilotMessage', 'Auto message')}
  </div>
`;

const loggerHeader = `<div class="Mt(20px)--ml Mt(16px)--s">${titleGenerator('Activity')}</div>`;

const counterLogs = (likeCount, matchCount) => `
<div class="Mb(0) Mt(40px) D(f) Jc(sb) Flxb(50%) W(100%)">
<div class="iconCombo Pos(r) P(16px) W(100%) CenterAlign Bdrs(4px) Bxsh($bxsh-btn) Pt(30px) Mstart(12px)--s Mstart(24px)--ml Mend(5px) Cur(p) Bgc(#fff) Ta(c)">
  <div class="iconCombo__icon Pos(a) Start(50%) T(0) Translate(-50%,-50%)">
      <span class="Sq(48px) Bxsh($bxsh-btn) Bgc(#fff) Bdrs(50%) P(0) CenterAlign Mx(a) productIcon__button productIcon__button--medium">
        <svg class="Expand" viewBox="0 0 51 51">
            <path d="M34.6 32.7c1-1 .8-2-.3-2.7l-2-1.2c-1-.6-1.8-2-1.5-3.3L33.3 15c.3-1.2-.2-1.5-1.2-.7l-12.5 12c-1 1-.8 2 .3 2.7l2 1.2c1 .6 1.8 2 1.5 3.4L20.8 44c-.3 1.3.3 1.6 1.2.7l12.6-12z" transform="translate(-1.62 -4.56)" stroke="none" fill="url(#svg-fill-radial__boost)" stroke-width="1" fill-rule="evenodd"></path>
        </svg>
      </span>
  </div>
  <div class="Heading Flx($flx1)">
      <h3 class="Heading__title Fz($s) Fw($semibold) Fz($ms)--m Mb(10px) My(4px)"><span id="likeCount">${likeCount}</span><br/><span> Liked</span></h3>
  </div>
</div>
<div class="iconCombo Pos(r) P(16px) W(100%) CenterAlign Bdrs(4px) Bxsh($bxsh-btn) Pt(30px) Mend(12px)--s Mend(24px)--ml Mstart(5px)--ml Cur(p) Bgc(#fff) Ta(c)">
  <div class="iconCombo__icon Pos(a) Start(50%) T(0) Translate(-50%,-50%)">
      <span class="Sq(48px) Bxsh($bxsh-btn) Bgc(#fff) Bdrs(50%) P(0) CenterAlign Mx(a) productIcon__button productIcon__button--medium">
        <svg class="Expand" viewBox="0 0 54 54">
            <path d="M38.87 23.28c2.72.3 3.57 2.9 1.55 4.76l-2.37 2.16-2.57 2.35c.26-.24.35-.5.28-.84l.7 3.42c.3 1.54.54 2.65.64 3.14.55 2.7-1.67 4.3-4.05 2.94l-2.78-1.58-3.02-1.72c.3.17.58.17.88 0-.2.1-.2.1-.94.53l-2.1 1.2-2.77 1.57c-2.38 1.36-4.6-.25-4.05-2.94l.64-3.14.5-2.34.2-1.07c-.07.35.02.6.28.85l-.8-.74-1.77-1.6-2.37-2.16c-2.02-1.85-1.18-4.46 1.55-4.76l3.2-.36 3.45-.38c-.35.04-.58.2-.72.52l1.44-3.18 1.3-2.9c1.15-2.52 3.9-2.52 5.03 0l1.3 2.9 1 2.2.45.98c-.14-.32-.37-.48-.72-.52l3.46.38 3.17.36z" transform="translate(-0.87, -2.56)" fill-rule="evenodd" fill="url(#svg-fill-linear__super-like)" stroke="none" stroke-width="1"></path>
        </svg>
      </span>
  </div>
  <div class="Heading Flx($flx1)">
      <h3 class="Heading__title Fz($s) Fw($semibold) Fz($ms)--m Mb(10px) My(4px)"><span id="matchCount">${matchCount}</span><br/><span> Matched</span></h3>
  </div>
</div>
</div>
`;

const infoBanner = `<div id="infoBanner" class="Ov(h) Bgc($c-bg-lite-blue) menu Pos(r) H(100%)" style="z-index:9999"></div>`;

// const 

export {
  topBanner,
  autopilot,
  infoBanner,
  massMessage,
  loggerHeader,
  counterLogs,
  offToggle,
  offToggleInner,
  onToggle,
  onToggleInner
};
