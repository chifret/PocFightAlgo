import {MomentBonusFightEnum} from '../../../enums/fight/bonus/moment-bonus-fight.enum';

export interface HasbonusBuffFightInterface {
  bonusMoment: MomentBonusFightEnum;

  castBonus(): void;
}
