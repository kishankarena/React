export const submit =(data)=>{
    return{
     type:"submit",
     payload:data,
    };
}
export const logout = () => {
    return{
        type:"logout"
    };
}