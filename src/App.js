import React , {useRef} from 'react'

export default function App() {

  return (
    <div>

      <h1> Simple HOC </h1>
      <HOCRed cmp = {Counter} />
      <HOCGreen cmp = {Counter} />
      <HOCBlue cmp = {Counter} />
    </div>
  )
}

function HOCRed(props) {
  return (
    <h2 style={{backgroundColor : "red" , width : "100px"}} >  <props.cmp /> </h2>
  )
}

function HOCGreen(props) {
  return (
    <h2 style={{backgroundColor : "green" , width : "100px"}} > <props.cmp /> </h2>
  )
}

function HOCBlue(props) {
  return (
    <h2 style={{backgroundColor : "blue" , width : "100px"}} > <props.cmp /> </h2>
  )
}

function Counter() {
  const [count , setCount] = React.useState(0) ;
  return (
    <div>
      <h3>{count}</h3>
      <button onClick={() => setCount(count + 1)} >Update</button>
    </div>
  )
}
