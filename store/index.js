export const state = () => ({
  showPushmenu: false,
});

export const mutations = {
  togglePushmenu(state) {
    state.showPushmenu = !state.showPushmenu;
  },
};
