export function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++){
      const [a,b,c] = lines[i]
      if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
        return squares[a];
      }
    }
    return null;
}
  
export async function retrieveSpells() {
  const url = "https://www.potterapi.com/v1/spells?key=$2a$10$TkuxaoI6SI2.lqit9JW6aOn33H96.OpxypG/Gnu..ujdICpLG848q";
  // const params = {
  //   "key" : "$2a$10$TkuxaoI6SI2.lqit9JW6aOn33H96.OpxypG/Gnu..ujdICpLG848q"
  // };
  try {
    const response = await fetch(url);
    const json = await response.json();
    return json;
  }
  catch (err) {
    console.error(err);
  }
}