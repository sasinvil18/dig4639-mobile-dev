class Adder {
    constructor(props){
        this.props = props;
        this.props.a = a;
        this.props.b = b;
    }
    sum() {
        if(this.props.a != undefined && b != undefined){
            let bet = this.props.a + this.props.b;
            return (bet);
        }
        else{
            return null;
        }
    }

    render() {
        //return backtick with the the string "<p>The sum of 5 and 10 is 15</p>";
        return (
            `<p>The sum of ${this.props.a} and ${this.props.b} is ${this.props.sum}</p>`
        );
    }
}
    

module.exports = Adder;