import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {
    renderList() {
        return this.props.books.map(book => {
            return (
                <li
                    className="list-group-item"
                    onClick={() => this.props.selectBook(book)}
                    >
                    {book.title}
                </li>
            )
        })
    }
    
    render() {
        return (
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        books: state.books
    };
}

const mapDispatchToProps = (dispatch) => {
    // Whenever selectBook is called, the result is passed to all the reducers
    return bindActionCreators({ selectBook: selectBook }, dispatch);
}

// Promote BookList from a component to a container
// needs to know about this new dispatch method, select Book. Makes it available as a prop
export default connect(mapStateToProps, mapDispatchToProps)(BookList);