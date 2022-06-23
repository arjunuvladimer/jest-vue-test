<template>
<div>
    <form @submit.prevent="submit">
        <label>Email</label>
        <input name="email"  type="email" placeholder="Enter Email" v-model="customer.email"/>
        <br/>
        <label>Description</label>
        <textarea placeholder="Enter Description" v-model="customer.description" />
        <br/>
        <label>Country</label>
        <select v-model="customer.country">
            <option value="india">India</option>
            <option value="australia">India</option>
        </select>
        <br/>
        <label>Subscribe</label>
        <input type="checkbox" v-model="customer.subscribe" />
        <br/>
        <label>Interval</label>
        <input type="radio" value="day" v-model="customer.interval" />
        <input type="radio" value="month" v-model="customer.interval" />
        <input type="radio" value="year" v-model="customer.interval" />
        <br/>
        <button type="submit">Submit</button>
    </form>
</div>
</template>

<script>
export default{
    name: 'Form',
    data: function (){
        return{
            customer:{
                email:'',
                description:'',
                country:'',
                subscribe: false,
                interval:''
            }
        }
    },
    methods:{
        submit(){
            this.$emit('submit', this.customer)
            
        }
    }
}
</script>