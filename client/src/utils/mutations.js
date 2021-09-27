import {gql} from "@apollo/client";

// mutation for user login
export const LOGIN_USER = gql`
    mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            token
            user {
                _id
                username
            }
        }
    }
`;

// mutation for creating new user
export const ADD_USER = gql`
    mutation addUser($username: String!, $password: String!, $email: String!) {
        addUser(username: $username, password: $password, email: $email) {
            token
            user {
            username
            _id
            email
            }
        }
    }
`;

// mutation for saving book
export const SAVE_BOOK = gql`
    mutation saveBook($input: bookInput!) {
        saveBook(input: $input) {
        username
        _id
        bookCount
        savedBooks {
            bookId
            authors
            image
            link
            title
            description
            }
        }
    }
`;

// mutation for deleting a book
export const REMOVE_BOOK = gql`
    mutation removeBook($bookId: String!) {
        removeBook(bookId: $bookId) {
        _id
        username
        bookCount
        savedBooks {
            bookId
            authors
            image
            link
            title
            description
        }
    }
}
`;