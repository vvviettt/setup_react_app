import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import config from './config';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    {config.routes.map((route, index) => {
                        const Component = route.page;
                        return <Route key={index} path={route.path} element={<Component />} />;
                    })}
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
