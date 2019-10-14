import React from 'react';
import Person from './Person';

class shortSummary extends React.Component{
    render(){
        const {data} = this.props;
        return (
            <React.Fragment>
                <h2>{data.title}</h2>
                <Person data={data.Person} />
            </React.Fragment>
        );
    }
}

export {shortSummary};