import React from 'react';
import  './App.css'
import Header from '../Header/Header';
import SearchBox from '../SearchBox/SearchBox';
import ResultsContainer from '../ResultsContainer/ResultsContainer';


const name = require('@rstacruz/startup-name-generator');



class App extends React.Component
{
    state={
        headerText : "Name It !",
        headerExpanded : true,
        suggestedName : []
    };

    handleInputChange = (inputText)=>{
       
        this.setState({headerExpanded : inputText.length > 0 ? false : true,
            suggestedName : inputText ? name(inputText) : []
        })
    };

    render()
    {
        return(
            <div>
                <Header headerExpanded={this.state.headerExpanded} headTitle={this.state.headerText}></Header>
                <SearchBox handleInputChange={this.handleInputChange}></SearchBox>
                <ResultsContainer suggestedNames ={this.state.suggestedName}></ResultsContainer>
                
            </div>

        )
    }
}


export default App;