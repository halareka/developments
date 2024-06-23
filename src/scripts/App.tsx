function getElementThing(letter:string , number:string):any{
  return <><div className="block" id={letter + number} key={letter + number}><div className="block__elem-top" id={letter + number + "top"} key={letter + number + '1'}></div><div className="block__elem-down" id={letter + number + "down"} key={letter + number + '2'}></div><div className="block__elem-right" id={letter + number + "right"} key={letter + number + '3'}></div><div className="block__elem-left" id={letter + number + "left"} key={letter + number + '4'}></div><div className="block__elem-top-tongue" id={letter + number + "topTongue"} key={letter + number + '5'}></div><div className="block__elem-down-tongue" id={letter + number + "downTongue"} key={letter + number + '6'}></div><div className="block__elem-right-tongue" id={letter + number + "rightTongue"} key={letter + number + '7'}></div><div className="block__elem-left-tongue" id={letter + number + "leftTongue"} key={letter + number + '8'}></div></div></>
}
function getElementArray(): HTMLElement[] {
  const elementArray: any = [];
  const alphabet: string = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  for (let i: number = 0; i < 10; i++) {
    let letter: string = alphabet[i];
    for (let j: number = 1; j < 11; j++) {
      let number: string = j.toString();
      elementArray.push(getElementThing(letter , number));
    }
  }
  return elementArray;
}
function App() {
  const elements = getElementArray();
  return <>{elements}</>;
}

export default App;
