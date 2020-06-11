import React, { Component } from 'react';
class  Counters extends Component {
    state = {
        value: this.props.counter.value
        // imageUrl: 'https://picsum.photos/200'
     
    };

    render() { 
        return (
            <div>
                {/* <img src={this.state.imageUrl} alt=""/> */}
                <span  className={this.getBadgeClasses()}>{this.formatCount ()}</span>


                {/* Button Increment */}
                <button 
                    onClick={this.handleIncrement} 
                    className="btn btn-secondary btn-sm"
                >
                    Increment
                </button>


                {/* Button delete */}
                <button 
                    onClick={() => this.props.onDelete(this.props.counter.id)} 
                    className="btn btn-danger btn-sm m-2"
                >
                    Delete
                </button>
                
            </div>
        );
    }

    ///////////// METHODS /////////////////


    // method for handle boostrap calss //
    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.state.value === 0 ? "warning" : "primary";
    }

    
    formatCount(){
        const { value } = this.state;
        return value === 0 ? "Zero" : value;
    }

    // method to increment the counter //
    handleIncrement = (product) =>  {
        this.product = product;
        this.setState({ value: this.state.value + 1 })
        
    }
}

export default Counters;