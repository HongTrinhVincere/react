import React, {Component} from 'react';


class Person extends Component {
    render() {
        const {data} = this.props;
        return (
            <React.Fragment>
                <p>{data.fullName}</p>
                <p>{data.age}</p>
                <p>{data.birthday}</p>
                <p>{data.gender}</p>
                <p>{data.email}</p>
            </React.Fragment>
        );
    }
}

export default Person;