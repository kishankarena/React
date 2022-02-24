import React from 'react';
import AppHeader from './components/AppHeader';
import './App.css'
import AppContent from './components/AppContent';
import AddTask from './components/addtask/AddTask';


const App = () => {

    const tasks = [
        {
            id: 'e1',
            title: 'Buy new sweatshirt'
        },
        {
            id: 'e2',
            title: 'Begin promotional'
        },
        {
            id: 'e3',
            title: 'Read an article'
        },
        {
            id: 'e4',
            title: 'Try not to fall asleep'
        },
        {
            id: 'e5',
            title: 'Watch \'Sherlock\''
        },
        {
            id: 'e6',
            title: 'Begin QA for the product'
        },
        {
            id: 'e7',
            title: 'Go for a walk'
        },

    ];

    return (
        <div className="app">
            <AppHeader />
            <AppContent items={tasks} />
            <AddTask />

        </div>
    )

}
export default App;


