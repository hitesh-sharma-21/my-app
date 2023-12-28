import React, { useCallback, useState, useEffect ,useRef} from 'react'

function PasswordGen() {
    const [length, setLength] = useState(8);
    const [numberAllowed, setNumberAllowed] = useState(false);
    const [charAllowed, setCharAllowed] = useState(false);
    const [password, setPassword] = useState("fs");
            const passwordRef = useRef(null)
    const passwordGenerator = useCallback(() => {
        let pass = "";
        let str = "ABCDEFGHIJKLMNOPQRSTUVabcdefghijklmnopqrstuvwxyz";
        if (numberAllowed) str += "0123456789";
        if (charAllowed) str += "!@#$%^&*";
        for (let i = 0; i < length; i++) {
            let char = Math.floor(Math.random() * str.length + 1)
            pass += str.charAt(char);
        }
        setPassword(pass);

    }, [length, numberAllowed, charAllowed, setPassword]);

    useEffect(() => {
    passwordGenerator();
    }, [length ,charAllowed,numberAllowed,passwordGenerator])
    
const copyPasswordToClip = useCallback(()=>{
//    passwordRef.current?.setSelectionRange(0,5);
    window.navigator.clipboard.writeText(password)
},[password])
    return (
        <div className="container bg-dark my-3 mx-2 py-3 px-3 text-light text-center">
            <h1>Password Generator</h1>
            <div className="row my-3">
                <div className="col-md-8">
                    <input className="form-control"
                        type="text"
                        value={password}
                       
                        readonly />
                </div>
                <div className="col-md-1">
                    <button className="btn btn-primary" onClick={copyPasswordToClip}>Copy</button>
                </div>
                <div className="row my-3">

                <div className="col-md-3">
                        <input
                            type="range"
                            className='form-range'
                            min={6}
                            max={100}
                            value={length}
                            onChange={(e) => { setLength(e.target.value) }}
                            ref={passwordRef}
                            />
                </div>
                       <div className="col-md-1">
                       <label> Length :{length}</label>
                       </div>
                <div className="col-md-1">
                    <input type="checkbox" defaultChecked={numberAllowed}
                        onChange={(e) => {
                            setNumberAllowed((prev) => !prev)
                        }}
                    />
                    <label> Number </label>
                </div>
                <div className="col-md-1">
                    <input type="checkbox" defaultChecked={charAllowed}
                        onChange={(e) => {
                            setCharAllowed((prev) => !prev)
                        }}
                        />
                    <label> character </label>
                </div>
            </div>
                        </div>
        </div>
    )
}

export default PasswordGen