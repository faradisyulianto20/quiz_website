import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Home from './pages/Home'
import Game from './pages/Game'
import WebQ1 from './pages/web/q1'
import WebQ2 from './pages/web/q2'
import WebQ3 from './pages/web/q3'
import WebQ4 from './pages/web/q4'
import WebQ5 from './pages/web/q5'
import FinishWeb from './pages/web/Finish-web'
import WebdevQ1 from './pages/webdev/q1'
import WebdevQ2 from './pages/webdev/q2'
import WebdevQ3 from './pages/webdev/q3'
import WebdevQ4 from './pages/webdev/q4'
import WebdevQ5 from './pages/webdev/q5'
import FinishWebdev from './pages/webdev/Finish-webdev'
import UxQ1 from './pages/ux/q1'
import UxQ2 from './pages/ux/q2'
import UxQ3 from './pages/ux/q3'
import UxQ4 from './pages/ux/q4'
import UxQ5 from './pages/ux/q5'
import FinishUx from './pages/ux/Finish-ux'
import SeoQ1 from './pages/seo/q1'
import SeoQ2 from './pages/seo/q2'
import SeoQ3 from './pages/seo/q3'
import SeoQ4 from './pages/seo/q4'
import SeoQ5 from './pages/seo/q5'
import FinishSeo from './pages/seo/Finish-seo'
import MotionQ1 from './pages/motion/q1'
import MotionQ2 from './pages/motion/q2'
import MotionQ3 from './pages/motion/q3'
import MotionQ4 from './pages/motion/q4'
import MotionQ5 from './pages/motion/q5'
import FinishMotion from './pages/motion/Finish-motion'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home/>} />
          <Route path='/home' element={<Home/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/game' element={<Game/>} />
          <Route path='/game/webq1' element={<WebQ1 />} />
          <Route path='/game/webq2' element={<WebQ2 />} />
          <Route path='/game/webq3' element={<WebQ3 />} />
          <Route path='/game/webq4' element={<WebQ4 />} />
          <Route path='/game/webq5' element={<WebQ5 />} />
          <Route path='/game/web/end' element={<FinishWeb />} />
          <Route path='/game/webdevq1' element={<WebdevQ1 />} />
          <Route path='/game/webdevq2' element={<WebdevQ2 />} />
          <Route path='/game/webdevq3' element={<WebdevQ3 />} />
          <Route path='/game/webdevq4' element={<WebdevQ4 />} />
          <Route path='/game/webdevq5' element={<WebdevQ5 />} />
          <Route path='/game/webdev/end' element={<FinishWebdev />} />
          <Route path='/game/uxq1' element={<UxQ1 />} />
          <Route path='/game/uxq2' element={<UxQ2 />} />
          <Route path='/game/uxq3' element={<UxQ3 />} />
          <Route path='/game/uxq4' element={<UxQ4 />} />
          <Route path='/game/uxq5' element={<UxQ5 />} />
          <Route path='/game/ux/end' element={<FinishUx />} />
          <Route path='/game/seoq1' element={<SeoQ1 />} />
          <Route path='/game/seoq2' element={<SeoQ2 />} />
          <Route path='/game/seoq3' element={<SeoQ3 />} />
          <Route path='/game/seoq4' element={<SeoQ4 />} />
          <Route path='/game/seoq5' element={<SeoQ5 />} />
          <Route path='/game/seo/end' element={<FinishSeo />} />
          <Route path='/game/motionq1' element={<MotionQ1 />} />
          <Route path='/game/motionq2' element={<MotionQ2 />} />
          <Route path='/game/motionq3' element={<MotionQ3 />} />
          <Route path='/game/motionq4' element={<MotionQ4 />} />
          <Route path='/game/motionq5' element={<MotionQ5 />} />
          <Route path='/game/motion/end' element={<FinishMotion />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
