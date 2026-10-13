import { Ocean } from '../types';
import { ocean1 } from './ocean1';
import { ocean2 } from './ocean2';
import { ocean3 } from './ocean3';
import { ocean4 } from './ocean4';
import { ocean5 } from './ocean5';
import { ocean6 } from './ocean6';
import { ocean7 } from './ocean7';
import { ocean8 } from './ocean8';

export * from '../types';

export const oceans: Ocean[] = [
  ocean1,
  ocean2,
  ocean3,
  ocean4,
  ocean5,
  ocean6,
  ocean7,
  ocean8
];

export { 
  MEGA_TOPICS, 
  generate1000Topics, 
  CATEGORY_LABELS, 
  type Topic as MegaTopic 
} from './megaDatabase';
export { default as EncyclopediaView } from './EncyclopediaView';
export * from './scientists';
