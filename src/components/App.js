import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import DisplayImages from './DisplayImages';

class App extends React.Component {
    state = { images: [] }
    onSearchSubmit = async (term) => {
       const response = await unsplash.get('/search/photos', {
            params: { query: term }
       });
       this.setState({ images: response.data.results });
       
    }

    render() {
        return (
            <div className="ui container" style={ { marginTop: '10px'} }>
                <SearchBar onSubmitApp={this.onSearchSubmit}/>
                Found: {this.state.images.length}
                <div>
                    <DisplayImages url="https://images.unsplash.com/photo-1502082553048-f009c37129b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjI5ODN8MHwxfHNlYXJjaHwyfHx0cmVlfGVufDB8fHx8MTY1MDk4ODgyMA&ixlib=rb-1.2.1&q=80&w=1080"/>
                </div>
            </div>
        )
    }
}

export default App;