<template>
  <div class="keyboard">
    <div class="text-center">
      <button type="button" class="btn btn-key" @click="type('Q')">Q</button>
      <button type="button" class="btn btn-key" @click="type('W')">W</button>
      <button type="button" class="btn btn-key" @click="type('E')">E</button>
      <button type="button" class="btn btn-key" @click="type('R')">R</button>
      <button type="button" class="btn btn-key" @click="type('T')">T</button>
      <button type="button" class="btn btn-key" @click="type('Y')">Y</button>
      <button type="button" class="btn btn-key" @click="type('U')">U</button>
      <button type="button" class="btn btn-key" @click="type('I')">I</button>
      <button type="button" class="btn btn-key" @click="type('O')">O</button>
      <button type="button" class="btn btn-key" @click="type('P')">P</button>
    </div>
    <div class="text-center">
      <button type="button" class="btn btn-key" @click="type('A')">A</button>
      <button type="button" class="btn btn-key" @click="type('S')">S</button>
      <button type="button" class="btn btn-key" @click="type('D')">D</button>
      <button type="button" class="btn btn-key" @click="type('F')">F</button>
      <button type="button" class="btn btn-key" @click="type('G')">G</button>
      <button type="button" class="btn btn-key" @click="type('H')">H</button>
      <button type="button" class="btn btn-key" @click="type('J')">J</button>
      <button type="button" class="btn btn-key" @click="type('K')">K</button>
      <button type="button" class="btn btn-key" @click="type('L')">L</button>
    </div>
    <div class="text-center">
      <button type="button" class="btn btn-key" @click="type('Z')">Z</button>
      <button type="button" class="btn btn-key" @click="type('X')">X</button>
      <button type="button" class="btn btn-key" @click="type('C')">C</button>
      <button type="button" class="btn btn-key" @click="type('V')">V</button>
      <button type="button" class="btn btn-key" @click="type('B')">B</button>
      <button type="button" class="btn btn-key" @click="type('N')">N</button>
      <button type="button" class="btn btn-key" @click="type('M')">M</button>
      <button type="button" class="btn btn-key btn-backspace" @click="backspace()">
        <FontAwesome icon="backspace"/>
      </button>
    </div>
    <div class="text-center">
      <button type="button" class="btn btn-key btn-space" @click="type(' ')">
        {{ $t('space') }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'keyboard',
  props: {
    value: {
      type: String,
      default: () => ''
    },
    maxlength: {
      type: Number,
      default: () => 10
    }
  },
  methods: {
    type(character) {
      if (this.value.length < this.maxlength) {
        const normalized = this.value.replace(/\s+/g, ' ').trimLeft()
        this.$emit('input', `${normalized}${character}`)
      }
    },
    backspace() {
      this.$emit('input', this.value.slice(0, -1))
    }
  }
}
</script>

<i18n>
{
  "br": {
    "space": "espaço"
  },
  "en": {
    "space": "space"
  }
}
</i18n>
