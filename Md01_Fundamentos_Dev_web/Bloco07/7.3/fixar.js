const acordar = ()  => 'Acordando!!';
const cafe = () => 'Bora tomar café!!';
const dormir = () => 'Partiu dormir!!';

const doingThings = (funcao, action) => action(funcao);

doingThings(acordar(), console.log);
doingThings(cafe(),console.log);
doingThings(dormir(),console.log);

const doDoingThings = (funcao) => console.log(funcao);

doDoingThings(acordar());
doDoingThings(cafe());
doDoingThings(dormir());

const geraParamRGB = () => Math.floor(Math.random() * 255);

const geraRGB = () => console.log(`rgb(${geraParamRGB()}, ${geraParamRGB()}, ${geraParamRGB()})`);

geraRGB();