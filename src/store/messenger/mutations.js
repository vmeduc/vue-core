

const mutations = {
  addMessageMutation(state, message) {
    state.messages = [
      ...state.messages,
      { id: message.id, text: message.text }
    ];
  }
};

export default mutations;