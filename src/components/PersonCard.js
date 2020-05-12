import React from 'react';

class PersonCard extends React.Component {
    render() {
        return (
            <div style={{
                border: '4px dashed red',
                background: 'green'
            }}>
                {this.props.children}
            </div>
        )
    }
}

export default PersonCard;