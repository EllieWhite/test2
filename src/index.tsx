import { createRoot } from 'react-dom/client';
import App from './components/App';
import { HashRouter, Routes, Route } from 'react-router-dom'; 
import { LazyAbout } from '@/pages/about/About.lazy';
import { LazyShop } from './pages/shop/Shop.lazy';
import { Suspense } from 'react';

const root = document.getElementById('root');

if (!root) {
    throw new Error('root not found');
}

const container = createRoot(root);

container.render(
    <HashRouter>
        <Routes> 
            <Route path="/" element={<App />}>
                <Route path="/about" element={<LazyAbout />} />
                <Route path="/shop" element={<Suspense fallback={'Loading...'}><LazyShop /></Suspense>} />
            </Route>
        </Routes>
    </HashRouter>
);