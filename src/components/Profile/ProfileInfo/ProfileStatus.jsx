import React from 'react';


class ProfileStatus extends React.Component {

    state = {
        editMode: false,  // 'editMode' - нами ВЫДУМАНОЕ название, можно придумать любое другое смысловое название.
        status: this.props.status
    }

    activateEditMode = () => {
        // this.forceUpdate();  // такой ХАК - костыль, - типа, ЭЙ , Реакт.. мы изменилст - перересуй нас... Это делаем как крайний случай...
        this.setState({
            editMode: true
        });

    }

    deactivateEditMode = () => {
        this.setState({
            editMode: false
        });

        this.props.updateStatus(this.state.status);

    }

    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        });
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            });
        }
    }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                <div>
                    <span onDoubleClick={this.activateEditMode}>{this.props.status || "-----"}</span>
                </div>
                }
                {this.state.editMode &&
                <div>
                    <input onChange={this.onStatusChange} autoFocus={true}
                           onBlur={this.deactivateEditMode.bind(this)}
                           value={this.state.status}/>
                </div>
                }
            </div>
        )
    }
}

export default ProfileStatus;


