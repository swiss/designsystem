<template>
  <div class="badge-filter">
    <Badge
      label="Alle"
      size="base"
      :color="activeFilter === 'all' ? 'active' : 'gray'"
      clickable
      :badgeClicked="() => badgeClicked('all')"
      :disabled="disabledFilters.includes('all')"
    />
    <Badge
      label="0-9"
      size="base"
      :color="activeFilter === 'numeric' ? 'active' : 'gray'"
      clickable
      :badgeClicked="() => badgeClicked('numeric')"
      :disabled="disabledFilters.includes('numeric')"
    />
    <Badge
      label="A"
      size="base"
      :color="activeFilter === 'a' ? 'active' : 'gray'"
      clickable
      :badgeClicked="() => badgeClicked('a')"
      :disabled="disabledFilters.includes('a')"
    />
    <Badge
      label="B"
      size="base"
      :color="activeFilter === 'b' ? 'active' : 'gray'"
      clickable
      :badgeClicked="() => badgeClicked('b')"
      :disabled="disabledFilters.includes('b')"
    />
    <Badge
      label="C"
      size="base"
      :color="activeFilter === 'c' ? 'active' : 'gray'"
      clickable
      :badgeClicked="() => badgeClicked('c')"
      :disabled="disabledFilters.includes('c')"
    />
    <Badge
      label="D"
      size="base"
      :color="activeFilter === 'd' ? 'active' : 'gray'"
      clickable
      :badgeClicked="() => badgeClicked('d')"
      :disabled="disabledFilters.includes('d')"
    />
    <Badge
      label="E"
      size="base"
      :color="activeFilter === 'e' ? 'active' : 'gray'"
      clickable
      :badgeClicked="() => badgeClicked('e')"
      :disabled="disabledFilters.includes('e')"
    />
    <Badge
      label="F"
      size="base"
      :color="activeFilter === 'f' ? 'active' : 'gray'"
      clickable
      :badgeClicked="() => badgeClicked('f')"
      :disabled="disabledFilters.includes('f')"
    />
    <Badge
      label="G"
      size="base"
      :color="activeFilter === 'g' ? 'active' : 'gray'"
      clickable
      :badgeClicked="() => badgeClicked('g')"
      :disabled="disabledFilters.includes('g')"
    />
    <Badge
      label="H"
      size="base"
      :color="activeFilter === 'h' ? 'active' : 'gray'"
      clickable
      :badgeClicked="() => badgeClicked('h')"
      :disabled="disabledFilters.includes('h')"
    />
    <Badge
      label="I"
      size="base"
      :color="activeFilter === 'i' ? 'active' : 'gray'"
      clickable
      :badgeClicked="() => badgeClicked('i')"
      :disabled="disabledFilters.includes('i')"
    />
    <Badge
      label="J"
      size="base"
      :color="activeFilter === 'j' ? 'active' : 'gray'"
      clickable
      :badgeClicked="() => badgeClicked('j')"
      :disabled="disabledFilters.includes('j')"
    />
    <Badge
      label="K"
      size="base"
      :color="activeFilter === 'k' ? 'active' : 'gray'"
      clickable
      :badgeClicked="() => badgeClicked('k')"
      :disabled="disabledFilters.includes('k')"
    />
    <Badge
      label="L"
      size="base"
      :color="activeFilter === 'l' ? 'active' : 'gray'"
      clickable
      :badgeClicked="() => badgeClicked('l')"
      :disabled="disabledFilters.includes('l')"
    />
    <Badge
      label="M"
      size="base"
      :color="activeFilter === 'm' ? 'active' : 'gray'"
      clickable
      :badgeClicked="() => badgeClicked('m')"
      :disabled="disabledFilters.includes('m')"
    />
    <Badge
      label="N"
      size="base"
      :color="activeFilter === 'n' ? 'active' : 'gray'"
      clickable
      :badgeClicked="() => badgeClicked('n')"
      :disabled="disabledFilters.includes('n')"
    />
    <Badge
      label="O"
      size="base"
      :color="activeFilter === 'o' ? 'active' : 'gray'"
      clickable
      :badgeClicked="() => badgeClicked('o')"
      :disabled="disabledFilters.includes('o')"
    />
    <Badge
      label="P"
      size="base"
      :color="activeFilter === 'p' ? 'active' : 'gray'"
      clickable
      :badgeClicked="() => badgeClicked('p')"
      :disabled="disabledFilters.includes('p')"
    />
    <Badge
      label="Q"
      size="base"
      :color="activeFilter === 'q' ? 'active' : 'gray'"
      clickable
      :badgeClicked="() => badgeClicked('q')"
      :disabled="disabledFilters.includes('q')"
    />
    <Badge
      label="R"
      size="base"
      :color="activeFilter === 'r' ? 'active' : 'gray'"
      clickable
      :badgeClicked="() => badgeClicked('r')"
      :disabled="disabledFilters.includes('r')"
    />
    <Badge
      label="S"
      size="base"
      :color="activeFilter === 's' ? 'active' : 'gray'"
      clickable
      :badgeClicked="() => badgeClicked('s')"
      :disabled="disabledFilters.includes('s')"
    />
    <Badge
      label="T"
      size="base"
      :color="activeFilter === 't' ? 'active' : 'gray'"
      clickable
      :badgeClicked="() => badgeClicked('t')"
      :disabled="disabledFilters.includes('t')"
    />
    <Badge
      label="U"
      size="base"
      :color="activeFilter === 'u' ? 'active' : 'gray'"
      clickable
      :badgeClicked="() => badgeClicked('u')"
      :disabled="disabledFilters.includes('u')"
    />
    <Badge
      label="V"
      size="base"
      :color="activeFilter === 'v' ? 'active' : 'gray'"
      clickable
      :badgeClicked="() => badgeClicked('v')"
      :disabled="disabledFilters.includes('v')"
    />
    <Badge
      label="W"
      size="base"
      :color="activeFilter === 'w' ? 'active' : 'gray'"
      clickable
      :badgeClicked="() => badgeClicked('w')"
      :disabled="disabledFilters.includes('w')"
    />
    <Badge
      label="X"
      size="base"
      :color="activeFilter === 'x' ? 'active' : 'gray'"
      clickable
      :badgeClicked="() => badgeClicked('x')"
      :disabled="disabledFilters.includes('x')"
    />
    <Badge
      label="Y"
      size="base"
      :color="activeFilter === 'y' ? 'active' : 'gray'"
      clickable
      :badgeClicked="() => badgeClicked('y')"
      :disabled="disabledFilters.includes('y')"
    />
    <Badge
      label="Z"
      size="base"
      :color="activeFilter === 'z' ? 'active' : 'gray'"
      clickable
      :badgeClicked="() => badgeClicked('z')"
      :disabled="disabledFilters.includes('z')"
    />
  </div>
</template>
<script setup lang="ts">
import Badge from '../components/Badge.vue'

defineProps({
  badgeClicked: {
    type: Function,
    default: () => {},
  },
  activeFilter: {
    type: String,
    default: 'all',
  },
  disabledFilters: {
    type: Array,
    default: () => [],
  },
})
</script>
