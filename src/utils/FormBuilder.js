// FormBuilder.js
class FormBuilder {
  constructor() {
    this.formFields = [];
  }

  addTextField(name, label, placeholder = '') {
    this.formFields.push({
      type: 'text' || 'email' || 'password' || 'tel',
      name,
      label,
      placeholder,
    });
    return this; // Return the builder instance for method chaining
  }

  addNumberField(
    name,
    label,
    placeholder = '',
    min = null,
    max = null,
    step = null
  ) {
    this.formFields.push({
      type: 'number',
      name,
      label,
      placeholder,
      min,
      max,
      step,
    });
    return this;
  }

  addSelectField(name, label, options = []) {
    this.formFields.push({
      type: 'select',
      name,
      label,
      options,
    });
    return this;
  }

  addTextareaField(name, label, placeholder = '') {
    this.formFields.push({
      type: 'textarea',
      name,
      label,
      placeholder,
    });
    return this;
  }

  build() {
    return this.formFields;
  }
}

export default FormBuilder;
