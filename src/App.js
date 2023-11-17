import logo from './logo.svg';
import './App.css';
import img from './b1.jpeg'

function App() {
  return (
    <body>
    <center>
        <div class="main-container">
            <div class="container">
                <h1>To Do List</h1>
                <input type="text" placeholder="Title...." id="listInput"/>
                <span onclick="newElement()" class="addBtn">Add</span>
            </div>
            <ul id="myUL">
                <li>Data Structure Assignment Completion</li>
                <li class="checked">Web Devlopement Project Completion</li>
                <li>Prepare for CIA 3</li>
                <li>Prepare UHVE report</li>
                <li>Courses Completion</li>
                <li>Preparation for viva</li>
            </ul>
        </div>
    </center>
    
</body>
  );
}
export default App;
