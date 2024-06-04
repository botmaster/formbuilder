<template>
  <h3>Forms created with the Builder pattern in Vue</h3>
  <div class="form-container">
    <Form :form-config="formConfig1" />
    <Form :form-config="formConfig2" />
    <Form :form-config="formConfig3" />
  </div>
</template>

<script>
import Form from './components/Form.vue';
import './style.css';

export default {
  components: {
    Form,
  },
  data() {
    return {
      formConfig1: [
        // Define the fields for the first form
        // Example:
        {
          type: 'text',
          name: 'username',
          label: 'Username',
          placeholder: 'Enter your username',
        },
        {
          type: 'password',
          name: 'password',
          label: 'Password',
          placeholder: 'Your password',
        },
        {
          type: 'number',
          name: 'monNumber',
          label: 'Mon nombre',
          placeholder: 'Mon nombre',
          step: 10,
        },
      ],
      formConfig2: [
        // Define the fields for the second form
        // Example:
        {
          type: 'text',
          name: 'firstname',
          label: 'First Name',
          placeholder: 'eg. John',
        },
        {
          type: 'text',
          name: 'lastname',
          label: 'Last Name',
          placeholder: 'eg. Doe',
        },
        {
          type: 'number',
          name: 'age',
          label: 'Age',
          placeholder: 'Should be 13+',
          min: 13,
          max: 65,
          step: 1,
        },
        // Add other fields here...
      ],
      formConfig3: [
        // Define the fields for the second form
        // Example:
        {
          type: 'tel',
          name: 'phone',
          label: 'Phone',
          placeholder: '',
        },
        {
          type: 'textarea',
          name: 'address',
          label: 'Address',
          placeholder: '',
        },
        // Add other fields here...
      ],
    };
  },
};
</script>
