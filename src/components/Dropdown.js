import React from 'react';

class Dropdown extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			expanded: false,
			value: 'Backar'
		};
	}
	
	expand() {
		this.setState({ expanded: true });
	}
	
	collapse() {
		this.setState({ expanded: false });
	}
	
	handleItemClick(view) {
        const { updateView } = this.props;
		this.setState({
			expanded: false,
			value: view.value
		}, () => updateView(view.code));
	}
	
	handleTriggerClick() {
		this.setState({ expanded: !this.state.expanded });
	}
	
	render() {
		let dropdown = undefined;
		if (this.state.expanded) {
			dropdown = (
				<div className="ddcontent">
				{
					this.props.options.map((item, i) => {
						return this.state.value !== item.value && <div key={i} onClick={() => { this.handleItemClick(item); }} className="item">{item.value}</div>;
					})
				}
				</div>
			);
		}
		
		return (
			<div className={`dropdown ${this.state.expanded ? 'active' : ''}`}
				tabIndex="0"
				onBlur={() => { this.collapse(); }}>
				<div className="trigger" onClick={() => { this.handleTriggerClick(); }}>
					{this.state.value}
				</div>
				{dropdown}
			</div>
		);
	}
}

export default Dropdown;