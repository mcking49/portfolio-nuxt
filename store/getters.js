export default {
  resumeUrl: (state) => {
    try {
      return state.resumeUrl;
    } catch {
      return '';
    }
  }
}