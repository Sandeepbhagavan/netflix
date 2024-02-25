export const checkValidData=(email,password)=>{
    //const isNameValid=/^(?!-)[a-zA-Z-]*[a-zA-Z]$/.test(name)
    const isEmailValid=/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(email);
    const isPasswordValid=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&^])[A-Za-z\d@.#$!%*?&]{8,15}$/.test(password);
    //if(!isNameValid) return "please provide valid name"
    if(!isEmailValid)
return "please provide email correctly";
if(!isPasswordValid)
return "please provide password correctly";
return null;

}