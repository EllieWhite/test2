import { Outlet } from 'react-router-dom';
import styles from './App.module.scss';
import Cat from '@/assets/i.webp';

const App = () => {
    return (
        <div className={styles.block}>
            <img src={Cat} alt="" />
        <Outlet />
        </div>
    )
}

export default App;