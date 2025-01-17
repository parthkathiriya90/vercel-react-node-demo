import { useState } from 'react';
import './App.css';
import Home from './page/home';
import '../src/style/style.css';
import '../src/style/style2.css';
import Service from './page/service';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Login from './page/login';
import Faq from './page/faq';
import Register from './page/register';
import Contact from './page/contact';
import ForgotPass from './page/forgot-password';
import Policy from './page/privacy-policy';
import Termscondition from './page/terms-condition';
import InstaIssue from './page/instagram-issue';
import Blog from './page/blog';
import BlogHeader from './Components/BlogHeader';
import BlogFooter from './Components/BlogFooter';
import MediaUpdate from './page/media-update';
import BlogDetail from './page/blog-detail';
import Order from './page/order';
import Profile from './page/profile';
import FreeFollowers from './page/free-followers';
import Payment from './page/payment';
import { authServices } from './services/auth.services';
import AppContext from './utils/AppContext';

const App = () => {
  const location = useLocation();
  const isAuthenticated = authServices.isUserLoggedIn();
  const [servicesData, setServicesData] = useState([]);

  // Paths where Header/Footer should be conditionally hidden
  const noHeaderFooterPaths = ['/login', '/register', '/forgot-password', '/blog', '/instagram-issue', '/media-update', '/order'];
  const blogHeaderFooterPaths = ['/blog', '/instagram-issue', '/media-update'];

  // Determine layout
  const showHeaderFooter = !noHeaderFooterPaths.includes(location.pathname);
  const showBlogHeaderFooter = blogHeaderFooterPaths.includes(location.pathname);

  return (
    <>
      <AppContext.Provider
        value={{
          state: {
            servicesData: servicesData
          },
          setServicesData: setServicesData
        }}
      >
        {showHeaderFooter && <Header />}
        {showBlogHeaderFooter && <BlogHeader />}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:slug" element={<Service />} />
          <Route path="/login" element={<ProtectedRoute isAuthenticated={isAuthenticated}><Login /></ProtectedRoute>} />
          <Route path="/register" element={<ProtectedRoute isAuthenticated={isAuthenticated}><Register /></ProtectedRoute>} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/forgot-password" element={<ProtectedRoute isAuthenticated={isAuthenticated}><ForgotPass /></ProtectedRoute>} />
          <Route path="/privacy-policy" element={<Policy />} />
          <Route path="/terms-condition" element={<Termscondition />} />
          <Route path="/instagram-issue" element={<InstaIssue />} />
          <Route path="/media-update" element={<MediaUpdate />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog-detail" element={<BlogDetail />} />
          <Route path="/order" element={<Order />} />
          <Route path="/profile" element={<PrivateRoute isAuthenticated={isAuthenticated}><Profile /></PrivateRoute>} />
          <Route path="/free-followers" element={<FreeFollowers />} />
          <Route path="/payment" element={<Payment />} />
        </Routes>

        {showHeaderFooter && <Footer />}
        {showBlogHeaderFooter && <BlogFooter />}
      </AppContext.Provider>
    </>
  );
};

const PrivateRoute = ({ isAuthenticated, children }) => {
  return isAuthenticated ? children : <Navigate to="/login" />;
};

const ProtectedRoute = ({ isAuthenticated, children }) => {
  return !isAuthenticated ? children : <Navigate to="/profile" />;
};

const MainApp = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

export default MainApp;
