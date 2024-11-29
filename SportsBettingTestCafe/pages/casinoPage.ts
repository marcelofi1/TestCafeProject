/* tslint:disable no-var-requires */
import { getEnv } from '../config/config';

const { Actions } = require('../utils/actions');
const env = getEnv();

class CasinoPage extends Actions {
  constructor() {
    super();
    this.casinoUrl = `https://casino-sb.${env}.pposervices.local/`;

    // footer URL
    if (env === "prod") {
      this.playCasinoUrl = `https://casino.sportsbetting.ag/`;
      this.blackjackUrl = `https://casino.sportsbetting.ag/games/blackjack`;
      this.baccaratUrl = `https://casino.sportsbetting.ag/casino/baccarat`;
      this.crapsUrl = `https://casino.sportsbetting.ag/casino/craps`;
      this.rouletteUrl = `https://casino.sportsbetting.ag/casino/roulette`;
      this.kenoUrl = `https://casino.sportsbetting.ag/casino/keno`;
      this.slotsUrl = `https://casino.sportsbetting.ag/games/slots`;
      this.videoPokerUrl = `https://casino.sportsbetting.ag/games/video-poker`;
    } else if (env === "ppd") {
      this.playCasinoUrl = `https://${env}-casino.sportsbetting.ag/`;
      this.blackjackUrl = `https://${env}-casino.sportsbetting.ag/games/blackjack`;
      this.baccaratUrl = `https://${env}-casino.sportsbetting.ag/casino/baccarat`;
      this.crapsUrl = `https://${env}-casino.sportsbetting.ag/casino/craps`;
      this.rouletteUrl = `https://${env}-casino.sportsbetting.ag/casino/roulette`;
      this.kenoUrl = `https://${env}-casino.sportsbetting.ag/casino/keno`;
      this.slotsUrl = `https://${env}-casino.sportsbetting.ag/games/slots`;
      this.videoPokerUrl = `https://${env}-casino.sportsbetting.ag/games/video-poker`;
    } else {
      this.playCasinoUrl = `https://casino-sb.${env}.pposervices.local/`;
      this.blackjackUrl = `https://casino-sb.${env}.pposervices.local/games/blackjack`;
      this.baccaratUrl = `https://casino-sb.${env}.pposervices.local/casino/baccarat`;
      this.crapsUrl = `https://casino-sb.${env}.pposervices.local/casino/craps`;
      this.rouletteUrl = `https://casino-sb.${env}.pposervices.local/casino/roulette`;
      this.kenoUrl = `https://casino-sb.${env}.pposervices.local/casino/keno`;
      this.slotsUrl = `https://casino-sb.${env}.pposervices.local/games/slots`;
      this.videoPokerUrl = `https://casino-sb.${env}.pposervices.local/games/video-poker`;
    }
  }
}
export default new CasinoPage();
