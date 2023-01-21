import React from 'react'

export default function App() {

  const [count , setCount] = React.useState(0) ;
  const [item , setItem] = React.useState(10) ;

  const multiCountMemo = React.useMemo(function multiCount() {
    console.warn('multiCount');
    return count * 5 ;
  } , [count]) ;

  return (
    <div>
      <h1>Use Memo Hook React</h1>
      <h2> Count : {count} </h2>
      <h2> Item : {item} </h2>
      <h2>{multiCountMemo}</h2>
      <button onClick={() => setCount(count + 1) } >Update Count</button>
      <button onClick={() => setItem(item * 10) } >Update Item</button>
    </div>
  )
}
