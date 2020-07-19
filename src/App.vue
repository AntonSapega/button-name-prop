<template>
  <div id="app">
    <nav class="navigation">
      <ul>
        <li v-for="(page, index) in pages" :key="'index' + index" @click="clickHandler(index)">
          <router-link class='link' :class="activePage(index) ? 'active' : ''" :to="page.src">
          {{page.name}}
          </router-link>
        </li>
      </ul>
    </nav>
    
    <router-view></router-view>    
  </div>
</template>

<script>

export default {
  name: 'App',

  data() {
    return {
      pages: [
        {name: 'Home', src: '/'},
        {name: 'First Page', src: '/first'},
        {name: 'Second Page', src: '/second'},
        {name: 'Third Page', src: '/third'},
        {name: 'Reverse Page', src: '/reverse'}
        
      ],

      selectedPage: null
    }
  },

  methods: {
    activePage(i) {
      return i === this.selectedPage
    },

    clickHandler(i) {
      this.selectedPage = i
    }
  }
}  
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  position: relative;
}

.navigation ul {
  display: flex;
  flex-direction: row;
  list-style: none;
  justify-content: left;
  
}

.navigation ul li {
  margin: 15px;
  font-size: 22px;
}

.link {
  text-decoration: none;
  color: rgb(73, 72, 72);
}

.active {
  text-decoration: underline;
}

.btn {
  margin: 25px;
}
</style>
