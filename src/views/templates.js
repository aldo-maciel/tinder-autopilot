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
<div class='desktopNavbar mt-9 horiz justify-center text-2xl'>
  <a href='/app/profile'>
    <span><span>InstaMatch</span></span>
  </a>
</div>
`;

const titleGenerator = (title) =>
  `<h2 class='text-red-400 p-2 mb-2 uppercase border-b border-gray-600'>${title}</h2>`;

const textboxGenerator = ({ className, placeholder, helpText, defaultValue }) => `
${ helpText && `
  <div class='verti'>
    <div class='settings__bottomSubtitle my-1 px-3'>${ helpText }</div>` }
    <textarea class='text-black bg-white w-auto mx-3' id='${ className }' placeholder='${ placeholder }'>${ defaultValue }</textarea>
  </div>
`;

const checkboxGenerator = (className, label, helpText = '') => `
<div class='horiz w-full justify-center my-4'>
    <div class='${className} start-btn'>Start</div>
</div>
`;

const messageBtnGenerator = (className) => `
  <div style='display:none' class='Pos(a) W(100%) Pb(16px) D(f) Jc(c) Z(1) B(0) Bgi($primary-gradient-bottom) Bdrs(8px)--ml Pe(n)'>
    <a href='#' id='messageBtn' class='c1p6lbu0 Pe(a) ${className}' style='--tui-button-background: var(--gradient--background-button-primary, none); --tui-button-border: transparent; --tui-button-foreground: var(--color--foreground-button-primary, inherit); --tui-button-overlay: var(--color--interactive-button-primary, inherit); --tui-button-focus: var(--color--border-focus-default, inherit);'>
      <div class='tg0j2fo'></div>
      <div class='w1u9t036 ${className}'>
        <span class='c9iqosj fk7dtol'></span>
        <div class='c9iqosj f1xhyo4z'></div>
        <div class='start-btn'>Message</div>
        <span class='c9iqosj oxn9zzn'></span>
      </div>
    </a>
  </div>
`;

const autopilot = `
  <div class='Mt(20px)--ml Mt(16px)--s'>
    ${titleGenerator('Main Settings')}
    ${textboxGenerator({
      helpText: 'The message 1 to send to matches.',
      placeholder: 'Your message to send',
      className: 'messageToSend1',
      defaultValue:
        'So, you love yoga? 🧘‍♀️ Bet those flexibility skills make for some fun dance moves!'
    })}
        ${textboxGenerator({
          helpText: 'The message 2 to send to matches.',
          placeholder: 'Your message to send',
          className: 'messageToSend2',
          defaultValue:
            "So you love cooking? 🍳 Ever tried to prepare a zero-calorie pizza? I'm ordering one if you know the recipe!"
        })}
        ${textboxGenerator({
          helpText: 'The message 3 to send to matches.',
          placeholder: 'Your message to send',
          className: 'messageToSend3',
          defaultValue:
            'Love the beach? 🏖️ Do you also take sandcastle architecture as seriously as I do?'
        })}
        ${textboxGenerator({
          helpText: 'The message 4 to send to matches.',
          placeholder: 'Your message to send',
          className: 'messageToSend4',
          defaultValue:
            "Makeup lover, right? 💅 Have you ever asked your blush why it's always blushing?"
        })}
        ${textboxGenerator({
          helpText: 'The message 5 to send to matches.',
          placeholder: 'Your message to send',
          className: 'messageToSend5',
          defaultValue:
            'Love coffee? ☕ How about we explore if coffee really is the best way to stay up all night?'
        })}
        ${textboxGenerator({
          helpText: 'The message 6 to send to matches.',
          placeholder: 'Your message to send',
          className: 'messageToSend6',
          defaultValue:
            'I see you are in great shape! 🏋️‍♀️ How about we skip leg day and go straight to cuddle session?'
        })}
        ${textboxGenerator({
          helpText: 'The message 7 to send to matches.',
          placeholder: 'Your message to send',
          className: 'messageToSend7',
          defaultValue:
            'So far apart, we could have a whole emoji village 🏡🌳🏠🌻🐶 in between us!'
        })}
        ${textboxGenerator({
          helpText: 'The message 8 to send to matches.',
          placeholder: 'Your message to send',
          className: 'messageToSend8',
          defaultValue: 'Example Message 8'
        })}
        ${textboxGenerator({
          helpText: 'The message 9 to send to matches.',
          placeholder: 'Your message to send',
          className: 'messageToSend9',
          defaultValue: 'Example Message 9'
        })}
    ${textboxGenerator({
      helpText: 'The message 10 to send to matches.',
      placeholder: 'Your message to send',
      className: 'messageToSend10',
      defaultValue: 'Example Message 10'
    })}
    
    

    ${checkboxGenerator(
      'tinderAutopilot',
      'Auto like',
      'Begin automatically swiping right on all profiles.'
    )}
  </div>
