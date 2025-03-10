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
          <Route path="/newAgarathi/" element={ <App /> } />
          <Route
            path="/newAgarathi/firstLetter/:letter"
            element={<WordsByFirstLetter />}
          />
          <Route
            path="/newAgarathi/word/:wordName"
            element={<WordSummary />}
          />
          <Route
            path="/newAgarathi/allWords"
            element={<WordList />}
          />
          </Routes>
       </Suspense>
    </BrowserRouter>
    </DataProvider>
  ,
)
