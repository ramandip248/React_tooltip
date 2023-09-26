

import Tooltip from './components/Tooltip';

const styles = {
  App:{
     display:'flex',
     justifyContent:'space-around',
     alignItems:'center',
     gap:'10px',
     width:'100%',
     height:'100vh'
  }
 
 }

function App() {
  return (
    <div style={styles.App}>
       <Tooltip content="left tooltip" position="left">
          <span>Hover on me!</span>
       </Tooltip>
       <Tooltip content="top tooltip" position="top">
          <span>Hover on me!</span>
       </Tooltip>
       <Tooltip content="bottom tooltip" position="bottom">
          <span>Hover on me!</span>
       </Tooltip>
       <Tooltip content="right tooltip" position="right">
          <span>Hover on me!</span>
       </Tooltip>
    </div>
  );
}

export default App;
