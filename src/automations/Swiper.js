import { logger, generateRandomNumber } from '../misc/helper';
import Interactions from '../misc/Interactions';

class Swiper {
  selector = '.tinderAutopilot';

  isRunning = false;

  constructor() {
    this.interactions = new Interactions();
  }

  start = () => {
    logger('Starting to swipe using a randomized interval');
    this.isRunning = true;
    this.run();
  };

  stop = () => {
    this.isRunning = false;
    logger('Autopilot stopped ⛔️');
  };

  canSwipe = () => {
    return this.hasLike() && !document.querySelector('.beacon__circle');
  };

  hasLike = () => {
    const xpath = "//span[text()='Like']";
    const matchingElement = document.evaluate(
      xpath,
      document,
      null,
      XPathResult.FIRST_ORDERED_NODE_TYPE,
      null
    ).singleNodeValue;

    if (matchingElement) {
      return matchingElement.closest('button');
    }
    return false;
  };

  pressLike = () => {
    const likeButton = this.hasLike();
    if (!likeButton && !this.canSwipe()) {
      return false;
    }

    likeButton.click();
    document.getElementById('likeCount').innerHTML =
      parseInt(document.getElementById('likeCount').innerHTML, 10) + 1;
    return true;
  };

  matchFound = async () => {
    const response = await getMatches(true, true);
    const isSuccess = response?.meta?.status === 200;

    if (isSuccess && response.data.matches.length) {
      response.data.matches.forEach((match) => {
        const messageToSend = get(document.getElementById('messageToSend'), 'value', '').replace(
          '{name}',
          get(match, 'person.name').toLowerCase()
        );

        sendMessageToMatch(match.id, { message: messageToSend }).then((b) => {
          if (get(b, 'sent_date')) {
            logger(`Message sent to ${get(match, 'person.name')}`);
          } else {
            logger(`Message NOT sent to ${get(match, 'person.name')}`);
          }
        });
      });
    } else {
      return false;
    }

    document.getElementById('matchCount').innerHTML =
      parseInt(document.getElementById('matchCount').innerHTML, 10) + 1;
    logger("Congrats! We've got a match! 🤡");

    return true;
  };

  run = async () => {
    if (!this.isRunning) {
      return;
    }

    // Must be on matches page
    if (!this.interactions.isOnMatchesPage()) {
      logger('Going to main page to start liking');
      this.interactions.goToMainPage();

      const waitForMatchPage = setInterval(() => {
        if (this.interactions.isOnMatchesPage()) {
          clearInterval(waitForMatchPage);
          setTimeout(this.run, generateRandomNumber());
        }
      }, 250);
    }

    if (this.interactions.closeInstructions()) {
      setTimeout(this.run, generateRandomNumber());
      return;
    }

    if (this.interactions.closeModal()) {
      setTimeout(this.run, generateRandomNumber());
      return;
    }

    if (this.interactions.closeMatchFound()) {
      setTimeout(this.run, generateRandomNumber());
      return;
    }

    if (!this.canSwipe()) {
      logger('No profiles found. Waiting 4s');
      setTimeout(this.run, generateRandomNumber(3000, 4000));
      return;
    }

    // Keep Swiping
    if (await this.matchFound()) {
      setTimeout(this.run, generateRandomNumber(500, 900));
      return;
    }

    // What we came here to do, swipe right!
    if (this.pressLike()) {
      setTimeout(this.run, generateRandomNumber(500, 900));
      return;
    }

    logger('No profiles found. Waiting 4s');
    setTimeout(this.run, generateRandomNumber(3000, 4000));
  };
}

export default Swiper;
