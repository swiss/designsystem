<template>
  <div class="section bg--secondary-50">
    <div class="container container--grid">
      <div class="container__center--sm">
        <h2 class="h2">Classical input types</h2>
        <div class="form">
          <div class="form__group">
            <Input
              type="text"
              id="text-id-0"
              label="Input type text"
              placeholder="Placeholder"
            />
          </div>
          <div class="form__group">
            <Select label="Select" id="select">
              <option disabled selected>Choose your country</option>
              <option>Switzerland</option>
              <option>Swaziland</option>
              <option>Sweden</option>
            </Select>
          </div>
          <div class="form__group">
            <Radio
              id="radio-0"
              name="radio-group-1"
              label="Label for value one"
              value="value-0"
            />
            <Radio
              id="radio-1"
              name="radio-group-1"
              label="Label for value two"
              value="value-1"
            />
            <Radio
              id="radio-2"
              name="radio-group-1"
              label="Label for value three"
              value="value-2"
            />
          </div>

          <div class="form__group">
            <Checkbox
              id="checkbox-0"
              name="checkbox-group-1"
              label="Label for value one"
              value="value-0"
            />
            <Checkbox
              id="checkbox-1"
              name="checkbox-group-1"
              label="Label for value two"
              value="value-1"
            />
          </div>
        </div>
        <h2 class="h2 mt-8">Other input types</h2>
        <div class="form">
          <Input
            type="color"
            id="color-id"
            label="Input type color"
            placeholder="Placeholder"
          />
          <Input
            type="date"
            id="date-id"
            label="Input type date"
            placeholder="Placeholder"
          />
          <Input
            type="datetime-local"
            id="datetime-local-id"
            label="Input type datetime-local"
            placeholder="Placeholder"
          />
          <Input
            type="email"
            id="email-id"
            label="Input type email"
            placeholder="Placeholder"
          />
          <Input
            type="file"
            id="file-id"
            label="Input type file"
            placeholder="Placeholder"
          />
          <Input
            type="month"
            id="month-id"
            label="Input type month"
            placeholder="Placeholder"
          />
          <Input
            type="number"
            id="number-id"
            label="Input type number"
            placeholder="Placeholder"
          />
          <Input
            type="number"
            id="number-id2"
            label="Input type number with restrictions"
            value="10"
            :min="0"
            :max="100"
            :step="10"
          />
          <Input
            type="password"
            id="password-id"
            label="Input type password"
            placeholder="Placeholder"
          />
          <Input
            type="range"
            id="range-id"
            :min="0"
            :max="50"
            label="Input type range"
            placeholder="Placeholder"
          />
          <Input
            type="search"
            id="search-id"
            label="Input type search"
            placeholder="Placeholder"
          />
          <Input
            type="tel"
            id="tel-id"
            label="Input type tel"
            placeholder="Placeholder"
            pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
          />
          <Input
            type="text"
            id="text-id"
            label="Input type text"
            placeholder="Placeholder"
          />
          <Input
            type="time"
            id="time-id"
            label="Input type time"
            placeholder="Placeholder"
          />
          <Input
            type="url"
            id="url-id"
            label="Input type url"
            placeholder="Placeholder"
          />
          <Input
            type="week"
            id="week-id"
            label="Input type week"
            placeholder="Placeholder"
          />
        </div>
        <div class="form">
          <h2 class="h2 mt-8">required fields example</h2>
          <div class="form__group">
            <Input
              type="text"
              id="text-id-0"
              label="Input type text"
              placeholder="Placeholder"
              required
            />
          </div>
          <div class="form__group">
            <Select label="Select" id="select" required>
              <option disabled selected>Choose your country</option>
              <option>Switzerland</option>
              <option>Swaziland</option>
              <option>Sweden</option>
            </Select>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Input from '../../ch/components/Input.vue'
import Select from '../../ch/components/Select.vue'
import Radio from '../../ch/components/Radio.vue'
import Checkbox from '../../ch/components/Checkbox.vue'
</script>
