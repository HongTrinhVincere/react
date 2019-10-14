import React from 'react';
class shortSummary extends React.Component{
    render(){
        //const {title} = this.props;
        const {data} = this.props;
        console.log(this.props);
        console.log(data.title);
        return(
            <div>{data.title}</div>
        );
    }
}

export {shortSummary};