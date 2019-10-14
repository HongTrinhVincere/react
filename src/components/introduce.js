import React, {Component} from 'react';
class introduce extends Component {
    render() {
        const {data} = this.props;
        return (
            <React.Fragment>
                <h1>{data.title}</h1>
                <p>{data.desc1}</p>
                <p>{data.desc2}</p>
            </React.Fragment>
        )
    }
}
export {introduce};