import ReactDOM from 'react-dom';

const txtJSX = 'JSX';
const element = <h1>Hello, {txtJSX}!</h1>;

ReactDOM.render(element, document.getElementById('root'));