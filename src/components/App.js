import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import DisplayImages from './DisplayImages';

class App extends React.Component {
    state = { images: [] }
    onSearchSubmit = async (term) => {
       const response = await unsplash.get('/search/photos', {
            params: { query: term, per_page: 75 }
       });
       this.setState({ images: response.data.results });
       
    }

    render() {
        return (
            <div className="ui container" style={ { marginTop: '10px'} }>
                <SearchBar onSubmitApp={this.onSearchSubmit}/>
                <div>
                    <DisplayImages images={this.state.images}/>
                </div>
            </div>
        )
    }
}

export default App;