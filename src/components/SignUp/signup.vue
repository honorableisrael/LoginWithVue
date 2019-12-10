<template>
    <div class="loginwrapper">
          <form v-on:submit.prevent ="errorMessage.length==0? validateForm():''" class="formwrapper">
            <h3 class="text-center titlesignup">Sign Up</h3>
                <div v-if="errorMessage" class="errormessage">
                   <div v-for="error in errorMessage" v-bind:key="error.index">
                    {{error}}
                   </div>
                </div>
                <div class="userinputwrapper">
                <label for="firstname">
                <p>First Name</p>
                <input type="text" v-on:click="clearError" v-model="firstname" id="firstname" class="namesfield" value="" />
                </label>
                </div>
                 <div class="userinputwrapper">
                <label for="lastname">
                <p>Last Name</p>
                <input type="text" v-on:click="clearError" v-model="lastname" id="lastname" class="namesfield" value="" />
                </label>
                </div>
                 <div class="userinputwrapper">
                <label for="email">
                <p>Email</p>
                <input type="text" v-on:click="clearError" v-model="email" id="email" class="namesfield" value="" />
                </label>
                </div>
                <div>
                <label for="password">
                <p>Password</p>
                <input type="password" v-on:click="clearError" id="password" v-model="password" class="namesfield" value="" />
                </label>
                </div>
                <div><button type="submit" class="submitbtn">Submit</button></div>
                <!-- <span> Existing user?<router-link to='/signup'> Login</router-link></span> -->
          </form>
    </div>
</template>
<script>
import Vue from 'vue';
export default Vue.extend({
    name:'SignUp',
    data(){
        return{
            firstname:'',
            lastname:'',
            email:"",
            password:'',
            errorMessage:[]
        }
    },
    methods:{
        validateForm(){
            console.log(history)
            if(this.firstname ==''){
                this.errorMessage.push('firstname is required')
            }
            if(this.password ==''){
                this.errorMessage.push(' Password is required')
            }
            if(this.lastname ==''){
                this.errorMessage.push('lastname is required')
            }
            if(this.email==''){
                this.errorMessage.push('email is required')
                return
            }
            if(this.firstname !=='' && this.password !==''){
                this.submitForm()
            }
            console.log(this.errorMessage)
        },
        clearError(){
            console.log('form fields cleared')
            this.errorMessage=[]
        },
        submitForm(){
            const data = {
                firstname:this.firstname,
                lastname:this.lastname,
                email:this.username,
                password:this.password
            }
            console.log(data)
            localStorage.setItem('userinfo', JSON.stringify(data)) //in the absence of a real api for user auth this would handle auth
            alert('Form Submitted')
            //make network request
            //axios post
            this.$router.push('/dashboard') 

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
.titlesignup{
    position: relative;
    top:-3.6rem;
    text-align: center;
}
.formwrapper{
    border-top: 2px solid  #7064c7;
    box-shadow: rgba(0, 0, 0, 0.47) 0px 5px 14px;
    padding: 6rem 1rem;
    width: 40%;
}
.submitbtn{
    border-radius: 2rem;
    background: transparent;
    color: white;
}
.submitbtn:focus{
    outline: none;
}
.errormessage{
    color: red;
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
    border-bottom: 2px solid #b1abdd;
}
.submitbtn{
    width: 100%;
    position: relative;
    top: 1.2rem;
    padding: 5px 10px;
    color: white;
    background-image: linear-gradient(to right,#b4afb1,#39307a);
    cursor: pointer;
} 
</style>
