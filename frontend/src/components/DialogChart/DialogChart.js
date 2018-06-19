import React, { PureComponent } from 'react';
import { Button, DialogContainer } from 'react-md';

export default class DialogChart extends PureComponent {
    constructor(props){
        super(props)
    }

    hide = () => {
        this.props.onChange(false);
    }

    render() {
        const { visible } = this.props;
        const actions = [{
            onClick: this.hide,
            primary: true,
            children: 'Turn on promotion',
        }, {
            onClick: this.hide,
            primary: true,
            children: 'No thanks',
        }];

        return (
            <div>
                <DialogContainer
                    id="speed-boost"
                    visible={visible}
                    title="Use Muse's promote service?"
                    onHide={this.hide}
                    aria-describedby="speed-boost-description"
                    modal
                    actions={actions}
                >
                    <p id="speed-boost-description" className="md-color--secondary-text">
                        Let Muse help promote your artwork. This means listing art pieces at the top of searching result.
                    </p>
                </DialogContainer>
            </div>
        );
    }
}
