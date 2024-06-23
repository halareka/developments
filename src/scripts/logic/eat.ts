
function randEatGenerate(alp:string):string{
    const randomLetter: string = alp[Math.floor(Math.random() * alp.length)];
    const randomNumber: number = Math.floor(Math.random() * 10) + 1;
    
    return `${randomLetter}${randomNumber}`;
}
export {randEatGenerate};