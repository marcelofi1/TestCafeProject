/* tslint:disable no-var-requires */
import { getConfig, getEnv } from '../config/config';

const { Actions } = require('../utils/actions');
const config = getConfig();
const env = getEnv();

class URL extends Actions {
  constructor() {
    super();
    // External
    this.loginUrl = `${config.siteUrl}/login`;
    this.joinUrl = `${config.siteUrl}/join`;

    // API
    this.urlAPI = `https://sb-api.${env}.pposervices.local/`;
    this.ppdUrlAPI = `https://${env}api.sportsbetting.ag/`;
    this.prodUrlAPI = 'https://api.sportsbetting.ag/';
  }
}
export default new URL();