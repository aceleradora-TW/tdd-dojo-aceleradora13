import './index.html';
import parse from './parse';

const getInput = () => parse(document.getElementById('input-box').value);

const setResult = (value) => {
  document.getElementById('result-value').textContent = value;
};
