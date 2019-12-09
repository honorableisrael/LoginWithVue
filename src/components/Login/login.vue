<template>
    <div class="loginwrapper">
          <form v-on:submit.prevent ="errorMessage.length==0? validateForm():''" class="formwrapper">
                <div v-if="errorMessage" class="errormessage">
                   <div v-for="error in errorMessage" v-bind:key="error.index">
                    {{error}}
                   </div>
                </div>
                <div class="userinputwrapper">
                <label for="username">
                <p>Username</p>
                <input type="text" v-on:click="clearError" v-model="username" id="username" class="namesfield" value="" />
                </label>
                </div>
                <div>
                <label for="password">
                <p>Password</p>
                <input type="password" v-on:click="clearError" id="password" v-model="password" class="namesfield" value="" />
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
            password:'',
            errorMessage:[]
        }
    },
    methods:{
        validateForm(){
            console.log(history)
            if(this.username ==''){
                this.errorMessage.push(' Username is required')
            }
            if(this.password ==''){
                this.errorMessage.push(' Password is required')
                return
            }
            if(this.username !=='' && this.password !==''){
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
