<template>
  <div id="app">
    <nav class="navigation">
      <ul>
        <li>
          <router-link class='link' to="/">Home</router-link>
        </li>
        <li>
          <router-link class='link' to="/first">First Page</router-link>
        </li>
        <li>
          <router-link class='link' to="/second">Second Page</router-link>
        </li>
        <li>
          <router-link class='link' to="/third">Third Page</router-link>
        </li>
      </ul>
    </nav>
    
    <router-view></router-view>    
  </div>
</template>

<script>


export default {
  name: 'App',
}
</script>

<style>
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
}

.link:active {
  color: blue;
  text-decoration: underline;
}

.btn {
  margin: 25px;
}
</style>
