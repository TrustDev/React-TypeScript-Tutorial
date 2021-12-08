import "./styles.css";
import UserComponent from './components/UserComponent';
import List from './components/List';
export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <UserComponent name="John Doe" age={26} address="87 Summer St, Boston, MA 02110" dob={new Date()}/>
      <List
        items={["a", "b"]}
        renderItem={item => (
          <li key={item}>
            {item.trim()}
          </li>
        )}
      />      
      <List<number>
        items={[1,2,3,4]} 
        renderItem={item => <li key={item}>{item.toPrecision(3)}</li>}
      />
    </div>
  );
}
