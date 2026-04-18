import ChangeTheme from '../Theme/ChangeTheme'
import reactLogo from './../assets/react.svg'
import viteLogo from '/vite.svg'

const Home = () => {
  
    return (
        <div className="App">
            <div>
            <a href="https://vitejs.dev" target="_blank">
                <img src={viteLogo} className="logo" alt="Vite logo" />
            </a>
            <a href="https://react.dev" target="_blank">
                <img src={reactLogo} className="logo react" alt="React logo" />
            </a>
            </div>  
            <p>
                Edit <code>src/App.tsx</code> and save to test HMR
            </p>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
            <ChangeTheme />
        </div>
    )

}

export default Home;
