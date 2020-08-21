import Axios from 'axios';

const actions = {
  async init({commit}) {
    const response = await Axios.get('http://localhost:9000/api/messages');
    let messageArrey = response.data;
    console.log(messageArrey);
    messageArrey.forEach(el => {
      commit('addMessageMutation', { id: el.id, text: el.text });
    });
  },
  async postMessage({commit}, text) {
    const response = await Axios.post('http://localhost:9000/api/messages', {text: text})
    let newMessage = response.data;
    commit('addMessageMutation', newMessage);
  }
};

export default actions;