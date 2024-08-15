<template>
  <div class="glossary-filter">
    <badge
      label="Alle"
      size="base"
      :color="activeFilter === 'all' ? 'negative' : 'gray'"
      clickable
      :badgeClicked="() => badgeClicked('all')"
    />
    <badge
      label="0-9"
      size="base"
      :color="activeFilter === 'numbric' ? 'negative' : 'gray'"
      clickable
      :badgeClicked="() => badgeClicked('numbric')"
    />
    <badge
      label="A"
      size="base"
      :color="activeFilter === 'a' ? 'negative' : 'gray'"
      clickable
      :badgeClicked="() => badgeClicked('a')"
    />
    <badge
      label="B"
      size="base"
      :color="activeFilter === 'b' ? 'negative' : 'gray'"
      clickable
      :badgeClicked="() => badgeClicked('b')"
    />
    <badge
      label="C"
      size="base"
      :color="activeFilter === 'c' ? 'negative' : 'gray'"
      clickable
      :badgeClicked="() => badgeClicked('c')"
    />
    <badge
      label="D"
      size="base"
      :color="activeFilter === 'd' ? 'negative' : 'gray'"
      clickable
      :badgeClicked="() => badgeClicked('d')"
    />
    <badge
      label="E"
      size="base"
      :color="activeFilter === 'e' ? 'negative' : 'gray'"
      clickable
      :badgeClicked="() => badgeClicked('e')"
    />
    <badge
      label="F"
      size="base"
      :color="activeFilter === 'f' ? 'negative' : 'gray'"
      clickable
      :badgeClicked="() => badgeClicked('f')"
    />
    <badge
      label="G"
      size="base"
      :color="activeFilter === 'g' ? 'negative' : 'gray'"
      clickable
      :badgeClicked="() => badgeClicked('g')"
    />
    <badge
      label="H"
      size="base"
      :color="activeFilter === 'h' ? 'negative' : 'gray'"
      clickable
      :badgeClicked="() => badgeClicked('h')"
    />
    <badge
      label="I"
      size="base"
      :color="activeFilter === 'i' ? 'negative' : 'gray'"
      clickable
      :badgeClicked="() => badgeClicked('i')"
    />
    <badge
      label="J"
      size="base"
      :color="activeFilter === 'j' ? 'negative' : 'gray'"
      clickable
      :badgeClicked="() => badgeClicked('j')"
    />
    <badge
      label="K"
      size="base"
      :color="activeFilter === 'k' ? 'negative' : 'gray'"
      clickable
      :badgeClicked="() => badgeClicked('k')"
    />
    <badge
      label="L"
      size="base"
      :color="activeFilter === 'l' ? 'negative' : 'gray'"
      clickable
      :badgeClicked="() => badgeClicked('l')"
    />
    <badge
      label="M"
      size="base"
      :color="activeFilter === 'm' ? 'negative' : 'gray'"
      clickable
      :badgeClicked="() => badgeClicked('m')"
    />
    <badge
      label="N"
      size="base"
      :color="activeFilter === 'n' ? 'negative' : 'gray'"
      clickable
      :badgeClicked="() => badgeClicked('n')"
    />
    <badge
      label="O"
      size="base"
      :color="activeFilter === 'o' ? 'negative' : 'gray'"
      clickable
      :badgeClicked="() => badgeClicked('o')"
    />
    <badge
      label="P"
      size="base"
      :color="activeFilter === 'p' ? 'negative' : 'gray'"
      clickable
      :badgeClicked="() => badgeClicked('p')"
    />
    <badge
      label="Q"
      size="base"
      :color="activeFilter === 'q' ? 'negative' : 'gray'"
      clickable
      :badgeClicked="() => badgeClicked('q')"
    />
    <badge
      label="R"
      size="base"
      :color="activeFilter === 'r' ? 'negative' : 'gray'"
      clickable
      :badgeClicked="() => badgeClicked('r')"
    />
    <badge
      label="S"
      size="base"
      :color="activeFilter === 's' ? 'negative' : 'gray'"
      clickable
      :badgeClicked="() => badgeClicked('s')"
    />
    <badge
      label="T"
      size="base"
      :color="activeFilter === 't' ? 'negative' : 'gray'"
      clickable
      :badgeClicked="() => badgeClicked('t')"
    />
    <badge
      label="U"
      size="base"
      :color="activeFilter === 'u' ? 'negative' : 'gray'"
      clickable
      :badgeClicked="() => badgeClicked('u')"
    />
    <badge
      label="V"
      size="base"
      :color="activeFilter === 'v' ? 'negative' : 'gray'"
      clickable
      :badgeClicked="() => badgeClicked('v')"
    />
    <badge
      label="W"
      size="base"
      :color="activeFilter === 'w' ? 'negative' : 'gray'"
      clickable
      :badgeClicked="() => badgeClicked('w')"
    />
    <badge
      label="X"
      size="base"
      :color="activeFilter === 'x' ? 'negative' : 'gray'"
      clickable
      :badgeClicked="() => badgeClicked('x')"
    />
    <badge
      label="Y"
      size="base"
      :color="activeFilter === 'y' ? 'negative' : 'gray'"
      clickable
      :badgeClicked="() => badgeClicked('y')"
    />
    <badge
      label="Z"
      size="base"
      :color="activeFilter === 'z' ? 'negative' : 'gray'"
      clickable
      :badgeClicked="() => badgeClicked('z')"
    />
  </div>
</template>
<script>
import badge from '../components/Badge.vue';

export default {
  name: 'GlossaryFilter',
  components: { badge },
  props: {
    badgeClicked: {
      type: Function,
      default: () => {},
    },
    activeFilter: {
      type: String,
      default: 'all',
    },
  },
}
</script>
