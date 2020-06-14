import React, { Component } from 'react';

class  Counters extends Component {

    componentDidUpdate(prevProps, prevState){
        if(prevProps.counter.value !== this.props.counter.value){
            // Ajax call and get new data from the server
        }
    }


    render() { 
        
        return (
            <div>
                {/* <img src={this.state.imageUrl} alt=""/> */}
                <span  className={this.getBadgeClasses()}>{this.formatCount ()}</span>


                {/* Button Increment */}
                <button 
                    onClick={() => this.props.onIncrement(this.props.counter)} 
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
        classes += this.props.counter.value === 0 ? "warning" : "primary";
    }

    
    formatCount(){
        const { value } = this.props.counter;
        return value === 0 ? "Zero" : value;
    }
}

export default Counters;