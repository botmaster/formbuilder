<template>
  <form @submit.prevent="handleSubmit">
    <div class="input-row" v-for="(field, index) in formFields" :key="index">
      <label :for="field.name">{{ field.label }}</label>

      <input
        v-if="
          field.type === 'text' ||
          field.type === 'email' ||
          field.type === 'tel' ||
          field.type === 'password'
        "
        :name="field.name"
        :type="field.type"
        :id="field.name"
        :placeholder="field.placeholder || ''"
        v-model="formData[field.name]"
      />
      <input
        v-else-if="field.type === 'number'"
        :name="field.name"
        :type="field.type"
        :id="field.name"
        :placeholder="field.placeholder || ''"
        :min="field.min || null"
        :max="field.max || null"
        :step="field.step || null"
        v-model="formData[field.name]"
      />

      <!-- Use the `select` tag and loop through its options if it's a select input -->
      <select
        v-else-if="field.type === 'select'"
        :name="field.name"
        :id="field.name"
        v-model="formData[field.name]"
      >
        <option
          v-for="(option, optIndex) in field.options"
          :key="optIndex"
          :value="option.value"
        >
          {{ option.label }}
        </option>
      </select>

      <textarea
        v-else-if="field.type === 'textarea'"
        :name="field.name"
        :id="field.name"
        :placeholder="field.placeholder"
        v-model="formData[field.name]"
      />
    </div>
    <div class="input-row">
      <button type="submit">Submit</button>
    </div>
  </form>
</template>

<script>
import FormBuilder from '../utils/FormBuilder';

export default {
  props: {
    formConfig: [Array, Object], // Pass the form configuration as an array or object
  },
  data() {
    return {
      formFields: [],
      formData: {},
    };
  },
  created() {
    // Check if formConfig is defined before using it
    if (this.formConfig) {
      // Use the FormBuilder to build the formFields array based on formConfig
      this.formFields = this.buildFormFields(this.formConfig);
    }
  },
  methods: {
    buildFormFields(config) {
      const formFields = [];

      if (Array.isArray(config)) {
        // If config is an array, assume it's an array of field objects
        return config;
      } else if (typeof config === 'object') {
        // If config is an object, assume it's a field configuration object
        for (const fieldName of Object.keys(config)) {
          const field = config[fieldName];

          // Create a new field object based on field.type
          let newField = null;

          switch (field.type) {
            case 'text':
            case 'email': // Add email type
              newField = {
                type: field.type,
                name: fieldName,
                label: field.label || '',
                placeholder: field.placeholder || '',
              };
              break;
            case 'number':
              newField = {
                type: 'number',
                name: fieldName,
                label: field.label || '',
                placeholder: field.placeholder || '',
                min: field.min || null,
                max: field.max || null,
                step: field.step || null,
              };
              break;
            case 'select':
              newField = {
                type: 'select',
                name: fieldName,
                label: field.label || '',
                options: field.options || [],
              };
              break;
            // Add more cases for other field types if needed
          }

          if (newField) {
            formFields.push(newField);
          }
        }
      }

      return formFields;
    },
    handleSubmit(e) {
      e.preventDefault();
      // Create a new object to copy the form data
      const formDataCopy = { ...this.formData };

      // Log the copied form data
      console.log(formDataCopy);
    },
  },
};
</script>
