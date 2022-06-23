import Form from '../../src/components/Form.vue'

import {mount} from '@vue/test-utils'

describe('Submitting Form Details', ()=>{
    it('form check', async () => {
        // Mounting Form Component with Test Utilities
         const wrapper = mount(Form) 
        // Details to be stored
        const email= 'arjunuvlad@gmail.com'
        const description = 'Hello I am filling the form' 
        const country = 'india'
        // Email find(elementName[atrribute])
        await wrapper.find('input[name=email]').setValue(email)
        // Description
        await wrapper.find('textarea').setValue(description)
        // Country
        await wrapper.find('select').setValue(country)
        // Subscribe
        await wrapper.find('input[type=checkbox]').setValue()
        // Interval
        await wrapper.find('input[type=radio][value=month]').setValue()
        // Trigger the button on the form
        await wrapper.find('form').trigger('submit.prevent')
        // Assertions/Validations
        expect(wrapper.emitted('submit')[0][0]).toStrictEqual({
            email:email,
            description:description,
            country:country,
            subscribe: true,
            interval: 'month'
        })
    })
    
})