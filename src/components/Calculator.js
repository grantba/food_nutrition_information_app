import React from 'react'
import '../css/Calculator.css'

// Use insert() function to insert the number in textview.
function insert(num, event) {
    if (event.view.document.form1.textview.value === "") {
        event.view.document.form1.textview.value = num
    } else {
        event.view.document.form1.textview.value = event.view.document.form1.textview.value + num
    }
}

// Use equal() function to return the result based on passed values.
function equal(event) {
    let exp = event.view.document.form1.textview.value
    if (exp) {
        event.view.document.form1.textview.value = eval(exp)
    }
}

/* Here, we create a backspace() function to remove the number at the end of the numeric series in textview. */
function backspace(event) {
    var exp = event.view.document.form1.textview.value;
    event.view.document.form1.textview.value = exp.substring(0, exp.length - 1) /* remove the element from total length ? 1 */
}

function clear(event) {
    event.view.document.form1.textview.value = ' '
}

export default function Calculator() {
    return (
        <div id="calculator" className="formstyle">
            <form name="form1">
                <input className="textview" id="display" name="textview"/>
            </form>
            <center>
            <table>
                <tbody>
                    <tr> 
                        <td><input className="btn" type="button" value="🆑" onClick={(event) => clear(event)}/></td>
                        <td><input className="btn" id="back" type="button" value="⬅" onClick={(event) => backspace(event)}/></td>
                        <td><input className="btn" type="button" value="➗" onClick={(event) => insert('/', event)}/></td>
                        <td><input className="btn" type="button" value="✖️" onClick={(event) => insert('*', event)}/></td>
                    </tr>

                    <tr> 
                        <td><input className="btn" id="symbols" type="button" value="7" onClick={(event) => insert(7, event)}/></td>
                        <td><input className="btn" id="symbols" type="button" value="8" onClick={(event) => insert(8, event)}/></td>
                        <td><input className="btn" id="symbols" type="button" value="9" onClick={(event) => insert(9, event)}/></td>
                        <td><input className="btn" type="button" value="➖" onClick={(event) => insert('-', event)}/></td>
                    </tr>
        
                    <tr> 
                        <td><input className="btn" id="symbols" type="button" value="4" onClick={(event) => insert(4, event)}/></td>
                        <td><input className="btn" id="symbols" type="button" value="5" onClick={(event) => insert(5, event)}/></td>
                        <td><input className="btn" id="symbols" type="button" value="6" onClick={(event) => insert(6, event)}/></td>
                        <td><input className="btn" type="button" value="➕" onClick={(event) => insert('+', event)}/></td>
                    </tr>
        
                    <tr> 
                        <td><input className="btn" id="symbols" type="button" value="1" onClick={(event) => insert(1, event)}/></td>
                        <td><input className="btn" id="symbols" type="button" value="2" onClick={(event) => insert(2, event)}/></td>
                        <td><input className="btn" id="symbols" type="button" value="3" onClick={(event) => insert(3, event)}/></td>
                        <td rowSpan="5"><input className="btn" id="symbols" style={{height: "110px"}} type="button" value="=" onClick={(event) => equal(event)}/></td>
                    </tr>

                    <tr>
                        <td colSpan="2"><input className="btn" id="symbols" style={{width: "106px"}} type="button" value="0" onClick={(event) => insert(0, event)}/></td>
                        <td><input className="btn" id="symbols" type="button" value="." onClick={(event) => insert('.', event)}/></td>
                    </tr>
                </tbody>
	        </table>
            </center>
        </div>
    )
}
