import React, { Component } from 'react';
class  Counters extends Component {
    state = {
        value: this.props.value
        // imageUrl: 'https://picsum.photos/200'
     
    };

    handleIncrement = (product) =>  {
        this.product = product;
        this.setState({ value: this.state.value + 1 })
        
    }

    render() { 
        return (
            <div>
                {/* <img src={this.state.imageUrl} alt=""/> */}
                <span  className={this.getBadgeClasses()}>{this.formatvalue()}</span>
                <button 
                    onClick={ () => this.handleIncrement (this.product)} 
                    className="btn btn-secondary btn-sm "
                >
                    Increment
                </button>
                
            </div>
        );
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.state.value === 0 ? "warning" : "primary";
    }

    formatvalue(){
        const { value } = this.state;
        return value === 0 ? "Zero" : value;
    }
}

export default Counters;