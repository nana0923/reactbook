// import React, { Component } from 'react';

// class EventPractice extends Component {

//     state = {
//         message: ''
//     }

//     // render() {
//     //     return (
//     //         <div>
//     //             <h1>이벤트 연습</h1>
//     //             <input
//     //                 type="text"
//     //                 name="message"
//     //                 placeholder="아무거나 입력해 보세요"
//     //                 value={this.state.message}
//     //                 onChange={
//     //                     (e) => {
//     //                         this.setState({
//     //                            message: e.target.value 
//     //                         });
//     //                     }
//     //                 }
//     //             />
//     //             <button onClick={
//     //                 () =>{
//     //                     alert(this.state.message);
//     //                     this.setState({
//     //                         message: ''
//     //                     });
//     //                 }
//     //             }>확인</button>
//     //         </div>
//     //     );
//     // }
    
//     // constructor(props) {
//     //     super(props);
//     //     // 클래스의 임의 메서드가 특정 HTML에 등록되는 과정에서 this와 메서드의 관계가 깨져버리기 때문에 메서드를 this와 바인딩하는 작업 필요
//     //     this.handleChange = this.handleChange.bind(this); 
//     //     this.handleClick = this.handleClick.bind(this);
//     // }

//     // handleChange(e) {
//     //     this.setState({
//     //         message: e.target.value
//     //     });
//     // }
//     // handleClick(e) {
//     //     alert(this.state.message);
//     //     this.setState({
//     //         message: ''
//     //     });
//     // }

//     // eslint-disable-next-line no-dupe-class-members
//     state = {
//         username: '',
//         message: ''
//     }

//     handleChange = (e) => {
//         this.setState({
//            [e.target.name]: e.target.value
//         })
//     }

//     handleClick = () => {
//         alert(this.state.username + ':' + this.state.message);
//         this.setState({
//             username: '',
//             message: ''
//         });
//     }

//     handleKeyPress = (e) => {
//         if(e.key === 'Enter') {
//             this.handleClick();
//         }
//     }

//     render() {
//         return (
//             <div>
//                 <h1>이벤트 연습</h1>
//                 <input
//                     type="text"
//                     name="username"
//                     placeholder="아무거나 입력해 보세요"
//                     value={this.state.username}
//                     onChange={this.handleChange}
//                 />
//                  <input
//                     type="text"
//                     name="message"
//                     placeholder="아무거나 입력해 보세요"
//                     value={this.state.message}
//                     onChange={this.handleChange}
//                     onKeyPress={this.handleKeyPress}
//                 />
//                 <button onClick={this.handleClick}>확인</button>
//             </div>
//         );
//     }

// }

// export default EventPractice;

import React, { useState } from 'react';

const EventPractice = () => {
    // const [username, setUsername] = useState('');
    // const [message, setMessage] = useState('');
    // const onChangeUsername = e => setUsername(e.target.value);
    // const onChangeMessage = e => setMessage(e.target.value);

    const [form, setForm] = useState({
        username: '',
        message: ''
    });
    const { username, message } = form;
    const onChange = e => {
        const nextForm = {
            ...form, /// 기존의 form 내용을 이곳에 복사한 뒤
            [e.target.name]: e.target.value // 원하는 값을 덮어 씌우기
        };
        setForm(nextForm);
    }

    const onClick = () => {
        alert(username + ':' + message);
        setForm({
            username:'',
            message:''
        })
    };
    const onKeyPress = e => {
        if(e.key === 'Enter') {
            onClick();
        }
    }
    return (
        <div>
            <h1>이벤트 연습</h1>
            <input
                type="text"
                name="username"
                placeholder="아무거나 입력해 보세요"
                value={username}
                onChange={onChange}
            />
                <input
                type="text"
                name="message"
                placeholder="아무거나 입력해 보세요"
                value={message}
                onChange={onChange}
                onKeyPress={onKeyPress}
            />
            <button onClick={onClick}>확인</button>
        </div>
    );
};

export default EventPractice;