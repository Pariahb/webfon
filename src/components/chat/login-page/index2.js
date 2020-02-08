// import React from "react";
// import Input from "../input";
// import Button from "../button";
//
// class LoginPage extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             connection: this.props.connection,
//             onConnect: this.props.onConnect,
//             buttonText: "connect",
//             jidValue: "",
//             passValue: ""
//         };
//         this.handleSubmit = this.handleSubmit.bind(this);
//         this.handleChangePass = this.handleChangePass.bind(this);
//         this.handleChangeJID = this.handleChangeJID.bind(this);
//     }
//
//     componentDidUpdate(prevProps, prevState) {
//         // only update chart if the data has changed
//         if (prevProps.onConnect !== this.props.onConnect) {
//             this.setState({
//                 onConnect: this.props.onConnect
//             });
//         }
//     }
//     handleChangeJID(event) {
//         this.setState({
//             jidValue: event.target.value
//         });
//     }
//     handleChangePass(event) {
//         this.setState({
//             passValue: event.target.value
//         });
//     }
//     handleSubmit(event) {
//         event.preventDefault();
//         if (this.state.jidValue === undefined || this.state.jidValue === "")
//             alert("Blank JID");
//         else if (this.state.passValue === undefined || this.state.passValue === "")
//             alert("Empty pass, please type password");
//         else {
//             if (this.state.buttonText === "connect") {
//                 this.setState({
//                     buttonText: "disconnect"
//                 });
//
//                 this.state.connection.connect(
//                     this.state.jidValue,
//                     this.state.passValue,
//                     this.state.onConnect
//                 );
//             } else {
//                 this.state.connection.disconnect();
//                 this.setState({
//                     buttonText: "connect"
//                 });
//             }
//         }
//     }
//     render() {
//         return (
//             <React.Fragment>
//                 <div className="row">
//                     <div className="col">
//                         <form>
//                             <Input
//                                 label="JID"
//                                 className="col-sm-2 col-form-label"
//                                 size="col-sm-10"
//                                 type="text"
//                                 placeholder="enter your JID..."
//                                 onChange={this.handleChangeJID}
//                                 value={this.state.jidValue}
//                             />
//                             <Input
//                                 label="Password"
//                                 className="col-sm-2 col-form-label"
//                                 size="col-sm-10"
//                                 type="password"
//                                 placeholder="enter your password..."
//                                 onChange={this.handleChangePass}
//                                 value={this.state.passValue}
//                             />
//
//                             <Button
//                                 type="button"
//                                 className="btn btn-primary"
//                                 id="connect"
//                                 value={this.state.buttonText}
//                                 onClick={this.handleSubmit}
//                             />
//                         </form>
//                     </div>
//                 </div>
//             </React.Fragment>
//         );
//     }
// }
//
// export default LoginPage;
