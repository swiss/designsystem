<template>
  <div class="container container--sm">
    <h2>Demo Form</h2>
    <div class="form">
      <Input type="text" id="text-id-0" label="Input type text" placeholder="Placeholder" />
      <Select label="Select">
        <option disabled selected>Choose your country</option>
        <option>Switzerland</option>
        <option>Swaziland</option>
        <option>Sweden</option>
      </Select>
    </div>
    <h3>Other input types</h3>
    <div class="form">
      <Input type="color" id="color-id" label="Input type color" placeholder="Placeholder" />
      <Input type="date" id="date-id" label="Input type date" placeholder="Placeholder" />
      <Input type="datetime-local" id="datetime-local-id" label="Input type datetime-local" placeholder="Placeholder" />
      <Input type="email" id="email-id" label="Input type email" placeholder="Placeholder" />
      <Input type="file" id="file-id" label="Input type file" placeholder="Placeholder" />
      <Input type="month" id="month-id" label="Input type month" placeholder="Placeholder" />
      <Input type="number" id="number-id" label="Input type number" placeholder="Placeholder" />
      <Input type="number" id="number-id2" label="Input type number with restrictions" value="10"
        min="0" max="100" step="10"
       />
      <Input type="password" id="password-id" label="Input type password" placeholder="Placeholder" />
      <Input type="range" id="range-id"
        min="0" max="50" label="Input type range" placeholder="Placeholder"
      />
      <Input type="search" id="search-id" label="Input type search" placeholder="Placeholder" />
      <Input type="tel" id="tel-id" label="Input type tel" placeholder="Placeholder"
        pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
      />
      <Input type="text" id="text-id" label="Input type text" placeholder="Placeholder" />
      <Input type="time" id="time-id" label="Input type time" placeholder="Placeholder" />
      <Input type="url" id="url-id" label="Input type url" placeholder="Placeholder" />
      <Input type="week" id="week-id" label="Input type week" placeholder="Placeholder" />
    </div>
  </div>
</template>

<script>
import Input from '../../ch/components/Input.vue'
import Select from '../../ch/components/Select.vue'

export default {
  name: 'FormDemo',
  components: {
    Input,
    Select
  }
}
</script>