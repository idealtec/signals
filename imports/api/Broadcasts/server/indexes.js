import createIndex from '../../../modules/server/create-index';
import Broadcasts from '../Broadcasts';

createIndex(Broadcasts, { owner: 1 });