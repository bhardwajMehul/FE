export class LSP {
  static saveDataToLocalStorage(data) {
    try {
      localStorage.setItem('quizData', JSON.stringify(data));
    } catch (error) {
      console.log(`error while saving data to local storage${error}`);
    }
  }

  static removeDataFromLocalStorage() {
    try {
      localStorage.removeItem('quizData');
    } catch (error) {
      console.log(`error while removing data from local storage${error}`);
    }
  }

  static getDataFromLocalStorage() {
    try {
      return JSON.parse(localStorage.getItem('quizData'));
    } catch (error) {
      console.log(`error while fetching data from local storage${error}`);
    }
  }
}
