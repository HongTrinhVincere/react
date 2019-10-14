import React, {Component} from 'react';
import * as LibComponent from "../components";

class summary extends Component {
    render() {
        return this.props.summaries.map(summary => (
            <React.Fragment>
                <LibComponent.introduce data={summary.summary_infos.introduce} />
                <LibComponent.shortSummary data={summary.summary_infos.short_summary} />
            </React.Fragment>
        ));
    }
}

export {summary};