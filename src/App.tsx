import React from 'react';
import './App.css';
import {Header} from "./components/header/Header";
import {ContainerComponent} from './components/container/Container';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Character} from './components/Character/Character';
import {Location} from './components/Location/Location';
import {Episode} from './components/Episode/Episode';
import {Hero} from './components/hero/Hero';
import LinearProgress from '@mui/material/LinearProgress/LinearProgress';
import {useSelector} from "react-redux";
import {RootState} from './store/store';



function App() {
    const loading = useSelector<RootState>((state: RootState) => state.loading.loading);


    return (

        <div>
            <Header/>
            {loading ? <LinearProgress/> : <></>}

            <div className={"flex justify-between"}>
                <ContainerComponent>
                    <Routes>
                        <Route path={'/'} element={<Character/>}/>
                        <Route path={'/characters'} element={<Character/>}/>
                        <Route path={'/location'} element={<Location/>}/>
                        <Route path={'/episode'} element={<Episode/>}/>

                        <Route path={`/:characters/:id`} element={<Hero/>}/>
                        <Route path={`/:episode/:id`} element={<Hero/>}/>
                        <Route path={`/:location/:id`} element={<Hero/>}/>
                    </Routes>
                </ContainerComponent>
            </div>
        </div>

    );
}

export default App;
