import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookList extends Component {
    renderList() {
        console.log(this.props);
        return this.props.books.map(book => {
            return (
                <li className="list-group-item">{book.title}</li>
            )
        })
    }
    
    render() {
        console.log('Rendering')
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

export default connect(mapStateToProps)(BookList);