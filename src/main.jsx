import { lazy, StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import DataProvider, { DataContext } from './DataContext.jsx'

const WordsByFirstLetter = lazy(() =>
  import("./components/firstLetter/FirstLetterPage.jsx")
);

const App = lazy(() =>
  import("./App.jsx")
);

const WordSummary=lazy(() =>
  import("./components/words/WordSummary.jsx")
);

const Header=lazy(() =>
  import("./components/header/Header.jsx")
);

const WordList=lazy(()=>
  import('./components/words/WordList.jsx')
)

createRoot(document.getElementById('root')).render(
    <DataProvider>
     <BrowserRouter >
     <Header />
     <Suspense>
     <Routes>
          <Route path="/newagarathi/" element={ <App /> } />
          <Route
            path="/newagarathi/firstLetter/:letter"
            element={<WordsByFirstLetter />}
          />
          <Route
            path="/newagarathi/word/:wordName"
            element={<WordSummary />}
          />
          <Route
            path="/newagarathi/allWords"
            element={<WordList />}
          />
          </Routes>
       </Suspense>
    </BrowserRouter>
    </DataProvider>
  ,
)
