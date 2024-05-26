import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Header from './components/header';
import Body from './components/body';
import Search from './components/search';
import Footer from './components/footer';
import Result from './components/result';

export default function App(){
    return (
        <div>
            <Header />
            <Body />
            <Search />
            <Result />
            <Footer />

        </div>
    )
  }
ReactDOM.render(<App />, document.getElementById('root'));
