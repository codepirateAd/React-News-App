import React, { useState } from 'react'
import Navbar from './Components/Navbar'
import News from './Components/News'
import LoadingBar from 'react-top-loading-bar';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

const App = () => {
  const [progress, setprogress] = useState(0)
  
  const setProgress = (progress) => {
    // this.setState({
    //   progress: progress
    // })
    setprogress(progress)
  }
    return (
      <div>

        <Router>
        <Navbar/>
        <LoadingBar
        color='#f11946'
        progress={progress}
        height={6}
        // onLoaderFinished={() => setProgress(0)}
      />
          <Routes>

            <Route exact path="/" element={<News setProgress={setProgress} key="technology" country="in" category="technology" />} />
            <Route exact path="/technology" element={<News setProgress={setProgress} key="technology" country="in" category="technology" />} />
            <Route exact path="/business" element={<News setProgress={setProgress} key="business" country="in" category="business" />} />
            <Route exact path="/entertainment" element={<News setProgress={setProgress} key="entertainment" country="in" category="entertainment" />} />
            <Route exact path="/health" element={<News setProgress={setProgress} key="health" country="in" category="health" />} />
            <Route exact path="/sports" element={<News setProgress={setProgress} key="sports" country="in" category="sports" />} />
            <Route exact path="/general" element={<News setProgress={setProgress} key="general" country="in" category="general" />} />
          
          </Routes>
        </Router>

      </div>
    )
  }

  export default App;
