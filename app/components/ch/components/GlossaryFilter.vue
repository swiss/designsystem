<template>
  <div class="badge-filter">
    <badge
      label="Alle"
      size="base"
      :color="activeFilter === 'all' ? 'negative' : 'gray'"
      clickable
      :badgeClicked="() => badgeClicked('all')"
      :disabled="disabledFilters.includes('all')"
    />
    <badge
      label="0-9"
      size="base"
      :color="activeFilter === 'numbric' ? 'negative' : 'gray'"
      clickable
      :badgeClicked="() => badgeClicked('numbric')"
      :disabled="disabledFilters.includes('numbric')"
    />
    <badge
      label="A"
      size="base"
      :color="activeFilter === 'a' ? 'negative' : 'gray'"
      clickable
      :badgeClicked="() => badgeClicked('a')"
      :disabled="disabledFilters.includes('a')"
    />
    <badge
      label="B"
      size="base"
      :color="activeFilter === 'b' ? 'negative' : 'gray'"
      clickable
      :badgeClicked="() => badgeClicked('b')"
      :disabled="disabledFilters.includes('b')"
    />
    <badge
      label="C"
      size="base"
      :color="activeFilter === 'c' ? 'negative' : 'gray'"
      clickable
      :badgeClicked="() => badgeClicked('c')"
      :disabled="disabledFilters.includes('c')"
    />
    <badge
      label="D"
      size="base"
      :color="activeFilter === 'd' ? 'negative' : 'gray'"
      clickable
      :badgeClicked="() => badgeClicked('d')"
      :disabled="disabledFilters.includes('d')"
    />
    <badge
      label="E"
      size="base"
      :color="activeFilter === 'e' ? 'negative' : 'gray'"
      clickable
      :badgeClicked="() => badgeClicked('e')"
      :disabled="disabledFilters.includes('e')"
    />
    <badge
      label="F"
      size="base"
      :color="activeFilter === 'f' ? 'negative' : 'gray'"
      clickable
      :badgeClicked="() => badgeClicked('f')"
      :disabled="disabledFilters.includes('f')"
    />
    <badge
      label="G"
      size="base"
      :color="activeFilter === 'g' ? 'negative' : 'gray'"
      clickable
      :badgeClicked="() => badgeClicked('g')"
      :disabled="disabledFilters.includes('g')"
    />
    <badge
      label="H"
      size="base"
      :color="activeFilter === 'h' ? 'negative' : 'gray'"
      clickable
      :badgeClicked="() => badgeClicked('h')"
      :disabled="disabledFilters.includes('h')"
    />
    <badge
      label="I"
      size="base"
      :color="activeFilter === 'i' ? 'negative' : 'gray'"
      clickable
      :badgeClicked="() => badgeClicked('i')"
      :disabled="disabledFilters.includes('i')"
    />
    <badge
      label="J"
      size="base"
      :color="activeFilter === 'j' ? 'negative' : 'gray'"
      clickable
      :badgeClicked="() => badgeClicked('j')"
      :disabled="disabledFilters.includes('j')"
    />
    <badge
      label="K"
      size="base"
      :color="activeFilter === 'k' ? 'negative' : 'gray'"
      clickable
      :badgeClicked="() => badgeClicked('k')"
      :disabled="disabledFilters.includes('k')"
    />
    <badge
      label="L"
      size="base"
      :color="activeFilter === 'l' ? 'negative' : 'gray'"
      clickable
      :badgeClicked="() => badgeClicked('l')"
      :disabled="disabledFilters.includes('l')"
    />
    <badge
      label="M"
      size="base"
      :color="activeFilter === 'm' ? 'negative' : 'gray'"
      clickable
      :badgeClicked="() => badgeClicked('m')"
      :disabled="disabledFilters.includes('m')"
    />
    <badge
      label="N"
      size="base"
      :color="activeFilter === 'n' ? 'negative' : 'gray'"
      clickable
      :badgeClicked="() => badgeClicked('n')"
      :disabled="disabledFilters.includes('n')"
    />
    <badge
      label="O"
      size="base"
      :color="activeFilter === 'o' ? 'negative' : 'gray'"
      clickable
      :badgeClicked="() => badgeClicked('o')"
      :disabled="disabledFilters.includes('o')"
    />
    <badge
      label="P"
      size="base"
      :color="activeFilter === 'p' ? 'negative' : 'gray'"
      clickable
      :badgeClicked="() => badgeClicked('p')"
      :disabled="disabledFilters.includes('p')"
    />
    <badge
      label="Q"
      size="base"
      :color="activeFilter === 'q' ? 'negative' : 'gray'"
      clickable
      :badgeClicked="() => badgeClicked('q')"
      :disabled="disabledFilters.includes('q')"
    />
    <badge
      label="R"
      size="base"
      :color="activeFilter === 'r' ? 'negative' : 'gray'"
      clickable
      :badgeClicked="() => badgeClicked('r')"
      :disabled="disabledFilters.includes('r')"
    />
    <badge
      label="S"
      size="base"
      :color="activeFilter === 's' ? 'negative' : 'gray'"
      clickable
      :badgeClicked="() => badgeClicked('s')"
      :disabled="disabledFilters.includes('s')"
    />
    <badge
      label="T"
      size="base"
      :color="activeFilter === 't' ? 'negative' : 'gray'"
      clickable
      :badgeClicked="() => badgeClicked('t')"
      :disabled="disabledFilters.includes('t')"
    />
    <badge
      label="U"
      size="base"
      :color="activeFilter === 'u' ? 'negative' : 'gray'"
      clickable
      :badgeClicked="() => badgeClicked('u')"
      :disabled="disabledFilters.includes('u')"
    />
    <badge
      label="V"
      size="base"
      :color="activeFilter === 'v' ? 'negative' : 'gray'"
      clickable
      :badgeClicked="() => badgeClicked('v')"
      :disabled="disabledFilters.includes('v')"
    />
    <badge
      label="W"
      size="base"
      :color="activeFilter === 'w' ? 'negative' : 'gray'"
      clickable
      :badgeClicked="() => badgeClicked('w')"
      :disabled="disabledFilters.includes('w')"
    />
    <badge
      label="X"
      size="base"
      :color="activeFilter === 'x' ? 'negative' : 'gray'"
      clickable
      :badgeClicked="() => badgeClicked('x')"
      :disabled="disabledFilters.includes('x')"
    />
    <badge
      label="Y"
      size="base"
      :color="activeFilter === 'y' ? 'negative' : 'gray'"
      clickable
      :badgeClicked="() => badgeClicked('y')"
      :disabled="disabledFilters.includes('y')"
    />
    <badge
      label="Z"
      size="base"
      :color="activeFilter === 'z' ? 'negative' : 'gray'"
      clickable
      :badgeClicked="() => badgeClicked('z')"
      :disabled="disabledFilters.includes('z')"
    />
  </div>
</template>
<script setup lang="ts">
import badge from '../components/Badge.vue'

const props = defineProps({
  badgeClicked: {
    type: Function,
    default: () => {},
  },
  activeFilter: {
    type: String,
    default: () => 'all',
  },
  disabledFilters: {
    type: Array,
    default: () => [],
  },
})
</script>
