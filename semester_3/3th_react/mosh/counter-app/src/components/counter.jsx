import React, { Component } from 'react';
class  Counter extends Component {
    state = {
        count: 0
        // imageUrl: 'https://picsum.photos/200'
        // tags : [ "tag1", "tag2", "tag3"]
    };

    // constructor(){
    //     super();
    //     this.handleIncrement.bind = this.handleIncrement.bind(this);
    // }
    
    // styles = {
    //     fontSize: 20,
    //     fontWeight: "bold"
    // };
    // renderTags() {
    //     if (this.state.tags.length === 0)
    //     return <p>There is no Tags!</p>;
    //     return <ul>{this.state.tags.map(tag =>  <li>{ tag }</li>)}</ul>;
    // }
    handleIncrement = () =>  {
        this.setState({ count: this.state.count + 1 })
        
    }

    render() {  
        return (
            <div>
                {/* <img src={this.state.imageUrl} alt=""/> */}
                <span  className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button 
                    onClick={this.handleIncrement} 
                    className="btn btn-secondary btn-sm "
                >
                    Increment
                </button>
                {/* {this.renderTags()} */}
            </div>
        );
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.state.count === 0 ? "warning" : "primary";
    }

    formatCount(){
        const { count } = this.state;
        return count === 0 ? "Zero" : count;
    }
}

export default Counter;