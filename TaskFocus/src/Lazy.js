import React, { Component } from 'react'
import axios from 'axios'


class Question extends Component {
    constructor(props) {
        super(props)
        this.state = {

            totalData: {
                a : 1,
                name : "bindu",
                options : []
            }
        }
    }

    successCB(a) {

        console.log("vishnu succes", a)
    }

    errorCB(error) {
        console.error("vishn erro", error)
    }

    componentDidMount() {
        setTimeout(function () {
             axios.get('.|example_2.json')
                .then(res => {
                    console.log("bindu", res)

                    this.setState({
                        totalData: res.data
                    })

                }
                )
                .catch(error => {
                    console.error("error", error)
                })

                this.setState({
                    totalData : data
                })

               
            

            
            axios.get('./example_2.json')
                .then(this.successCB, this.errorCB)
        }.bind(this), 3000);


    }
    render() {
        console.log("hima", this.state.totalData)
        let array = [], displayList = [];
        // if (Object.keys(this.state.totalData).length > 0) {
        //     for (let i = 0; i < this.state.totalData.quiz.sport.q1.options.length; i++) {
        //         array.push(
        //             <div>
        //                 <input type="radio" name="option"
        //                     value={this.state.totalData.quiz.sport.q1.options[i]} />
        //                 {this.state.totalData.quiz.sport.q1.options[i]}
        //             </div>
        //         );
        //     }

        // }


        if (Object.keys(this.state.totalData).length > 0) {


            displayList = this.state.totalData.quiz.sport.q1.options.map((item) => {
                return <li key={item}>{item}</li>
            })

        }

        console.log("vishnu ", displayList)

        return (

            <div>
                {Object.keys(this.state.totalData).length > 0 ?


                    <div> {this.state.totalData.quiz.sport.q1.question}
                        {this.state.totalData.quiz.sport.q1.options.map(item =>
                            <div>
                                <input type="radio" name="option"
                                    value={item} />
                                {item}
                            </div>
                        )}

                        {this.state.totalData.quiz.maths.q1.question}
                        {this.state.totalData.quiz.maths.q1.options.map((item) =>
                            <div>
                                <input type="radio" name="option"
                                    value={item} />
                                {item}
                            </div>
                        )}


                        {this.state.totalData.quiz.maths.q2.question}
                        {this.state.totalData.quiz.maths.q2.options.map((item) => (
                            <div>
                                <input type="radio" name="option"
                                    value={item} />
                                {item}
                            </div>
                        )
                        )}
                    </div>




                    : "NoData"}


                {/* {this.state.data.map(questions => <li>{questions.quiz.sport.q1}</li>)} */}
            </div>
        )
    }

}
export default Question;