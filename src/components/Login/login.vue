<template>
<div class="loginwrapper">
          <form v-on:submit.prevent ="submitForm()" class="formwrapper">
                <div class="userinputwrapper">
                <label for="username">
                <p>Username</p>
                <input type="text" v-model="username" id="username" class="namesfield" value="" />
                </label>
                </div>
                <div>
                <label for="password">
                <p>Password</p>
                <input type="password" id="password" v-model="password" class="namesfield" value="" />
                </label>
                </div>
                <div><button type="submit" class="submitbtn">Submit</button></div>
          </form>
    </div>
</template>
<script>
import Vue from 'vue';
export default Vue.extend({
    name:'Login',
    data(){
        return{
            username:'',
            password:''
        }
    },
    methods:{
        submitForm(){
            const data = {
                email:this.username,
                password:this.password
            }
            console.log(data)
            alert(data)
            //make network request
            
        }
    }
})

</script>

<style>
    
.loginwrapper{
    text-align: center; 
    display: flex;
    justify-content: center;
    margin: 10%;
}
.formwrapper{
    border-top: 2px solid  rgb(115, 170, 153);
    box-shadow: rgba(0, 0, 0, 0.47) 0px 5px 14px;
    padding: 6rem 1rem;
    width: 40%;
}
.submitbtn{
    border-radius: 2rem;
    background: transparent;
    color: violet;
}
.namesfield{
    border: none;
    width: 25em;
    border-bottom: 1px solid lightgray;
}
@media(max-width:1005px){
    .namesfield{
        width: 80%;
    }
}
.userinputwrapper{
    padding-top: 1rem;
}
.namesfield:focus{
    outline: none;
}
.namesfield:focus{
    transition: 2s ease-in-out;
    animation: cubic-bezier();
    animation-direction: alternate;
    border-bottom: 2px solid rgb(115, 170, 153);
}
.submitbtn{
    width: 100%;
    position: relative;
    top: 1.2rem;
    padding: 5px 10px;
    color: white;
    background: rgb(115, 170, 153);
    cursor: pointer;
} 
</style>
