/* tslint:disable no-var-requires */
import { getConfig } from '../config/config';

const { Actions } = require('../utils/actions');
const config = getConfig();

class LiveBettingPage extends Actions {
  constructor() {
    super();
    this.liveBettingUrl = `${config.liveBettingUrl}`;
  }
}
export default new LiveBettingPage();
