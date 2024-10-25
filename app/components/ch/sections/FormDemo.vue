<template>
  <div class="section bg--secondary-50">
    <div class="container container--grid">
      <div class="container__center--sm">
        <h2 class="h2">Classical input types</h2>
        <div class="form">
          <div class="form__group">
            <Input
              id="text-id-0"
              type="text"
              label="Input type text"
              placeholder="Placeholder"
            />
          </div>
          <div class="form__group">
            <Select id="select" label="Select">
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
            id="color-id"
            type="color"
            label="Input type color"
            placeholder="Placeholder"
          />
          <Input
            id="date-id"
            type="date"
            label="Input type date"
            placeholder="Placeholder"
          />
          <Input
            id="datetime-local-id"
            type="datetime-local"
            label="Input type datetime-local"
            placeholder="Placeholder"
          />
          <Input
            id="email-id"
            type="email"
            label="Input type email"
            placeholder="Placeholder"
          />
          <Input
            id="file-id"
            type="file"
            label="Input type file"
            placeholder="Placeholder"
          />
          <Input
            id="month-id"
            type="month"
            label="Input type month"
            placeholder="Placeholder"
          />
          <Input
            id="number-id"
            type="number"
            label="Input type number"
            placeholder="Placeholder"
          />
          <Input
            id="number-id2"
            type="number"
            label="Input type number with restrictions"
            value="10"
            :min="0"
            :max="100"
            :step="10"
          />
          <Input
            id="password-id"
            type="password"
            label="Input type password"
            placeholder="Placeholder"
          />
          <Input
            id="range-id"
            type="range"
            :min="0"
            :max="50"
            label="Input type range"
            placeholder="Placeholder"
          />
          <Input
            id="search-id"
            type="search"
            label="Input type search"
            placeholder="Placeholder"
          />
          <Input
            id="tel-id"
            type="tel"
            label="Input type tel"
            placeholder="Placeholder"
            pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
          />
          <Input
            id="text-id"
            type="text"
            label="Input type text"
            placeholder="Placeholder"
          />
          <Input
            id="time-id"
            type="time"
            label="Input type time"
            placeholder="Placeholder"
          />
          <Input
            id="url-id"
            type="url"
            label="Input type url"
            placeholder="Placeholder"
          />
          <Input
            id="week-id"
            type="week"
            label="Input type week"
            placeholder="Placeholder"
          />
        </div>
        <div class="form">
          <h2 class="h2 mt-8">required fields example</h2>
          <div class="form__group">
            <Input
              id="text-id-0"
              type="text"
              label="Input type text"
              placeholder="Placeholder"
              required
            />
          </div>
          <div class="form__group">
            <Select id="select" label="Select" required>
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

<script setup lang="ts">
import Input from '../../ch/components/Input.vue'
import Select from '../../ch/components/Select.vue'
import Radio from '../../ch/components/Radio.vue'
import Checkbox from '../../ch/components/Checkbox.vue'
</script>
