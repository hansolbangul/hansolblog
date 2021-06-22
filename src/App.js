import './App.css';
import Router from './view/Route/Router';

const Posts = importAll(require.context('../post'));

function importAll(r) {
    let files = [];
    let count = 0;
    r.keys().map((item, index) => {
        if (item.indexOf('js') > -1) {
            files[count] = r(item);
            count += 1;
        }
    });
    return files;
}

function App() {
    // console.log(Pages);
    return <Router posts={Posts} />;
}

export default App;
