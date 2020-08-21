import actions from './actions';
import mutations from './mutations';

const messenger = {
  state: {
    messages: []
  },
  actions,
  mutations
};

export default messenger;