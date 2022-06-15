import React from 'react';

class SearchBar extends React.Component {

    state = { term: '' };
    /* Creating a controlled element that's global for the class.
        Centralize all the data in the react portion rather than the dom html
    */
    

    onFormSubmit = (e) => {
    // evoked in the from => onSubmit
        e.preventDefault();
        this.props.onSubmit(this.state.term);
    }

    render() {
        return (
            <div className ='ui segment'>
                <form onSubmit={this.onFormSubmit} className = 'ui form'>
                    <div className="ui field">
                        <label>Image Search</label>
                        <input 
                        type='text' 
                        value={this.state.term} //showing user's input realtime in the form
                        onChange={(e)=> this.setState({term: e.target.value})}
                        //every time setState is called, the whole component rerenders
                        /* onChange is vanilla js handling events, also there's [onClick, onSubmit] */
                        />
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar;