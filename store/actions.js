export default {
  async getResume({ commit, state, rootState }) {
    const ref = this.$fireStore.collection('profiles').doc('miten');
    try {
      const doc = await ref.get();
      const resumeUrl = doc.data().resumeUrl;
      commit('SET_RESUME_URL', resumeUrl);
    } catch (e) {
      return Promise.reject(e)
    }
  }
}