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
      <button type="button" class="btn btn-key" @click="type('Ç')">Ç</button>
    </div>
    <div class="text-center">
      <button type="button" class="btn btn-key" @click="type(' ')">_</button>
      <button type="button" class="btn btn-key" @click="type('Z')">Z</button>
      <button type="button" class="btn btn-key" @click="type('X')">X</button>
      <button type="button" class="btn btn-key" @click="type('C')">C</button>
      <button type="button" class="btn btn-key" @click="type('V')">V</button>
      <button type="button" class="btn btn-key" @click="type('B')">B</button>
      <button type="button" class="btn btn-key" @click="type('N')">N</button>
      <button type="button" class="btn btn-key" @click="type('M')">M</button>
      <button type="button" class="btn btn-key" @click="backspace()">
        <svg height="512" viewBox="0 0 1629 1024">
          <path d="M1304.292774 4.89726H551.304384c-43.309381 0-102.337256 22.872894-131.183016 51.066772L35.527545 432.034504c-42.836767 41.875242-43.211599 110.730231 0 152.972156l384.593823 376.037878c28.747977 28.120541 87.580288 51.07492 131.183016 51.074921h752.98839c174.965011 0 316.977409-122.643367 316.977408-273.879889V278.809743c0.008149-151.415789-141.922764-273.912483-316.977408-273.912483z m252.066302 733.34231c0 58.204875-26.262678 112.897738-73.898923 154.088503-47.628096 41.125578-110.893202 63.770314-178.159231 63.770314H551.304384c-25.056697 0-65.913374-15.897762-82.487463-32.113315L84.214949 547.947194c-10.193798-9.981936-16.052583-24.364073-16.011841-39.479577 0.016297-15.107355 5.858786-29.448749 16.011841-39.381795l384.61012-376.062323c5.956568-5.83434 19.116427-14.699929 38.135072-22.082488 19.002347-7.382559 35.364575-10.022679 44.36054-10.022679h752.980241c67.323068 0 130.604471 22.652884 178.199973 63.754016 47.628096 41.141875 73.858181 95.883629 73.858181 154.145544v459.421678z" fill="#686868" /><path d="M1163.103376 284.252954L939.361328 477.283233 715.627428 284.252954l-47.856255 41.288549 223.7339 193.038426L667.771173 711.610208l47.856255 41.296697 223.7339-193.046576 223.742048 193.046576 47.856255-41.296697-223.742048-193.030279 223.742048-193.038426-47.856255-41.288549z"/>
        </svg>
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