`;

const massMessage = `
  <div class='Mt(20px)--ml Mt(16px)--s'>
    ${messageBtnGenerator('tinderAutopilotMessage', 'Auto message')}
  </div>
`;

const loggerHeader = `<div class='Mt(20px)--ml Mt(16px)--s'>${titleGenerator('Activity')}</div>`;

const counterLogs = (likeCount, matchCount) => `
<div class='my-10 horiz justify-evenly px-4 w-full'>
<div class='iconCombo verti items-center px-4 mx-2 weight-1 border-2 shadow-lg rounded-lg bg-white'>
  <div class='relative horiz justify-center items-center rounded-full p-7 w-4 h-4 -top-5 bg-white shadow-lg'>
    <svg focusable='false' aria-hidden='true' role='presentation' viewBox='0 0 24 24' width='24px' height='24px' class='rounded-full object-cover'><path d='M15.979 14.018c.637-.638.51-1.275-.192-1.722l-1.275-.765c-.638-.383-1.148-1.275-.956-2.104L15.15 2.73c.191-.765-.128-.956-.765-.446L6.414 9.937c-.638.638-.51 1.275.19 1.722l1.276.765c.638.382 1.148 1.275.957 2.168l-1.658 6.632c-.191.829.191 1.02.765.446l8.035-7.652z' fill='#BF16DC'></path></svg>
  </div>
  <div class='Heading relative weight-1 py-1 -top-4'>
      <h3 class='text-gray-900 verti items-center justify-center font-bold '><span id='likeCount'>${likeCount}</span><span> Liked</span></h3>
  </div>
</div>
<div class='iconCombo verti items-center px-4 mx-2 weight-1 border-2 shadow-lg rounded-lg bg-white'>
  <div class='relative horiz justify-center items-center rounded-full p-7 w-4 h-4 -top-5 bg-white shadow-lg'>
    <svg focusable='false' aria-hidden='true' role='presentation' viewBox='0 0 24 24' width='24px' height='24px' class='rounded-full object-cover'><path d='M21.06 9.06l-5.47-.66c-.15 0-.39-.25-.47-.41l-2.34-5.25c-.47-.99-1.17-.99-1.56 0L8.87 7.99c0 .16-.23.4-.47.4l-5.47.66c-1.01 0-1.25.83-.46 1.65l4.06 3.77c.15.16.23.5.15.66L5.6 20.87c-.16.98.4 1.48 1.33.82l4.69-2.79h.78l4.69 2.87c.78.58 1.56 0 1.25-.98l-1.02-5.75s0-.4.23-.57l3.91-3.86c.78-.82.78-1.64-.39-1.64v.08z' fill='#44BDFA'></path></svg>
  </div>
  <div class='Heading relative weight-1 py-1 -top-4'>
      <h3 class='text-gray-900 verti items-center justify-center font-bold'>
        <span id='matchCount'>${matchCount}</span>
        <span> Matched</span
      ></h3>
  </div>
</div>
</div>
`;

const infoBanner = `<div id='infoBanner' class='Ov(h) Bgc($c-bg-lite-blue) menu Pos(r) H(100%)' style='z-index:9999'></div>`;

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
