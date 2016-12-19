import React from 'react';

class Dropdown extends React.Component {
    constructor() {
        super();
        this.state = {isShowing: false, identifier: Date.now()}
    }

    handleClick(e) {
        console.log(this,this.refs, e.target)

        this.state.isShowing ?
            this.setState({isShowing: false}) :
            this.setState({isShowing: true});
    }
    preventClick(e) {
        if (!e) {const e = window.event};
        e.cancelBubble = true;
        if (e.stopPropagation) {e.stopPropagation()};
    }
    render() {
        return (
            <li onClick={this.handleClick.bind(this)} className={this.state.isShowing ? 'dropdown is-showing' : 'dropdown'}>
                <span className='dropdown-li'>
                    {this.props.img ? <img className={this.props.imgClass ? this.props.imgClass : ''} src={this.props.img} /> : ''}
                    {this.props.name ? <span>{this.props.name}</span> : ''}
                    {this.props.counter ? <span className='counter-span'>{this.props.counter}</span> : ''}            
                </span>
                         <ul className='dropdown-child' onClick={this.preventClick.bind(this)} ref='child'>
                    {this.props.children}
                </ul>
            </li>
        )
    }
}

export default Dropdown;
