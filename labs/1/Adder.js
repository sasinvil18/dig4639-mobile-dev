class Adder {
    constructor(props){
        this.props = props;
    }
    sum() {
        if(a != undefined && b != undefined){
            let bet = a + b;
            return (bet);
        }
        else{
            return null;
        }
    }

    render() {
        //return backtick with the the string "<p>The sum of 5 and 10 is 15</p>";
        return `<p>The sum of ${a} and ${b} is ${a+b}</p>`
    }
}
    

module.exports = Adder;